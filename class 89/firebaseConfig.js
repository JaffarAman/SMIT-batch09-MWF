// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc1UsuIg_x7zr0KNbrJzgBMKlIsye9f9w",
    authDomain: "food-app-d442b.firebaseapp.com",
    projectId: "food-app-d442b",
    storageBucket: "food-app-d442b.appspot.com",
    messagingSenderId: "1016332638211",
    appId: "1:1016332638211:web:6c6824f0b4b01643119636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize AUTH
const auth = getAuth();


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);


export {
    db,
    auth,
    storage
}