// CHAPTER 45 EVENTS:


// function nikkah(params) {
//     console.log("HEllo user")
// }


function sum(num1, num2) {
    console.log(num1 + num2)
}



function greetUser() {

    var input = document.getElementById("userName")

    console.log(input.value)

    alert("hello" + input.value)
}



// function showNumber() {

//     var userNumber = document.getElementById("userNumber").value
//     var userName = document.getElementById("userName").value


//     alert("name " + userName + " number " + userNumber)
// } 


function setNumber(num) {
    var input = document.getElementById("number")
    // input.value = input.value + num
    input.value += num

    // console.log(num, input, "num")
}


function ans() {
    var inputValue = document.getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}