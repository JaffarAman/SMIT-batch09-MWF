//get input element
var input = document.getElementById("todoInput")
var ulParent = document.getElementById("ulParent")


function addTodo() {
    if (!input.value) {
        alert("ENTER TODO VALUEs")
        return
    }

    //create LI
    var liElement = document.createElement("li")


    //create li text
    var liTxt = document.createTextNode(input.value)

    //append child
    liElement.appendChild(liTxt)

    //assign class
    liElement.className = "list-group-item d-flex align-items-center justify-content-between"

    // console.log(liElement)




    var div = document.createElement("div")
    var editBtn = document.createElement("button")
    var deleteBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"

    ///SET ONCLICK EVENT
    editBtn.setAttribute("onclick", "editTodo(this)")
    deleteBtn.innerHTML = "DELETE"
    ///SET ONCLICK EVENT
    deleteBtn.setAttribute("onclick", "deleteTodo(this)")
    editBtn.className = "btn btn-info"
    deleteBtn.className = "btn btn-danger"
    div.appendChild(editBtn)
    div.appendChild(deleteBtn)

    liElement.appendChild(div)

    //append listing
    ulParent.appendChild(liElement)

    input.value = ""

}


function editTodo(el) {
    console.log("editTodo()", el.parentNode.parentNode.
        firstChild.nodeValue)
    var li = el.parentNode.parentNode

    var placeHolder = li.firstChild.nodeValue
    var editValue = prompt("Edit Todo", placeHolder)

    console.log("editValue", editValue)

    li.firstChild.nodeValue = editValue

}

function deleteTodo(elem) {

    elem.parentNode.parentNode.remove()
}