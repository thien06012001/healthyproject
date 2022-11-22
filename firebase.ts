// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite';
import { getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMYA4SOcdQZjE2MQMuUyDBGWQVCnIs4so",
  authDomain: "sign-form-d586a.firebaseapp.com",
  projectId: "sign-form-d586a",
  storageBucket: "sign-form-d586a.appspot.com",
  messagingSenderId: "375280782530",
  appId: "1:375280782530:web:2bc75602dd14af2953ff5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
export {auth}
export default db;