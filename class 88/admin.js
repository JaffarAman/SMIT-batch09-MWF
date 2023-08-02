// Import the functions you need from the SDKs you need
import { collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { db } from "./firebaseConfig.js";


window.addEventListener("load", getAllIUser)


const tableBody = document.getElementById("tableBody")
const logoutBtn = document.getElementById("logoutBtn")

console.log("tableBody", tableBody)

async function getAllIUser() {

    const loginUser = JSON.parse(localStorage.getItem("user"))

    console.log(localStorage.getItem("user"))
    if (localStorage.getItem("user") === null) {
        window.location.replace("/")
        return
    } else {
        if (loginUser.type !== "admin") {
            history.back()
            return
        }
    }

    const docsRef = await getDocs(collection(db, "users"))
    docsRef.forEach(function (doc) {
        const user = doc.data()
        if (user.type !== "admin") {
            console.log("docs", doc.id, user)
            const rowUi = `<tr>
            <td onclick={getuser()} >${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.type}</td>
            <td>${user.accountActivate ? `<div class="form-check form-switch">
            <input class="form-check-input" id=${user.uid}  onchange={handleAccountActivation(this)} type="checkbox"  checked>
          </div>` : `<div class="form-check form-switch">
          <input class="form-check-input" id=${user.uid}  onchange={handleAccountActivation(this)} type="checkbox" id="flexSwitchCheckChecked" >
        </div>`

                }</td >
             </tr > `

            tableBody.innerHTML += rowUi
        }
    })


}
function getuser() {
    console.log("getuser()")
}


async function handleAccountActivation(e) {
    console.log("handleAccountActivation", e.checked)
    console.log("handleAccountActivation", e.id)

    try {
        const userRef = doc(db, "users", e.id);
        await updateDoc(userRef, {
            accountActivate: e.checked
        })

    } catch (error) {
        alert(error.message)
        console.log(error.message)
    }


}


logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("user")
    window.location.replace("/")
})







window.handleAccountActivation = handleAccountActivation


{/* <td>${user.accountActivate}</td> */ }
