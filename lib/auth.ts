import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { auth } from "./firebase";

// 🔐 Google provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// 📱 detect mobile
const isMobile = () => {
  if (typeof window === "undefined") return false;

  return /iPhone|iPad|iPod|Android/i.test(
    navigator.userAgent
  );
};

// 🚀 LOGIN
export const loginWithGoogle = async () => {
  try {
    // зберігає сесію після перезагрузки
    await setPersistence(auth, browserLocalPersistence);

    // 📱 MOBILE → redirect (стабільно працює на iOS/Android)
    if (isMobile()) {
      await signInWithRedirect(auth, provider);
      return null;
    }

    // 💻 DESKTOP → popup
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.warn("Popup failed → redirect fallback", error);

    await signInWithRedirect(auth, provider);
    return null;
  }
};

// 🔄 HANDLE REDIRECT (важливо для мобілок)
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    return result?.user ?? null;
  } catch (e) {
    console.error("Redirect error:", e);
    return null;
  }
};