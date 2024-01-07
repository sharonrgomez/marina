import firebase_app from "../config";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const fs = getFirestore(firebase_app);

export const createFamily = async (name) => {
  let result = null,
    error = null;

  try {
    const familyRef = doc(fs, "families", name);
    result = setDoc(familyRef, { name }, { merge: true });
  } catch (e) {
    error = e;
  }

  return { result, error };
};

// export const getFamily = async (email, password) => {
//   let result = null,
//     error = null;

//   try {
//     result = await signInWithEmailAndPassword(auth, email, password);
//   } catch (e) {
//     error = e;
//   }

//   return { result, error };
// };

// export const joinFamily = async (email, password) => {
//   let result = null,
//     error = null;

//   try {
//     result = await signInWithEmailAndPassword(auth, email, password);
//   } catch (e) {
//     error = e;
//   }

//   return { result, error };
// };
