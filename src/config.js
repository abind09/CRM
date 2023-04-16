import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5U1r7358scv5Wk4kX3Y0drS5TrN_xa8M",
  authDomain: "varanasi-yarn.firebaseapp.com",
  projectId: "varanasi-yarn",
  storageBucket: "varanasi-yarn.appspot.com",
  messagingSenderId: "468498135331",
  appId: "1:468498135331:web:93ffbee5399e00b4f13496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup=() =>signInWithPopup(auth, provider)