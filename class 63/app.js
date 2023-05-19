//Array
// var arr = ["karachi", 2023, 19, 5]

// [] = > array bracket

//Object

// city: "karachi", === >property
// city = > property name
// "karachi" = > property value

// var obj = {
//     // key : value
//     city: "karachi",
//     year: 2023,
//     date: 19,
//     month: 5
// }


// console.log("obj", obj.city)



//Array
// var arr = [ 2023, 19, 5 ,"karachi"]



var cityObj = {
    currentYear: 2023,
    city: "karachi",
    currentDate: 19,
    currentMonth: 5,
    isStatus: true,
    population: undefined,
}

// console.log(cityObj["city"])

// console.log("obj", cityObj.city) //Dot notation
// console.log("obj", cityObj["currentMonth"]) //Array notation

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (var key in cityObj) {
//     console.log(key, cityObj[key])
// }


// for in loop
for (var key in cityObj) {
    // console.log(key, cityObj.key)
}


var arr = [2023, 19, 5, "karachi"]
arr[4] = "hello"


cityObj.greet = "Hello Karachi"
cityObj.population = "1 billon"


// delete property

var del = delete cityObj.isStatus
console.log("del", del)
console.log("cityObj", cityObj)
