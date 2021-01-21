import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBW9H-6S_Lp0usdfCgX7aJJFrENScaRd_U",
  authDomain: "nesrine-bedhief.firebaseapp.com",
  projectId: "nesrine-bedhief",
  storageBucket: "nesrine-bedhief.appspot.com",
  messagingSenderId: "859242312693",
  appId: "1:859242312693:web:a635a220f95e63d590a6bc",
  measurementId: "G-FLRY1575ZP",
});

const db = firebaseApp.firestore();

export { db };
