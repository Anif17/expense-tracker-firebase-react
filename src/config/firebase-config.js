// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Z1Y_hM59mfm7n5OtHhlthz1khKlrA7k",
  authDomain: "expense-tracker-86ec7.firebaseapp.com",
  projectId: "expense-tracker-86ec7",
  storageBucket: "expense-tracker-86ec7.appspot.com",
  messagingSenderId: "834859730003",
  appId: "1:834859730003:web:da504cc7340c7bbb4372a6",
};
console.log("aaa", process.env.REACT_APP_AUTH_DOMAIN);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
