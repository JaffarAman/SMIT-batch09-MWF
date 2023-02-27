// console.log("HELLO CLASS..")


// var userCity = prompt("Enter youu city").toLowerCase();

// var cities = ["karaChi", "lahore", "multan", "islamabad"]
// var isMatch = false

// for (var i = 0; i < cities.length; i++) {
//     if (cities[i].toLowerCase() === userCity) {
//         isMatch = true
//         console.log("WELCOME")
//         break
//     }
// }

// if (isMatch === false) {
//     console.log("YOUR CITY IS NOT FOUND")
// }

// console.log("hello".toUpperCase())


// var cities = ["karaChi", "lahore", "multan", "islamabad"] //ARRAY
// var str = "HELLO WORLD";  //STRING

// // console.log(str.length)
// console.log(str.slice(-5))


var str = "jaFFar"

// covert to capitalize  ==> Hello

// var firstLetter = str[0].toUpperCase()
// var otherLetters = str.slice(1).toLowerCase()
// var capitalize = firstLetter + otherLetters
// console.log(capitalize, "capitalize")


//SHORT HAND
// var capitalize = str[0].toUpperCase() + str.slice(1).toLowerCase();
// console.log(capitalize, "capitalize")


var str = "given you to a name"

var arr = str.split(" ") //['hello', 'wOrld']
var tempArr = []

for (var i = 0; i < arr.length; i++) {

    console.log(arr[i])
    var capitalize = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
    tempArr.push(capitalize)
}

console.log(tempArr.join(" "), "tempArr")


var month = ["June", "July", "August"];

for (var i = 0; i < month.length; i++) {
    document.write("PRINT STARING 3 WORDS: " + month[i].slice(0, 3) + "<br />")

}




