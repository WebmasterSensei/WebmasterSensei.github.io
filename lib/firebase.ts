// lib/firebase.js
import { initializeApp, getApps  } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAST8rYyl6WnJ8ldcjb4yXBOF4FEHaObG0",

  authDomain: "profile-43b91.firebaseapp.com",

  projectId: "profile-43b91",

  storageBucket: "profile-43b91.appspot.com",

  messagingSenderId: "153592248168",

  appId: "1:153592248168:web:d542301d9c90a8f71088dd",

  measurementId: "G-VQVCV42E2J"
};

// const app = initializeApp(firebaseConfig);
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };
export const auth = getAuth(app);
