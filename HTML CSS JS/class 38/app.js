// console.log("HELLO CLASS...")


// Javascript String Method
// toLowerCase();
// toUpperCase();

// var str = prompt("enter your city").toUpperCase()
// console.log(str, "str")

// if (str == "KARACHI") {
//     console.log("WELCOME TO KARACHI")
// } else {
//     console.log("not match")
// }

// var arr = ["jaffar", "aman", "sufiyan"]
// var str = "hello world";
// // console.log(str.length)
// var str2 = "pakistani"
// var copyStr2 = str2.slice(0, -1)

// var capitalize = copyStr2[0].toUpperCase() + copyStr2.slice(1).toLowerCase()
// console.log(capitalize)



// World War II length = 12

var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War.";

// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 12) == "World War II") {
//         console.log(i)
//         console.log(str.slice(0, i) + "the Second World War" + str.slice(i + 12))
//     }

// }


// for (var i = 0; i < str.length; i++) {
//     if (str.slice(i, i + 12) === "World War II") {

//         console.log(i)
//         str = str.slice(0, i) + "the Second World War" + str.slice(i + 12)

//     }
// }


// console.log(str)

// object base
// var str2 = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."

// console.log(str2)

// for (var i = 0; i < str2.length; i++) {
//     if (str2.slice(i, i + 11) === "programming" + "") {
//         console.log(str2.slice(0, i) + "object base" + str2.slice(i + 11))

//         break
//     }
// }




///EASY WAY
//         str = str.slice(0, i) + "the Second World War" + str.slice(i + 12)

// var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War.";
// var indexNum = str.indexOf("World War II")
// str = str.slice(0, indexNum) + "the Second World War" + str.slice(indexNum + 12)

// console.log(str, "str")




// REPLACE

var str = "The New Yorker magazine doesn't allow the phrase World War II. They say it should be the Second World War.";
str = str.replace("World War II", "the Second World War")

console.log(str, "str")



