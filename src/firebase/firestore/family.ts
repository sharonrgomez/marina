/* eslint-disable @typescript-eslint/no-explicit-any */
import firebase_app from "../config";
import { DocumentReference, getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, writeBatch } from "firebase/firestore";
import { Baby } from "../../pages/FamilyCreate";

const fs = getFirestore(firebase_app);

export const createBabies = async (familyId: string, babies: Baby[]) => {
  const babyRefs: DocumentReference[] = [];

  const batch = writeBatch(fs);

  babies.forEach((baby) => {
    const docRef = doc(collection(fs, "families", familyId, "babies"));
    babyRefs.push(docRef);
    batch.set(docRef, baby);
  });

  await batch.commit();
  return babyRefs;
};

export const createFamily = async (name, babies: Baby[]) => {
  const familyDocRef = await addDoc(collection(fs, "families"), {
    name,
  });
  await createBabies(familyDocRef.id, babies);
  return familyDocRef;
};
