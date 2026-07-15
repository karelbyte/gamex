import { auth } from "@/auth";
import { redirect } from "next/navigation";
import GameClient from "@/components/GameClient";

export default async function GamePage() {
  const session = await auth();
  if (!session) redirect("/login");

  return <GameClient userName={session.user?.name || "Aventurero"} />;
}
