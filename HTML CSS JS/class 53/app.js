
// function fullFilledCity() {
//     var zipInput = document.getElementById("zipInput")
//     var cityName = ""

//     if (zipInput.value == "") {
//         return
//     }
//     console.log("hello world", zipInput.value)

//     if (zipInput.value == 123) {
//         cityName = "karachi"
//     } else if (zipInput.value == 456) {
//         cityName = "lahore"

//     } else if (zipInput.value == 789) {
//         cityName = "Islamabad"

//     }

//     console.log(cityName)
//     var cityInput = document.getElementById("cityInput")
//     cityInput.value = cityName

// }





// function getPara() {
//     var para = document.getElementById("para")
//     console.log(para.innerText)
// }

// function setPara() {
//     var txt = "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser"
//     var para = document.getElementById("para")
//     para.innerHTML += txt
// }

var loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deserunt totam iste tempore excepturi quod est eum fuga earum aspernatur?"

function seeMore(parameter1) {
    var para2 = document.getElementById("para2")
    var seeBtn = parameter1
    if (seeBtn.innerHTML == "see more") {
        seeBtn.innerHTML = "see less"
        para2.innerHTML = loremText

    } else {
        seeBtn.innerHTML = "see more"
        para2.innerHTML = "Lorem ipsum dolor sit amet"
    }
}