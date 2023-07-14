import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQQ8RauL5CyU0VU7rLrzlKnaB-Uxytjtk",
  authDomain: "chatwebapp-9f5ff.firebaseapp.com",
  projectId: "chatwebapp-9f5ff",
  storageBucket: "chatwebapp-9f5ff.appspot.com",
  messagingSenderId: "461269544533",
  appId: "1:461269544533:web:d27d9ce4651ab5b7352edc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
