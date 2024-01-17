import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvcg6juHtwrHcUEobdj79HxvcJey_5qgQ",
  authDomain: "duck-clothing.firebaseapp.com",
  projectId: "duck-clothing",
  storageBucket: "duck-clothing.appspot.com",
  messagingSenderId: "1097877695982",
  appId: "1:1097877695982:web:9b04117bea69db8d1a72ff",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, provider);
};
