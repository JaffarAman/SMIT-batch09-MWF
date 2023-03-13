// console.log("HELLO WORLD")


// var randomNum = Math.random()
// console.log("randomNum", randomNum)
// var roundOff = Math.round(randomNum)
// console.log("roundOff", roundOff)


// var randomNum = Math.random() * 5 + 1
// var floorNum = Math.floor(randomNum)
// console.log("floorNum", floorNum)



// var num = 685.95320165
// console.log(num.toFixed(2))



///DATA AND TIME CHAPTERS
// var now = new Date().toDateString()
// console.log(typeof now)
// console.log(now.slice(0, 10))


// var now = new Date().toDateString()
// console.log(typeof now)
// console.log(now.slice(0, 3))


// var now = new Date()
// var day = now.getFullYear()
// console.log(day, "day")

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = new Date().getDay()

// console.log(dayNames[6])


// var hours = new Date().getHours()
// var min = new Date().getMinutes()
// var sec = new Date().getSeconds()
// var mSec = new Date().getMilliseconds()
// console.log(hours + ":" + min + ":" + sec + ":" + mSec)

var time = new Date("feb 09 2001").getTime()
var currentMiliSec = new Date().getTime()


// console.log(time, "time")
// console.log(currentMiliSec, "currentMiliSec")


// var diff = currentMiliSec - time

// // console.log(diff, "diff")

// var totalYear = Math.round(diff / (1000 * 60 * 60 * 24 * 365))
// var month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
// console.log(month)
