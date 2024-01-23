import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";
import { findUser } from "@/actions/user.actions";

const prisma = new PrismaClient();

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const { email , password } = credentials;
          console.log(credentials);
          const user = await prisma.user.findFirst({ where : {
            email , password
          } })
          console.log(user);
          if (user) 
            return user 
        return null;
        } catch (error) {
          console.log(error);
          return error;
        }
      }
    }),
    GoogleProvider({
      name : "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        console.log("user found as ",user);
        const existingUser = await findUser(email);
        console.log("already user " , existingUser);
        if(!existingUser){
          return null;
        }
        return existingUser;
      }   
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };