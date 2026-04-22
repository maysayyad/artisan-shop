import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

// Add product
export const addProduct = async (product) => {
  await addDoc(collection(db, "products"), product);
};

// Get all products
export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};