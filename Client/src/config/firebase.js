// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqAD8cGvE3ogLy46VxJyEQlOC9sf0LF2I",
  authDomain: "fastconnect-897e0.firebaseapp.com",
  projectId: "fastconnect-897e0",
  storageBucket: "fastconnect-897e0.appspot.com",
  messagingSenderId: "428717879008",
  appId: "1:428717879008:web:b1db611b6ac7cba04aea85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const googleAuth = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);