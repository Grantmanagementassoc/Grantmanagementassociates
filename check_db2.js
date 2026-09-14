require('dotenv').config({ path: '.env.local' });
const { drizzle } = require("drizzle-orm/node-postgres");
const { Pool } = require("pg");
const { contactSubmissions } = require("./src/db/schema");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

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
  } catch(e) {
    console.error("Error occurred!", e);
  } finally {
    await pool.end();
  }
}
check();
