// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, push, set, serverTimestamp } from "firebase/database"; // Realtime Database imports
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics"; // Analytics is optional for this task

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3lEKN9DfnsAe6wzhj_BuR4euwGf2GK4g",
  authDomain: "likeleeprofiles.firebaseapp.com",
  databaseURL: "https://likeleeprofiles-default-rtdb.firebaseio.com",
  projectId: "likeleeprofiles",
  storageBucket: "likeleeprofiles.firebasestorage.app",
  messagingSenderId: "500489082297",
  appId: "1:500489082297:web:2d8944599fca4546d71268",
  measurementId: "G-2EGJFTVLK9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); // Initialize Analytics if needed

// Initialize Realtime Database and Storage
export const db = getDatabase(app);
export const storage = getStorage(app);
