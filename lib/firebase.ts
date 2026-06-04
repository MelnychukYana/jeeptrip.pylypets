import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMOJyebgRjIvT-dfRfyti18wbxjdCmB-o",
  authDomain: "jeeptrip-46cfd.firebaseapp.com",
  projectId: "jeeptrip-46cfd",
  storageBucket: "jeeptrip-46cfd.appspot.com",
  messagingSenderId: "700769303416",
  appId: "1:700769303416:web:aa03ca8a28c93033a7268d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// щоб завжди вибирало акаунт
provider.setCustomParameters({
  prompt: "select_account",
});
