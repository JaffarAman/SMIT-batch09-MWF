// function foo() {
//     var nameInput = document.getElementById("nameInput")
//     // console.log(nameInput.attributes)
//     console.log(nameInput.hasAttribute("disabled"))  // true || false
//     console.log(nameInput.getAttribute("disabled"))  // check value
//     nameInput.setAttribute("class", "inputBox")
//     nameInput.setAttribute("disabled", true)
//     nameInput.removeAttribute("placeholder")

// }


// var parent = document.getElementById("parent")


// //create element
// var h1ELement = document.createElement("h1")

// //create element value || text
// var h1Txt = document.createTextNode("HEADING 1")


// h1ELement.appendChild(h1Txt)
// console.log("h1ELement", h1ELement)
// h1ELement.setAttribute("class", "bgDark")
// parent.appendChild(h1ELement)



//todo app
var ulParent = document.getElementById("ulParent")
var todoInput = document.getElementById("todoInput")

function addTodo() {
    if (!todoInput.value) {
        return
    }

    //Create Element
    var liElement = document.createElement("li")
    //Assign class 
    liElement.className = "list-group-item bg-info d-flex align-items-center justify-content-between"

    //create Li text 
    var liTxt = document.createTextNode(todoInput.value)

    //appendChild in Li
    liElement.appendChild(liTxt)




    var div = document.createElement("div")
    //edit button
    var editBtn = document.createElement("button")
    var editTxt = document.createTextNode("EDIT")
    editBtn.appendChild(editTxt)
    editBtn.className = "btn btn-secondary"


    //delete button
    var deleteBtn = document.createElement("button")
    var deleteTxt = document.createTextNode("DELETE")
    deleteBtn.appendChild(deleteTxt)
    deleteBtn.className = "btn btn-danger"

    div.appendChild(editBtn)
    div.appendChild(deleteBtn)
    console.log(div)

    liElement.appendChild(div)


    //appendChild in UL 
    ulParent.appendChild(liElement)
    todoInput.value = ""

}


function deleteAll() {
    ulParent.innerHTML = ""
}



