import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "./firebase";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.warn("Popup blocked → using redirect login", error);

    // 📱 fallback для телефонів
    await signInWithRedirect(auth, provider);
    return null;
  }
};