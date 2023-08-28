// console.log("hello WORLD")



function handleSubmit() {
    var firstName = document.getElementById("firstName")
    var lastName = document.getElementById("lastName")
    var email = document.getElementById("email")
    var password = document.getElementById("password")


    console.log(firstName.value)


    if (!firstName.value || !lastName.value || !email.value || !password.value) {
        alert("required fields are missing")
        return
    }

    alert("FORM SUBMIT")

}


// function getPara() {
//     var para = document.getElementById("para")

//     para.innerHTML = "jaffar aman"

// }



function handleImg(flag) {
    var img = document.getElementById("img")
    console.log("img", img.src)

    if (flag === "in") {
        img.src = "./images/car2.avif"
        img.style.borderRadius = "50%"
        img.style.transition = "all 0.6s ease"

    } else {
        img.src = "./images/card1.jpg"
        img.style.borderRadius = "0"
        img.style.transition = "all 0.6s ease"

    }


}


function foo() {
    var img = document.getElementById("carImg")
    console.log(img)
    img.className += " borderRadius"

}


function getParas() {
    var paras = document.getElementsByTagName("")
    // var paras = document.getElementsByClassName("")

    for (var i = 0; i < paras.length; i++) {
        console.log(paras[i].innerText)
        if (i % 2 !== 0) {
            paras[i].style.backgroundColor = "red"

        } else {
            paras[i].style.backgroundColor = "yellow"

        }
    }





}


function getPara() {
    var div = document.getElementById("parent")



    var paras = div.getElementsByTagName("p")
    console.log(div, "div")
    console.log(paras[0], "paras")

}