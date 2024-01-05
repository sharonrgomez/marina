import firebase_app from "../config";
import { signOut, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

const logOut = async () => {
  let error = null;

  try {
    await signOut(auth);
  } catch (e) {
    error = e;
  }

  return { error };
};

export default logOut;
