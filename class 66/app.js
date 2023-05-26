// var std1 = {
//     firstName: "Ayan",
//     lastName: "khan",
//     age: 16,
//     gender: "male"
// }

// var std2 = {
//     firstName: "Ayan",
//     lastName: "khan",
//     age: 16,
//     gender: "male"
// }
// var std3 = {
//     firstName: "Ayan",
//     lastName: "khan",
//     age: 16,
//     gender: "male"
// }


// function Std(firstName, lastName, age = 18) {
//     this.fName = firstName;
//     this.lName = lastName;
//     this.age = age

// }

// var std1 = new Std("jaffar", "aman", 22)
// var std2 = new Std("Ali", "khan",)



// console.log(std1)


// delete std2.age



// var std1 =
// {
//     firstName: "Ayan",
//     lastName: "khan",
//     stdAge: 16,
//     // fullName:
// }

// var std2 =
// {
//     firstName: "Ayan",
//     lastName: "khan",
//     stdAge: 16,
//     // fullName:

// }


// function Std(fName, lName, stdAge) {

//     this.firstName = fName;
//     this.lastName = lName;
//     this.age = stdAge;
//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName
//     }

// }



// var std1 = new Std("Jaffar", "Aman", 22)
// console.log(std1.firstName)
// console.log(std1.lastName)
// console.log(std1.getFullName())



var table = document.getElementById("table")
// var entries = prompt("How many entries!")
var entries = 5

var userData = [{
    firstName: "Jaffar",
    lastName: "Aman",
},
{
    firstName: "Ali",
    lastName: "khan",
},
{
    firstName: "Ali",
    lastName: "khan",
},
{
    firstName: "Ali",
    lastName: "khan",
},
{
    firstName: "Ali",
    lastName: "khan",
}
]

for (var i = 0; i < entries; i++) {
    var tr = document.createElement("tr")


    for (var key in userData[i]) {
        var td = document.createElement("td")
        td.innerHTML = userData[i][key]
        tr.append(td)
    }

    table.append(tr)


}

