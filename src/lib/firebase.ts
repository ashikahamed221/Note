// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbG5jNL3JH30xPq4GDCDQ1VEemv_Gztzo",
  authDomain: "notenest-386f9.firebaseapp.com",
  projectId: "notenest-386f9",
  storageBucket: "notenest-386f9.firebasestorage.app",
  messagingSenderId: "877427401354",
  appId: "1:877427401354:web:7a5680e0b2f20541f98373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db};