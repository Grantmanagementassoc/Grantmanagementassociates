import "server-only";
import { cookies } from "next/headers";
import { randomBytes, scryptSync, timingSafeEqual, createHash } from "crypto";
import { db } from "@/db";
import { adminSessions, adminUsers } from "@/db/schema";
import { and, eq, gt } from "drizzle-orm";

const COOKIE = "gma_admin_session";
export const ALL_PERMISSIONS = ["articles", "submissions", "employees", "tasks"] as const;
export type Permission = (typeof ALL_PERMISSIONS)[number];

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const attempt = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return attempt.length === expected.length && timingSafeEqual(attempt, expected);
}

function tokenHash(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function createAdminSession(userId: number) {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 12);
  await db.insert(adminSessions).values({ userId, tokenHash: tokenHash(token), expiresAt });
  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

export async function destroyAdminSession() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (token) await db.delete(adminSessions).where(eq(adminSessions.tokenHash, tokenHash(token)));
  jar.delete(COOKIE);
}

export async function getAdminUser() {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  const rows = await db
    .select({
      id: adminUsers.id,
      name: adminUsers.name,
      email: adminUsers.email,
      role: adminUsers.role,
      permissions: adminUsers.permissions,
      active: adminUsers.active,
    })
    .from(adminSessions)
    .innerJoin(adminUsers, eq(adminSessions.userId, adminUsers.id))
    .where(and(eq(adminSessions.tokenHash, tokenHash(token)), gt(adminSessions.expiresAt, new Date())))
    .limit(1);
  return rows[0]?.active ? rows[0] : null;
}

export function canAccess(user: NonNullable<Awaited<ReturnType<typeof getAdminUser>>>, permission: Permission) {
  return user.role === "owner" || user.role === "admin" || user.permissions.includes(permission);
}

export async function requireAdmin(permission?: Permission) {
  const user = await getAdminUser();
  if (!user) throw new Error("UNAUTHORIZED");
  if (permission && !canAccess(user, permission)) throw new Error("FORBIDDEN");
  return user;
}
