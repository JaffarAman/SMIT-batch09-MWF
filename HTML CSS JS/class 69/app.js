// console.log("HELLO WORLD 1")


// setTimeout(function () {
//     console.log("HELLO WORLD 2") //
// }, 5000)




// console.log("HELLO WORLD 1")

// setTimeout(function () {
//     console.log("function call ")
// })

// console.log("HELLO WORLD 3")

// setInterval(function () {
//     console.log("function call")
// }, 2000)




// var counter = 1
// var interval = setInterval(function () {
//     counter++
//     console.log("function call")
//     console.log(counter)
//     if (counter === 10) {
//         clearInterval(interval)
//     }


// }, 1000)




///STOP WATCH

var minElement = document.getElementById("minElement")
var secElement = document.getElementById("secElement")
var msecElement = document.getElementById("msecElement")

var min = 0
var sec = 0
var msec = 0


var interval;

function timer() {
    console.log(msec++)
    msecElement.innerHTML = msec
    if (msec >= 100) {
        sec++
        secElement.innerHTML = sec
        msec = 0
    } else if (sec >= 60) {
        sec = 0
        min++
        minElement.innerHTML = min
    }

}


function startTimer() {
    interval = setInterval(timer, 10)
}

function stoptimer() {
    clearInterval(interval)
}


function resetTimer() {
    clearInterval(interval)
    msec = 00
    sec = 00
    min = 00
    msecElement.innerHTML = "00"
    secElement.innerHTML = "00"
    minElement.innerHTML = "00"

}



// 132