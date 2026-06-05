import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

import { auth, provider } from "./firebase";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.warn("Popup blocked → redirect", error);

    await signInWithRedirect(auth, provider);
    return null;
  }
};

export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    return result?.user ?? null;
  } catch (e) {
    console.error(e);
    return null;
  }
};