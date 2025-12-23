// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKLiWON_O0Yj_qY5qC6XiJ2MKzp73Ejhc",
  authDomain: "levelup-6a8b9.firebaseapp.com",
  projectId: "levelup-6a8b9",
  storageBucket: "levelup-6a8b9.firebasestorage.app",
  messagingSenderId: "970319806354",
  appId: "1:970319806354:web:b106b7e60861e4d1654b4b",
  measurementId: "G-22FJ4GH835",
};

// Initialize Firebase
// Use getApps() to avoid re-initializing if already initialized (hot reload friendliness)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics is only supported in browser environments
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
