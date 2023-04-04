// var num = 550

// var stringNum = String(num)
// // var stringNum  = num.toString()
// console.log(typeof num)
// console.log(typeof stringNum)

// var str = "550.546"
// var num = parseInt(str)
// // var num = Number(str)
// console.log(typeof num)
// console.log(num)



// function greetUser() {
//     alert("HELLO WORLD")
// }

// greetUser()


// function add(num1 = 0, num2 = 0) {
//     var num1 = "jaffar"
//     //900
//     return num1 + num2
// }

// var value = add(500, 300)
// console.log(value)


// function fullName(firstName, lastName) {

//     return firstName + " " + lastName

// }

// var userName = fullName("Jaffar", "Aman")
// console.log(userName)
// // var userName =



// var inputElement = document.getElementById("userName")
// console.log(inputElement.value, "inputElement")



function getValue() {
    var input = document.getElementById("userName")
    console.log(input.value)
}

// function setValue() {
//     var input = document.getElementById("userName")
//     input.value = "jaffar aman"
// }

// function handleInput(condition) {
//     var input = document.getElementById("userName")

//     // if (condition === "setValue") {
//     //     input.value = "JAffar Aman"
//     // } else if (condition === "getValue") {
//     //     console.log("getValue", input.value)
//     // }

//     if (condition === "setValue") {
//         input.value = "JAffar Aman"
//     } else {
//         console.log("getValue", input.value)
//     }

// }

var box1 = document.getElementById("box1")

function overMouse() {


    box1.style.backgroundColor = "black"

    console.log("Mouse inside the container")
}

function outMouse() {
    // box1.style.backgroundColor = "green"

    console.log("Mouse outside the container")

}