var loginUser;
var listParent = document.getElementById("listParent")

window.addEventListener("load", function () {
    console.log("hello world ")
    var getUser = JSON.parse(localStorage.getItem("loginUser"))
    console.log(getUser, "getUser")
    loginUser = getUser


    var fullName = this.document.getElementById("fullName")
    console.log("fullName", fullName)
    if (fullName) {
        fullName.innerHTML = "WELCOME" + " " + loginUser.fullName

    }

    if (listParent) {
        var getPosts = JSON.parse(localStorage.getItem("posts"))
        for (var value of getPosts) {
            listParent.innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.desc}</p>
                <button class="btn btn-info">EDIT</button>
                <button class="btn btn-danger">DELETE</button>
            </div>
        </div>`
        }

    }

})



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


///dashboard javascript
function addPost() {
    console.log("addPost")
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")


    if (!title.value || !desc.value) {
        alert("Please enter values")
        return
    }

    // // CARD DIV
    // var cardDiv = document.createElement("div")
    // cardDiv.classList.add("card")

    // // CARD BODY
    // var cardBodyDiv = document.createElement("div")
    // cardBodyDiv.classList.add("card-body")

    // // CARD TITLE
    // var cardTitle = document.createElement("h5")
    // cardTitle.classList.add("card-title")
    // cardTitle.innerHTML = title.value
    // cardBodyDiv.append(cardTitle)

    // // CARD TEXT
    // var cardText = document.createElement("p")
    // cardText.classList.add("card-text")
    // cardText.innerHTML = desc.value
    // cardBodyDiv.append(cardText)


    // // EDIT BUTTON
    // var editBtn = document.createElement("button")
    // editBtn.innerHTML = "EDIT"
    // cardBodyDiv.append(editBtn)
    // editBtn.classList.add("btn", "btn-info")


    // // DELETE BUTTON
    // var deleteBtn = document.createElement("button")
    // deleteBtn.innerHTML = "DELETE"
    // deleteBtn.classList.add("btn", "btn-danger")
    // cardBodyDiv.append(deleteBtn)

    // //CARD DIV
    // cardDiv.append(cardBodyDiv)

    // console.log(cardBodyDiv, "cardBodyDiv")
    // listParent.append(cardDiv)

    // title.value = ""
    // desc.value = ""



    var todoBox = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text">${desc.value}</p>

        <button class="btn btn-info">EDIT</button>
        <button class="btn btn-danger">DELETE</button>

    </div>
</div>`
    // console.log(todoBox, "todoBox")
    listParent.innerHTML += todoBox

    var postObj = {
        title: title.value,
        desc: desc.value
    }


    var getPosts = JSON.parse(localStorage.getItem("posts"))
    console.log("getPosts", getPosts)

    if (getPosts == null) {
        var array = []
        array.push(postObj)
        localStorage.setItem("posts", JSON.stringify(array))

    } else {
        getPosts.unshift(postObj)
        localStorage.setItem("posts", JSON.stringify(getPosts))

    }

    title.value = ""
    desc.value = ""

}



// var a = "jaffar"
// var b = "aman"


// var c = "my name is" + " " + a + " " + b

// var c = `my name is ${a}   ${b} `


// var num1 = 100
// var num2 = 200

// var result = `answer is ${num1 + num2}`
// console.log(result)


// console.log(c)


