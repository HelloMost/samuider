// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use'
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsJ4r775h16YJF55X8c4q2bKaiYxrDWpQ",
  authDomain: "samuider-crud.firebaseapp.com",
  projectId: "samuider-crud",
  storageBucket: "samuider-crud.appspot.com",
  messagingSenderId: "18479805575",
  appId: "1:18479805575:web:261937a8a60f58cb30b422"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}