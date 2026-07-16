import { pool } from "@/lib/db";

export async function GET() {
  const raw = process.env.DATABASE_URL || "not set";
  const masked = raw.replace(/\/\/[^:]+:[^@]+@/, "//user:****@");
  try {
    await pool.query("SELECT 1");
    return Response.json({ status: "ok" }, { status: 200 });
  } catch (e: any) {
    return Response.json({
      status: "error",
      message: e?.message || String(e),
      url: masked,
      host: process.env.AWS_REGION || "local",
    }, { status: 503 });
  }
}
