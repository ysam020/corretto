// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbUQx_yoOG8uq36hGLVr57cHrZyQsHK74",
  authDomain: "corretto-96486.firebaseapp.com",
  projectId: "corretto-96486",
  storageBucket: "corretto-96486.appspot.com",
  messagingSenderId: "1030428143752",
  appId: "1:1030428143752:web:31a8eecc243b902eddaf3d",
  measurementId: "G-ZPM6M3L2Y9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
