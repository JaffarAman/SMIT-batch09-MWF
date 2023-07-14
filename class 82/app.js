// const myPromise = new Promise(function (resolve, reject) {
//     const age = 15
//     if (age >= 18) {
//         resolve({
//             message: "resolve",
//             age,
//         })
//     } else {
//         reject({
//             message: "reject",
//             age,
//         })
//     }
// })
//     .then(function (result) {
//         console.log("result", result)
//     })
//     .catch(function (error) {
//         console.log("error", error)
//     })


// async await



// https://fakestoreapi.com/products


// async function callAPI() {
//     try {
//         console.log("1")
//         console.log("2")
//         const data = await fetch()
//         console.log("3")
//         console.log("4")

//     } catch (error) {
//         console.log("error catch", error)
//     }
// }



// async function getProduct() {
//     try {
//         console.log("1")
//         console.log("2")
//         const myData = await fetch("https://fakestoreapi.com/products")
//         const response = await myData.json()
//         console.log("response", response)
//         console.log("3")
//         console.log("4")

//     } catch (error) {
//         console.log("catch error", error)
//     }

// }
// getProduct()


// function errorHandling() {
//     try {

//         var age = 25
//         if (age === 18) {
//             console.log("okay no issue")
//         } else {
//             throw new Error("error age is not match")
//         }


//     } catch (error) {
//         console.log("error catch", error)
//     }

// }
// errorHandling()

// console.log("hello world")





// FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc1UsuIg_x7zr0KNbrJzgBMKlIsye9f9w",
    authDomain: "food-app-d442b.firebaseapp.com",
    projectId: "food-app-d442b",
    storageBucket: "food-app-d442b.appspot.com",
    messagingSenderId: "1016332638211",
    appId: "1:1016332638211:web:fd3f7d38f13c921e119636"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("app", app)

