// console.log("hello world")


// var para = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War."

// console.log(para, "old para")

// var cities = ["lahore", "karachi", "multan"]

// var flag = false

// // console.log(cities)
// for (var index = 0; index < cities.length; index++) {
//     console.log(cities[index].indexOf("karachi"))
//     if (cities[index].indexOf("karachi") !== -1) {
//         flag = true
//         document.write("WELCOME TO KARACHI")
//     }
// }

// if (flag === false) {
//     document.write("WELCOME")
// }



// charAt()

// var a = "hello world"

// console.log(a.charAt(6))
// console.log(a[6])




// var para = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be World War II."
// console.log("para old", para)
// // para = para.replace("World War II", "the Second World War")
// para = para.replace(/World War II/g, "the Second World War")
// console.log("para new", para)



///MATH METHOD

// Round

// var num = 69.29
// var num = 78.9
// var num = 78.59
// var num = 102.51

// var roundNum = Math.round(num)

// console.log(roundNum)



// var headsUser = prompt("Enter heads userName")
// var tailsUser = prompt("Enter tails userName")

// var randomNum = Math.random()
// var roundNum = Math.round(randomNum)
// if (roundNum === 0) {
//     console.log("heads", headsUser)
// } else {
//     console.log("tails", tailsUser)

// }



// var randomNum = Math.random() * 5 + 1
// var roundNum = Math.floor(randomNum)

// console.log(roundNum)

var num1 = "150.85"
var num2 = "250"


console.log(parseInt(num1), "parseInt", typeof parseInt(num1))
console.log(Number(num1), "Number", typeof Number(num1))
console.log(+num1, "+ short hand number method", typeof +(num1))



// convert number into string
// String()
// .toString()

var num = 548
console.log(String(num))
console.log(num.toString())