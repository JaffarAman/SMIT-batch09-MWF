function signUp() {
    var fullName = document.getElementById("fullName").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    //shortHand
    var userObj = {
        fullName,
        phoneNumber,
        email,
        password,
    }

    var getUsers = JSON.parse(localStorage.getItem("users"))
    //first user signup
    if (getUsers === null) {

        var arr = []
        arr.push(userObj)
        console.log("first user signup")
        localStorage.setItem("users", JSON.stringify(arr))
        alert("user signup")
        window.location.href = "./index.html"
    } else {
        console.log("getUser", getUsers)
        var findUser = getUsers.find(function (value) {
            console.log(value.email, "value")
            if (value.email === email) {
                return true
            }
        })

        if (findUser === undefined) {
            getUsers.push(userObj)
            localStorage.setItem("users", JSON.stringify(getUsers))
            alert("user signup")
            window.location.href = "./index.html"
        } else {
            alert("email address already exists")
        }
    }
}



function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    // console.log(email, password)
    var getUser = JSON.parse(localStorage.getItem("users"))
    // console.log("getUser", getUser)

    var userIndex = getUser.findIndex(function (value) {
        if (value.email === email && value.password === password) return true
    })

    if (userIndex !== -1) {
        console.log("successfully login")
        alert("successfully login")
        window.location.replace("./dashboard.html")
    } else {
        console.log("email OR password does not match")
        alert("email OR password does not match")
    }

    console.log("userIndex", userIndex)

}



// var arr = ["apple", "mango", "orange"]
// // find
// var findValue = arr.findIndex(function (value, index) {

//     if (value == "mangossss") {
//         return true
//     }
// })

// console.log("findValue", findValue)