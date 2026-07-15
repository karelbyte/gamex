import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session) redirect("/game");

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/assets/bs-init.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/80" />
      <div className="max-w-lg text-center space-y-8 relative z-10">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-100 font-[family-name:var(--font-gothic)]">
          El Bosque de las Sombras
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          La princesa <span className="text-amber-600">Elara</span>  ha sido secuestrada por el Señor de las Sombras.
          Adéntrate en el bosque maldito, recoge objetos, resuelve puzzles y
          rescátala de la Torre Oscura.
        </p>
        <Link
          href="/login"
          className="inline-block px-8 py-3 bg-zinc-100 text-zinc-900 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
        >
          Jugar
        </Link>
      </div>
    </div>
  );
}
