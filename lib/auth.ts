import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  setPersistence,
  browserLocalPersistence,
  getRedirectResult,
  onAuthStateChanged,
  User,
} from "firebase/auth";

import { auth } from "./firebase";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// 🔐 LOGIN (popup → fallback redirect)
export const loginWithGoogle = async (): Promise<User | null> => {
  await setPersistence(auth, browserLocalPersistence);

  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (popupError) {
    console.warn("Popup login failed, switching to redirect...", popupError);

    await signInWithRedirect(auth, provider);
    return null;
  }
};

// 🔄 ОБРОБКА REDIRECT (МОБІЛКА / fallback)
let redirectHandled = false;

export const handleRedirectResult = async (): Promise<User | null> => {
  if (redirectHandled) return null;
  redirectHandled = true;

  try {
    const result = await getRedirectResult(auth);

    if (!result?.user) return null;

    return result.user;
  } catch (error) {
    console.error("Redirect auth error:", error);
    return null;
  }
};

// 👀 СЛУХАЧ АВТОРИЗАЦІЇ
export const subscribeAuth = (cb: (u: User | null) => void) => {
  return onAuthStateChanged(auth, cb);
};