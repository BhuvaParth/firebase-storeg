// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2FUer9dTmT3GvIjNJAXRMyy7cTyvzHNk",
  authDomain: "hospital-19c0a.firebaseapp.com",
  projectId: "hospital-19c0a",
  storageBucket: "hospital-19c0a.appspot.com",
  messagingSenderId: "240321619225",
  appId: "1:240321619225:web:df3812c483ae7296c2d188",
  measurementId: "G-C3J5DQ2WTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);