import { NextResponse } from "next/server";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin,ALL_PERMISSIONS,hashPassword } from "@/lib/admin-auth";
type P={id:string};
export async function PATCH(req:Request,{params}:{params:Promise<P>}){try{const me=await requireAdmin("employees");if(me.role!=="owner"&&me.role!=="admin")return NextResponse.json({error:"Forbidden"},{status:403});const {id}=await params;if(me.id===Number(id))return NextResponse.json({error:"Use another owner to modify your own access."},{status:400});const b=await req.json();const values:{name?:string;role?:string;permissions?:string[];active?:boolean;passwordHash?:string}={};if(b.name)values.name=b.name;if(b.role)values.role=b.role;if(Array.isArray(b.permissions))values.permissions=b.permissions.filter((p:string)=>ALL_PERMISSIONS.includes(p as never));if(typeof b.active==="boolean")values.active=b.active;if(typeof b.password==="string"&&b.password.length>=12)values.passwordHash=hashPassword(b.password);await db.update(adminUsers).set(values).where(eq(adminUsers.id,Number(id)));return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Unable to update employee."},{status:400});}}
