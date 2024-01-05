import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";
import { database } from "../config";
import { v4 as uuid } from "uuid";

const auth = getAuth(firebase_app);

const signUp = async (email, password) => {
  let result = null,
    error = null;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(
      doc(
        collection(database, `family/${uuid()}/users`),
        userCredential.user.uid
      ),
      {}
    );

    result = userCredential;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default signUp;
