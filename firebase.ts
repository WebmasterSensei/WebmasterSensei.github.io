
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAST8rYyl6WnJ8ldcjb4yXBOF4FEHaObG0",

  authDomain: "profile-43b91.firebaseapp.com",

  projectId: "profile-43b91",

  storageBucket: "profile-43b91.appspot.com",

  messagingSenderId: "153592248168",

  appId: "1:153592248168:web:d542301d9c90a8f71088dd",

  measurementId: "G-VQVCV42E2J"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);