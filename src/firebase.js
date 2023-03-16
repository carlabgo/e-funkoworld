// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCVrB9f0m05NKG102iWa7soOR8V6G-fsLc",

  authDomain: "e-funkoworld-f3881.firebaseapp.com",

  projectId: "e-funkoworld-f3881",

  storageBucket: "e-funkoworld-f3881.appspot.com",

  messagingSenderId: "284773426259",

  appId: "1:284773426259:web:4731185d16b844db45d2a6"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);