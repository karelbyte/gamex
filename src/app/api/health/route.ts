import { getDb } from "@/lib/db";

export async function GET() {
  try {
    const db = await getDb();
    await db.query("SELECT 1");
    return Response.json({ status: "ok" }, { status: 200 });
  } catch {
    return Response.json({ status: "error" }, { status: 503 });
  }
}
