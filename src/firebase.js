import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHx6Xo0RoEiFfdHLe1cOqot6TtM8GwpNA",
  authDomain: "artisan-shop-8bc92.firebaseapp.com",
  projectId: "artisan-shop-8bc92",
  storageBucket: "artisan-shop-8bc92.firebasestorage.app",
  messagingSenderId: "701657004673",
  appId: "1:701657004673:web:8b5b222cb85b176c9bab80"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);