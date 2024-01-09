import firebase_app from "../config";
import {
  DocumentData,
  DocumentReference,
  collection,
  getFirestore,
} from "firebase/firestore";
import { doc, setDoc, getDoc, getDocs } from "firebase/firestore";

const fs = getFirestore(firebase_app);

export const linkUserFamily = async (
  userId: string,
  familyRef: DocumentReference
) => {
  await setDoc(doc(fs, "users", userId), { family: familyRef });
};

export const getBabies = async (userId) => {
  const userDocRef = await getDoc(doc(fs, "users", userId));
  const familyRef = userDocRef.data()?.family;

  if (!familyRef) throw "No Linked Family";

  const babyRefs = await getDocs(
    collection(fs, "families", familyRef.id, "babies")
  );
  const babies: DocumentData[] = [];

  babyRefs.forEach((baby) => {
    babies.push(baby.data());
  });

  return babies;
};
