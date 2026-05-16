import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Category } from "@/types/category";

export async function getCategories(): Promise<Category[]> {

  const q = query(
    collection(db, "categories"),
    where("isActive", "==", true),
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Category, "id">),
  }));
}