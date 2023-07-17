// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
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




// todo app
//get input element
var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")
const addBtn = document.querySelector("#addBtn")
const todoCollection = collection(db, "todos")

addBtn.addEventListener("click", addTodo)

window.addEventListener("load", getTodos)


async function getTodos() {
    try {
        const arr = []
        const querySnapshot = await getDocs(todoCollection)
        querySnapshot.forEach(function (doc) {
            console.log(doc.id, doc.data())
            const todoValue = doc.data().todo
            createUI(todoValue, doc.id)
            // arr.push({
            //     id: doc.id,
            //     todo: doc.data()
            // })
        });
        // console.log("array", arr)


    } catch (error) {
        console.log(error.message, "error")
        alert(error.message)
    }
}

async function addTodo() {
    try {
        if (!input.value) {
            alert("ENTER TODO VALUEs")
            return
        }
        const data = {
            todo: input.value
        }
        const docRef = await addDoc(todoCollection, data)
        console.log("Document written with ID: ", docRef.id);
        createUI(input.value, docRef.id)
        input.value = ""
    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }
}



async function editTodo(el) {
    // console.log("editTodo()", el.target.parentNode.parentNode.
    //     firstChild.nodeValue)
    try {

        var li = el.target.parentNode.parentNode
        var placeHolder = li.firstChild.nodeValue
        var editValue = prompt("Edit Todo", placeHolder)
        console.log(li.id, "id")
        const updateData = await updateDoc(doc(db, "todos", li.id), {
            todo: editValue
        })

        console.log("editValue", editValue)
        li.firstChild.nodeValue = editValue

    } catch (error) {
        console.log("error", error.message)
        alert(error.message)
    }


}

function deleteTodo(elem) {

    elem.target.parentNode.parentNode.remove()
}


function createUI(todoValue, id) {

    const todoUI = `
    <li id=${id} class="list-group-item d-flex align-items-center justify-content-between">
    ${todoValue}
    <div>
        <button class="btn btn-info" id="editBtn" >EDIT</button>
        <button class="btn btn-danger" id="deleteBtn" >DEL</button>
    </div>
    </li>
`
    ulParent.innerHTML += todoUI

    const editBtn = document.querySelector("#editBtn")
    const deleteBtn = document.querySelector("#deleteBtn")

    editBtn.addEventListener("click", editTodo)
    deleteBtn.addEventListener("click", deleteTodo)

}


