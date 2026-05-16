import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAqW3OenM65U-20Y1ZDVZ8exnA7hOupBo",
  authDomain: "elvara-4412b.firebaseapp.com",
  projectId: "elvara-4412b",
  storageBucket: "elvara-4412b.firebasestorage.app",
  messagingSenderId: "184930922620",
  appId: "1:184930922620:web:d59958631e497d399c99f9",
  measurementId: "G-9D1FN3S96H"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);