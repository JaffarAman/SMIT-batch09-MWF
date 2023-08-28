window.addEventListener("load", function () {
    console.log(localStorage.getItem("loginUser"))
    var userLogin = localStorage.getItem("loginUser")
    if (userLogin) {
        window.location.replace("./dashboard.html")
    }

})


function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var getUser = JSON.parse(localStorage.getItem("users"))

    var user = getUser.find(function (value) {
        if (value.email === email && value.password === password) return true

        // if (value.email === email) {

        //     if (value.password === password) {
        //         console.log("login successfully")
        //         return true

        //     } else {
        //         console.log("password invalid")

        //     }

        // } else {
        //     console.log("email address invalid")
        // }

    })

    if (user !== -1) {
        console.log("successfully login")
        alert("successfully login")
        localStorage.setItem("loginUser", JSON.stringify(user))
        window.location.replace("./dashboard.html")
    } else {
        console.log("email OR password does not match")
        alert("email OR password does not match")
    }


}