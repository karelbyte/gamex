import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { getDb } from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        nick: { label: "Nick", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.nick || !credentials?.password) return null;

        const db = await getDb();
        const { rows } = await db.query("SELECT * FROM users WHERE nick = $1", [credentials.nick]);
        const user = rows[0] as { id: string; nick: string; password_hash: string } | undefined;

        if (!user) return null;

        const isValid = await compare(credentials.password as string, user.password_hash);
        if (!isValid) return null;

        return { id: user.id, name: user.nick };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token?.id) session.user.id = token.id as string;
      return session;
    },
  },
});
