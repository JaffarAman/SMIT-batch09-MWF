// Import the functions you need from the SDKs you need
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

import { auth, db } from "./firebaseConfig.js";


const loginBtn = document.querySelector("#loginBtn")
loginBtn.addEventListener("click", login)

window.addEventListener("load", function () {
    if (localStorage.getItem("user") !== null) {
        history.back()
        return
    }
})

async function login(e) {
    try {

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        console.log(email, password)
        loginBtn.className = "btn btn-info"
        loginBtn.innerHTML = `<div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`
        const userLogin = await signInWithEmailAndPassword(auth, email, password)
        console.log(userLogin)


        const userRef = doc(db, "users", userLogin.user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            alert("invalid user")
            return
        }

        console.log("Document data:", docSnap.data());
        const userData = docSnap.data()
        localStorage.setItem("user", JSON.stringify(userData))

        if (userData.type === "admin") {
            window.location.replace("/adminDashboard.html")
        } else if (userData.type === "Vendor") {

            if (!userData.accountActivate) {
                loginBtn.className = "btn btn-danger"
                loginBtn.innerHTML = `Login`
                alert("Your account is disabled")
                return
            }
            window.location.replace("/vendorDashboard.html")
        } else if (userData.type === "Customer") {
            if (!userData.accountActivate) {
                loginBtn.className = "btn btn-danger"
                loginBtn.innerHTML = `Login`
                alert("Your account is disabled")
                return
            }
            window.location.replace("/customer.html")

        }
    } catch (error) {
        console.log("error", error.message)
        loginBtn.className = "btn btn-danger"
        loginBtn.innerHTML = `Login`
        alert(error.message)
    }


}