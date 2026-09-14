require('dotenv').config({ path: '.env.local' });
import { db } from "./src/db/index";
import { contactSubmissions } from "./src/db/schema";
import { sql } from "drizzle-orm";

async function check() {
  try {
    const [row] = await db.insert(contactSubmissions).values({
      name: "drgs",
      email: "abc@gmail.com",
      phone: "1234564789",
      organization: "asx",
      serviceInterest: "Go / No-Go Analysis",
      budget: "$150K+",
      message: "AXAs"
    }).returning();
    console.log("Success! Inserted:", row);
  } catch(e: any) {
    console.error("Error occurred!");
    console.error("Message:", e.message);
    if(e.cause) console.error("Cause:", e.cause);
    if(e.detail) console.error("Detail:", e.detail);
  }
}
check().catch(console.error);
