// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjl6q58fypBouvMMj9lj8wtVxH2ltwQhQ",
  authDomain: "netflixgpt-321c1.firebaseapp.com",
  projectId: "netflixgpt-321c1",
  storageBucket: "netflixgpt-321c1.firebasestorage.app",
  messagingSenderId: "134063447493",
  appId: "1:134063447493:web:d9326d278f4dba63513fac",
  measurementId: "G-S6X1WF5Z3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

