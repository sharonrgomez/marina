import firebase_app from "../config";
import { DocumentReference, getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const fs = getFirestore(firebase_app);


export const linkUserFamily = async (userId: string, familyRef: DocumentReference) => {

    let result: DocumentReference[] | null = null, error = null;

    try {
        await setDoc(doc(fs, "users", userId), { family: familyRef });
    } catch (e: any) {
        error = e
    }

    return {result, error}
}