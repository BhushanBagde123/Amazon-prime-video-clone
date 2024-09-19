// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZr1P7FmXORqBZbGPcP2i9_sdlWOlQIoc",
  authDomain: "prime-e3ac9.firebaseapp.com",
  projectId: "prime-e3ac9",
  storageBucket: "prime-e3ac9.appspot.com",
  messagingSenderId: "661477685538",
  appId: "1:661477685538:web:89d57540700709eeb94d7b",
  measurementId: "G-Q1F40B2SBZ"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
export {fireDb,auth}