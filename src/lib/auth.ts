import NextAuth, { NextAuthOptions } from 'next-auth';
import InstagramProvider from 'next-auth/providers/instagram';

export const authOptions: NextAuthOptions = {
  providers: [
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the access token in the token object
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Make the access token available in the session
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
