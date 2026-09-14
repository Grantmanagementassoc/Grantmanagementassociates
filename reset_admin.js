require('dotenv').config({ path: '.env.local' });
const { drizzle } = require("drizzle-orm/node-postgres");
const { Pool } = require("pg");
const { adminUsers } = require("./src/db/schema");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool);

async function reset() {
  try {
    await db.delete(adminUsers);
    console.log("Successfully deleted all admin users!");
  } catch(e) {
    console.error("Error occurred!", e);
  } finally {
    await pool.end();
  }
}
reset();
