import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: '/images/logo-text.png',
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Nom", type: "text", placeholder: "jsmith" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials, req) {  
        if (!credentials) return null;      

        if (credentials.username === "usertest" && credentials.password === "beta"){
          const user = await prisma.user.findUnique({where: {id:"usertest"}});  
          return user;
        }
        // Return null if user data could not be retrieved
        return null
      }
    }),
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ user , token }) {
      if (user) {  // Note that this if condition is needed
        if (!user.image){
          // if no image in database then create random image
          user.image= `https://api.dicebear.com/7.x/adventurer/svg?seed=random${user.id}`;
        }
        token.user={...user}
      }
      return token
     },
    async session({ session, token }) {
      if (token?.user) { // Note that this if condition is needed
        session.user = token.user;
      }
      return session
    },
  },
};

export default NextAuth(authOptions);