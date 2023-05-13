import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfn_T2ap_i-8sCreNtVOheZn-VpxswR5c",
  authDomain: "chat-792cd.firebaseapp.com",
  projectId: "chat-792cd",
  storageBucket: "chat-792cd.appspot.com",
  messagingSenderId: "656409023307",
  appId: "1:656409023307:web:13f26f546df53b0b258ece"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
