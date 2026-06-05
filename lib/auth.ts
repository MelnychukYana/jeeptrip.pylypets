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

const isMobile = () => {
  if (typeof window === "undefined") return false;

  return /iPhone|iPad|iPod|Android/i.test(
    navigator.userAgent
  );
};

// 🔐 LOGIN
export const loginWithGoogle = async () => {
  await setPersistence(auth, browserLocalPersistence);

  if (isMobile()) {
    await signInWithRedirect(auth, provider);
    return null;
  }

  const result = await signInWithPopup(auth, provider);
  return result.user;
};

// 🔄 ОБРОБКА REDIRECT (МОБІЛКА)
let redirectHandled = false;

export const handleRedirectResult = async (): Promise<User | null> => {
  if (redirectHandled) return null;
  redirectHandled = true;

  try {
    const result = await getRedirectResult(auth);
    return result?.user ?? null;
  } catch {
    return null;
  }
};

// 👀 СЛУХАЧ АВТОРИЗАЦІЇ
export const subscribeAuth = (cb: (u: User | null) => void) => {
  return onAuthStateChanged(auth, cb);
};