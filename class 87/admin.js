// Import the functions you need from the SDKs you need
import { collection, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { db } from "./firebaseConfig.js";


window.addEventListener("load", getAllIUser)


const tableBody = document.getElementById("tableBody")
console.log("tableBody", tableBody)

async function getAllIUser() {
    console.log("getAllIUser")


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
            <input class="form-check-input" onchange={handleAccountActivation(this)} type="checkbox" id="flexSwitchCheckChecked" checked>
          </div>` : `<div class="form-check form-switch">
          <input class="form-check-input"  onchange={handleAccountActivation(this)} type="checkbox" id="flexSwitchCheckChecked" >
        </div>`

                }</td>
             </tr>`

            tableBody.innerHTML += rowUi
        }
    })


}
function getuser() {
    console.log("getuser()")
}


async function handleAccountActivation(e) {
    console.log("handleAccountActivation", e.checked)



    // const userRef = doc(db, "users", "DC");
    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //     capital: true
    // })
}










window.handleAccountActivation = handleAccountActivation


{/* <td>${user.accountActivate}</td> */ }
