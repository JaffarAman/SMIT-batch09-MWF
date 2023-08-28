import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

import { auth, db } from "./firebaseConfig.js";



const productCollection = collection(db, "product")
const ProductForm = document.getElementById("ProductForm")
ProductForm.addEventListener("submit", addproduct)


async function addproduct(e) {
    try {
        e.preventDefault()
        const productName = e.target.productName.value
        const productDesc = e.target.productDesc.value
        const productPrice = e.target.productPrice.value

        const user = JSON.parse(localStorage.getItem("user"))
        const productObj = {
            name: productName,
            desc: productDesc,
            price: productPrice,
            userUid: user.uid
        }
        console.log("add", productObj)

        await addDoc(productCollection, productObj)
        alert("product added successfully")


    } catch (error) {
        alert(error.message)
    }


}


// window.addproduct = addproduct
