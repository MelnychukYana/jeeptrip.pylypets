import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

import { auth, provider } from "./firebase";

// 👉 запуск логіну
export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.warn("Popup failed → redirect fallback", error);

    await signInWithRedirect(auth, provider);
    return null;
  }
};

// 👉 ОБОВʼЯЗКОВО для мобілок
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);

    return result?.user || null;
  } catch (e) {
    console.error("Redirect error:", e);
    return null;
  }
};