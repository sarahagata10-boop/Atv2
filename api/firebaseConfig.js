// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCrK0kIxspCSp4aPHydneVpZC1vhtoboc",
  authDomain: "atv2-4ccd7.firebaseapp.com",
  projectId: "atv2-4ccd7",
  storageBucket: "atv2-4ccd7.firebasestorage.app",
  messagingSenderId: "889614849927",
  appId: "1:889614849927:web:57f6d5667333388608a522",
  measurementId: "G-E51BBJXN6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
