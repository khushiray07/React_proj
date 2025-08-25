// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzdHDd5I2LqCqsvJkgL6Co3n2JKCPFRsM",
  authDomain: "registration-abbb5.firebaseapp.com",
  projectId: "registration-abbb5",
  storageBucket: "registration-abbb5.firebasestorage.app",
  messagingSenderId: "623258302017",
  appId: "1:623258302017:web:7e5fde0fd1eb2e080fb8c0",
  measurementId: "G-TYQ7Q65J0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

export default app;