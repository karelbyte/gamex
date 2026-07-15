import { pool } from "@/lib/db";

export async function GET() {
  try {
    await pool.query("SELECT 1");
    return Response.json({ status: "ok" }, { status: 200 });
  } catch (e: any) {
    return Response.json({ status: "error", message: e?.message || String(e) }, { status: 503 });
  }
}
