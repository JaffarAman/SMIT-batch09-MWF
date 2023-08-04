import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

import { auth, db } from "./firebaseConfig.js";



window.addEventListener("load", getProducts)


async function getProducts() {
    // const product = await getDocs(collection(db, "product"))

    // product.forEach(function (doc) {
    //     console.log(doc.data())
    // })

    const product = onSnapshot(collection(db, "product"), function (snapshot) {
        snapshot.forEach(function (data) {
            console.log("data", data.data())
        })
    })


}