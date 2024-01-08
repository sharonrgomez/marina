/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase_app from "../config";
import { DocumentReference, getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, writeBatch } from "firebase/firestore";
import { Baby } from "../../pages/FamilyCreate";

const fs = getFirestore(firebase_app);

export const createBabies = async (babies: Baby[]) => {
  let result: DocumentReference[] | null = null,
    error = null;
  const babyRefs: DocumentReference[] = [];

  try {
    const batch = writeBatch(fs);

    babies.forEach((baby) => {
      const docRef = doc(collection(fs, "babies")); //automatically generate unique id
      babyRefs.push(docRef);
      batch.set(docRef, baby);
    });

    await batch.commit();
    result = babyRefs;
  } catch (e: any) {
    error = e;
  }

  return { result, error };
};

export const createFamily = async (name, babies: Baby[]) => {
  // eslint-disable-next-line prefer-const
  let result = null,
    error = null;

  try {
    const { result: babyRefs, error } = await createBabies(babies);
    if (error) throw error;

    const docRef = await addDoc(collection(fs, "families"), {
      name,
      babies: babyRefs,
    });
    alert(docRef.id);
  } catch (e: any) {
    error = e;
  }

  return { result, error };
};
