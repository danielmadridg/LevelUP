import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { firestore } from "@/lib/firebase-admin"

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Use Firestore Adapter instead of Prisma
  adapter: FirestoreAdapter(firestore),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // In Firestore, user is a document in 'users' collection
        // You can fetch extra fields here if needed by querying firestore.collection('users').doc(user.id)
      }
      return session;
    },
  },
})
