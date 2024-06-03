import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';
import { signIn } from "next-auth/react";
import {connectToDb} from '@utils/database';

console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
});
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},

  async signIn({ profile }) {
    try {
      await connectToDb();
      // check is user is already exist
      // if not make new iuser
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export {handler as GET , handler as POST};
// credential from console.cloud.google.com