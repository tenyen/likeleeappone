// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics"; // Analytics is optional for this task

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3lEKN9DfnsAe6wzhj_BuR4euwGf2GK4g",
  authDomain: "likeleeprofiles.firebaseapp.com",
  projectId: "likeleeprofiles",
  storageBucket: "likeleeprofiles.firebasestorage.app",
  messagingSenderId: "500489082297",
  appId: "1:500489082297:web:98e9ed5123611070d71268",
  measurementId: "G-MX9F4FDVN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics if needed

// Initialize Firestore and Storage
export const db = getFirestore(app);
export const storage = getStorage(app);
