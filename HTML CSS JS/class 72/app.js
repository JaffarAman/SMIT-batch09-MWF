var heading = document.getElementById("heading")


function pageLoad() {
    console.log("page reload")
    var getUserName = localStorage.getItem("userName")
    if (!getUserName) {
        var userName = prompt("Enter Your Name!")
        localStorage.setItem("userName", userName)
        heading.innerHTML = "WELCOME" + " " + userName
        return

    }
    heading.innerHTML = "WELCOME" + " " + getUserName


}


function saveData() {
    var fullName = "Jaffar"

    localStorage.setItem("fullName", fullName)
    localStorage.setItem("age", "22")

}

function getData() {
    var fullName = localStorage.getItem("fullName")
    var age = localStorage.getItem("age")

    console.log("fullName", fullName)
}




// var fruitArr = ["apple", "mango", "orange"]
// localStorage.setItem("fruitsArr", fruitArr)

// var obj = {
//     name: "Jaffar"
// }

// localStorage.setItem("stdObj", obj)


function setArray() {
    var fruitArr = ["apple", "mango", "orange"]

    var stringifyArr = JSON.stringify(fruitArr)
    console.log(stringifyArr)
    localStorage.setItem("fruitsArr", stringifyArr)

}

function getArray() {
    var getData = localStorage.getItem("fruitsArr")
    var dataParse = JSON.parse(getData)

    console.log(dataParse)
}




function setObject() {

    var obj = {
        name: "jaffar",
        age: 22
    }


    localStorage.setItem("stdObj", JSON.stringify(obj))

}

function getObject() {
    var getData = JSON.parse(localStorage.getItem("stdObj"))
    console.log("getData", getData)
}