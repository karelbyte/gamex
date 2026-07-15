import { getDb } from "@/lib/db";
import { Pool } from "pg";

export async function GET() {
  try {
    const db = await getDb();
    await db.query("SELECT 1");
    return Response.json({ status: "ok" }, { status: 200 });
  } catch (e: any) {
    return Response.json({ status: "error", message: e?.message || String(e) }, { status: 503 });
  }
}

export async function POST() {
  const results: Record<string, any> = {};
  try {
    results.env = {
      RDS_HOST: process.env.RDS_HOST || "(not set)",
      RDS_PORT: process.env.RDS_PORT || "(not set)",
      RDS_USER: process.env.RDS_USER || "(not set)",
      RDS_DATABASE: process.env.RDS_DATABASE || "(not set)",
      AWS_REGION: process.env.AWS_REGION || "(not set)",
      NODE_ENV: process.env.NODE_ENV || "(not set)",
    };
    try {
      const db = await getDb();
      const { rows } = await db.query("SELECT current_database(), current_user, version()");
      results.db = rows;
    } catch (e: any) {
      results.dbError = e?.message || String(e);
    }
    try {
      const testPool = new Pool({ connectionString: "postgresql://postgres@localhost/nonexistent" });
      await testPool.query("SELECT 1");
    } catch (e: any) {
      results.localhostTest = e?.message || String(e);
    }
  } catch (e: any) {
    results.crash = e?.message || String(e);
  }
  return Response.json(results, { status: 200 });
}
