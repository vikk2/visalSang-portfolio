// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbNRq-S9NgSCJbtLVT14ewUfxM8dfO5lM",
  authDomain: "weesal-9da1e.firebaseapp.com",
  projectId: "weesal-9da1e",
  storageBucket: "weesal-9da1e.firebasestorage.app",
  messagingSenderId: "1010202959908",
  appId: "1:1010202959908:web:0dbb6062b6190c3b9578b1",
  measurementId: "G-YPG5DMN3NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);