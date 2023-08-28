// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
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


console.log("localhost")
console.log("app", app)
console.log("db", db)



const submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", submit)

async function submit() {
    try {
        const fName = document.getElementById("fName").value
        const lName = document.getElementById("lName").value
        const age = document.getElementById("age").value

        const userObj = {
            fName,
            lName,
            age
        }
        // addDoc(collection , object)
        // collection(db , collectionName)

        const docRef = await addDoc(collection(db, "hello"), userObj)
        console.log(docRef)

    } catch (error) {
        console.log("error", error.message)
    }

}

window.addEventListener("load", getData)

async function getData() {
    console.log("get data")

    try {
        // const querySnapShot = await getDocs(collection(db, "users"))
        // querySnapShot.forEach(function (doc) {
        //     console.log(doc.data())
        // })
        const getData = await getDocs(collection(db, "hello"))
        getData.forEach(function (doc) {
            console.log("doc", doc.data())
        })
    } catch (error) {
        console.log("error", error.message)
    }
}