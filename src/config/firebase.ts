// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvVY7JxmgSJSQuGLO6BX-HtnzPen7Y1Eg",
  authDomain: "react-firebase-app-b3984.firebaseapp.com",
  projectId: "react-firebase-app-b3984",
  storageBucket: "react-firebase-app-b3984.appspot.com",
  messagingSenderId: "405427893272",
  appId: "1:405427893272:web:b1be1689d7c2e3ce27ff6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)