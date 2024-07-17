
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "inventorymanagement-1c585.firebaseapp.com",
  projectId: "inventorymanagement-1c585",
  storageBucket: "inventorymanagement-1c585.appspot.com",
  messagingSenderId: "918394030581",
  appId: "1:918394030581:web:331a9684983b40bac778bc"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);