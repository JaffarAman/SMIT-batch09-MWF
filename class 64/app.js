// var arr = ["karachi", 22, 5, 2023]

// var obj = {
//     city: "karachi",
//     date: 22,
//     year: 2023,
//     month: 5
// }



// var fNStd1 = "Jaffar"
// var lNStd1 = "Aman"
// var stdAge1 = 22
// var stdGender1 = "male"
// var stdDob1 = "9/feb/2001"


// var stdArr = ["Jaffar", "Aman", 22, "male", "9/feb/2001"]

// var std1 = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     age: 22,
//     gender: "male",
//     // dob: "9/feb/2001", // feb 9 2001
// }
// std1.dob = "feb 9 2001"

// delete std1.gender
// console.log(std1)
// console.log(std1["gender"])

// for (var key in std1) {
//     console.log(key, std1[key])
// }



// var std2 = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     age: 22,
//     gender: "male",
//     dob: "9/feb/2001",
// }





// var std1 = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     age: 22,
//     gender: "male",
//     dob: "9/feb/2001", // feb 9 2001
//     subjects: ["HTML", "CSS", "JAVASCRIPT"]
// }


// //check prop
// var checkProp = "dobss" in std1

// //delete
// delete std1.dob
// console.log(checkProp)
// console.log(std1.subjects[2])




var std1 = {
    firstName: "Jaffar",
    lastName: "Aman",
    // age: 22,
    gender: "male",
    dob: "9/feb/1998", // feb 9 2001
    subjects: ["HTML", "CSS", "JAVASCRIPT"],
    getFullName: function () {
        var fullName = this.firstName + " " + this.lastName
        return fullName
    },

    getAge: function (dob) {
        var dobMiliSec = new Date(dob).getTime()
        var currentMilSec = new Date().getTime()
        var diffMiliSec = currentMilSec - dobMiliSec
        var age = Math.floor(diffMiliSec / (1000 * 60 * 60 * 24 * 365))
        return age
    },


}

var std1FullName = std1.getFullName()
var std1Age = std1.getAge("feb 9 2020")

console.log(std1Age)