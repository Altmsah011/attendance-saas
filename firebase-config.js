// firebase-config.js
// إعدادات الاتصال بمشروع Firebase - يتم استيراده في كل صفحة

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB-0yUrDBV9sKbCpWvTIuAdJY5NTtWhJI",
  authDomain: "attendance-saas-1b0b6.firebaseapp.com",
  projectId: "attendance-saas-1b0b6",
  storageBucket: "attendance-saas-1b0b6.firebasestorage.app",
  messagingSenderId: "654998589019",
  appId: "1:654998589019:web:78384701cb618325d3f97e",
  measurementId: "G-TEKR8MHJ5H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
  serverTimestamp
};
