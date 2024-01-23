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
        const { email , password } = credentials;
        console.log(credentials);
        const user = prisma.user.findFirst({ where : {
          email , password
        } })
        console.log(user);
        if (user) 
          return user 
      return null;
      }
    }),
    GoogleProvider({
      name : "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
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