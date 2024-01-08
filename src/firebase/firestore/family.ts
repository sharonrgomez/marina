import firebase_app from "../config";
import { DocumentReference, getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, writeBatch } from "firebase/firestore";

const fs = getFirestore(firebase_app);

interface Baby {
  name: string
  gender: string
}

export const createBabies = async (babies: Baby[]) => {
  let result: DocumentReference[] | null = null, error = null;
  const babyRefs: DocumentReference[] = []

  try {
    const batch = writeBatch(fs);
    
    babies.forEach((baby) => {
      var docRef = doc(collection(fs, "babies")); //automatically generate unique id
      babyRefs.push(docRef)
      batch.set(docRef, baby);
    });

    await batch.commit()
    result = babyRefs
  } catch (e: any) {
    error = e;
  }

  return { result, error }
  
}

export const createFamily = async (name, babies: Baby[]) => {
  let result: DocumentReference | null = null, error = null;

  try {
    const { result: babyRefs, error } = await createBabies(babies)
    if (error) throw error

    const docRef = await addDoc(collection(fs, "families"), { name, babies: babyRefs });
    result = docRef
  } catch (e: any) {
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
