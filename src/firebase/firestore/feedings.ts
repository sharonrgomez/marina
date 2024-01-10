// import firebase_app from "../config";
import {
  DocumentReference,
  collection,
  //   getFirestore,
} from "firebase/firestore";
import { addDoc } from "firebase/firestore";

// const fs = getFirestore(firebase_app);

interface Feeding {
  amount: number;
  unit: string;
  time: string;
  type: string;
}

export const addFeeding = async (
  babyRef: DocumentReference,
  feeding: Feeding
) => {
  await addDoc(collection(babyRef, "feedings"), feeding);
};

// export const getBabies = async (userId) => {
//   const userDocRef = await getDoc(doc(fs, "users", userId));
//   const familyRef = userDocRef.data()?.family;

//   if (!familyRef) throw "No Linked Family";

//   const babyRefs = await getDocs(
//     collection(fs, "families", familyRef.id, "babies")
//   );
//   const babies: DocumentData[] = [];

//   babyRefs.forEach((baby) => {
//     babies.push(baby.data());
//   });

//   return babies;
// };
