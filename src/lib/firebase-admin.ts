import { initializeApp, getApps, getApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// You must setup these ENV Vars in Netlify / .env
// We need a Service Account for "Admin" privileges to manage the DB for NextAuth
const serviceAccount = {
  projectId: process.env.FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Fix for newline chars in env
};

// Singleton initialization for Admin SDK
const app = !getApps().length
  ? initializeApp({
      credential: cert(serviceAccount),
    })
  : getApp();

const firestore = getFirestore(app);

export { firestore };
