function getInputValue() {
    var userName = document.getElementById("userName")
    console.log("hello class", userName.value)
    userName.value = "Jafar aman"
}


function getParaValue() {
    var para = document.getElementById("para")
    console.log("para", para.innerHTML)
    console.log("para", para.innerText)
}

function hideImg() {
    var carImg = document.getElementById("carImg")
    // console.log("carImg", carImg.src)
    console.log("carImg", carImg.className)
    carImg.className += " hidden"
}


function showImg() {
    var carImg = document.getElementById("carImg")
    // console.log("carImg", carImg.src)
    console.log("carImg", carImg.className)
    carImg.className += " show"

}


var bulbImg = document.getElementById("bulbImg")
function bulbOn() {
    console.log("bulbOn()", bulbImg.src)

    bulbImg.src = "./bulbOn.jfif"


}

function bulbOff() {
    console.log("bulb off")
    bulbImg.src = "./bulbOff.jfif"

}