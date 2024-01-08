import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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

    result = userCredential;
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export default signUp;
