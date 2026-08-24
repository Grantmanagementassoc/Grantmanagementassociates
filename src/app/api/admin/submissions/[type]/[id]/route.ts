import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactSubmissions, assessmentResponses } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireAdmin } from "@/lib/admin-auth";
type P={type:string;id:string};
export async function PATCH(req:Request,{params}:{params:Promise<P>}){try{await requireAdmin("submissions");const {type,id}=await params;const b=await req.json();const values={status:String(b.status||"new"),assignedTo:b.assignedTo?Number(b.assignedTo):null,internalNotes:b.internalNotes?String(b.internalNotes):null};if(type==="contact")await db.update(contactSubmissions).set(values).where(eq(contactSubmissions.id,Number(id)));else if(type==="assessment")await db.update(assessmentResponses).set(values).where(eq(assessmentResponses.id,Number(id)));else return NextResponse.json({error:"Invalid type"},{status:400});return NextResponse.json({ok:true});}catch{return NextResponse.json({error:"Unauthorized"},{status:401});}}
