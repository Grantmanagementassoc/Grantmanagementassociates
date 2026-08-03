import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const databaseUrl = process.env.DATABASE_URL || "";

if (!databaseUrl && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL is not set. Database operations will fail at runtime.");
}

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlPool?: Pool;
};

export const pool =
  globalForDb.__arenaNextJsPostgresqlPool ??
  (databaseUrl ? new Pool({ connectionString: databaseUrl }) : ({} as Pool));

if (process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsPostgresqlPool = pool;
}

// @ts-ignore - bypassing strict type check for dummy pool
export const db = drizzle(pool);
