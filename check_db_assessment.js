require('dotenv').config({ path: '.env.local' });
const { drizzle } = require("drizzle-orm/node-postgres");
const { Pool } = require("pg");
const { assessmentResponses } = require("./src/db/schema");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

async function check() {
  try {
    const rows = await db.select().from(assessmentResponses);
    console.log("Assessments in DB:", rows.length);
    if(rows.length > 0) {
      console.log("Latest:", rows[rows.length - 1]);
    }
  } catch(e) {
    console.error("Error:", e);
  } finally {
    await pool.end();
  }
}
check();
