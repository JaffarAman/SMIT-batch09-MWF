// function saveData() {
//     var userName = "John Doe"
//     localStorage.setItem("name", userName)
// }


// //get data in localStorage
// function getData() {
//     var data = localStorage.getItem("name")
//     console.log("data", data)
// }


// function saveData() {
//     var userName = "John Doe"
//     // save array in localStorage
//     // var arr = ["apple", "mango", "orange"]
//     // var num = 100
//     // localStorage.setItem("num", JSON.stringify(num))
//     sessionStorage.setItem("userName", userName)
// }


// //get data in localStorage
// function getData() {
//     var data = JSON.parse(localStorage.getItem("num"))
//     console.log("data", data)
// }


function signUp() {
    var fullName = document.getElementById("fullName").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value




    // var userObj = {
    //     fullName: fullName,
    //     phoneNumber: phoneNumber,
    //     email: email,
    //     password: password,
    // }

    //shortHand
    var userObj = {
        fullName,
        phoneNumber,
        email,
        password,
    }

    var getUsers = JSON.parse(localStorage.getItem("users"))
    console.log(getUsers, "getUsers")

    if (getUsers == null) {

        var arr = []
        arr.push(userObj)
        console.log("first user signup")
        localStorage.setItem("users", JSON.stringify(arr))

    } else {
        console.log("user signup")
        getUsers.push(userObj)
        localStorage.setItem("users", JSON.stringify(userObj))


    }



}