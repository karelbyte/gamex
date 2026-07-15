"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Step = "nick" | "password";

export default function LoginPage() {
  const [step, setStep] = useState<Step>("nick");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleNickSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (nick.length < 3) {
      setError("El nick debe tener al menos 3 caracteres");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/check-nick", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nick }),
    });
    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error);
      return;
    }

    setIsNewUser(!data.exists);
    setStep("password");
  }

  async function handlePasswordSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isNewUser) {
      // Register first
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nick, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setLoading(false);
        return;
      }
    }

    // Login
    const result = await signIn("credentials", {
      nick,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError(isNewUser ? "Error al crear la cuenta" : "Contraseña incorrecta");
    } else {
      router.push("/game");
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bs-init.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/80" />
      <div className="w-full max-w-sm space-y-6 relative z-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-[family-name:var(--font-gothic)]">El Bosque de las Sombras</h1>
          <p className="mt-2 text-zinc-400">
            {step === "nick" && "Ingresa tu nick para entrar"}
            {step === "password" && isNewUser && `Nick "${nick}" disponible. Elige una contraseña.`}
            {step === "password" && !isNewUser && `Bienvenido de vuelta, ${nick}`}
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-400 bg-red-950/50 rounded-lg border border-red-800">
            {error}
          </div>
        )}

        {step === "nick" && (
          <form onSubmit={handleNickSubmit} className="space-y-4">
            <div>
              <label htmlFor="nick" className="block text-sm font-medium text-zinc-300 mb-1">
                Nick
              </label>
              <input
                id="nick"
                type="text"
                value={nick}
                onChange={(e) => setNick(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                required
                autoFocus
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 text-zinc-100"
                placeholder="tu_nick"
                minLength={3}
                maxLength={20}
              />
              <p className="mt-1 text-xs text-zinc-500">Solo letras, números y guión bajo</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-lg font-medium hover:bg-zinc-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Verificando..." : "Continuar"}
            </button>
          </form>
        )}

        {step === "password" && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-1">
                {isNewUser ? "Elige una contraseña" : "Contraseña"}
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                autoComplete="new-password"
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 text-zinc-100"
                placeholder=""
                minLength={4}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-zinc-800 border border-zinc-600 text-zinc-100 rounded-lg font-medium hover:bg-zinc-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Entrando..." : isNewUser ? "Crear cuenta y entrar" : "Entrar"}
            </button>

            <button
              type="button"
              onClick={() => { setStep("nick"); setPassword(""); setError(""); }}
              className="w-full py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              ← Cambiar nick
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
