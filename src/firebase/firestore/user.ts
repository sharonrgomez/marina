import firebase_app from "../config";
import {
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
  // todo only link if userid is in invitedUsers field?
  // maybe firestore rule if thats possible
  await setDoc(doc(fs, "users", userId), { family: familyRef });
};

export const getBabies = async (userId) => {
  const userDocRef = await getDoc(doc(fs, "users", userId));
  const familyRef = userDocRef.data()?.family;

  if (!familyRef) throw "No Linked Family";

  const babiesQuerySnapshot = await getDocs(
    collection(fs, "families", familyRef.id, "babies")
  );
  return babiesQuerySnapshot.docs;
};
