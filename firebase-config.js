// ============================================================
// إعدادات فايربيز المشتركة - يتم استيرادها في كل صفحة
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB-0yUrDBV9sKbCpWvTIuAdJY5NTtWhJI",
  authDomain: "attendance-saas-1b0b6.firebaseapp.com",
  projectId: "attendance-saas-1b0b6",
  storageBucket: "attendance-saas-1b0b6.firebasestorage.app",
  messagingSenderId: "654998589019",
  appId: "1:654998589019:web:78384701cb618325d3f97e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
