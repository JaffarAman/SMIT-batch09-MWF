import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9m6BuySUcNlJVyco-VnncwCDqvor6PTQ",
  authDomain: "react-crud-38dc0.firebaseapp.com",
  projectId: "react-crud-38dc0",
  storageBucket: "react-crud-38dc0.appspot.com",
  messagingSenderId: "274216470081",
  appId: "1:274216470081:web:5718385bf2b8a7d2dc28c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
