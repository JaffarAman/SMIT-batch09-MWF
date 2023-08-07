// function foo() {
//     console.log("HELLO WORLD")
// }

// foo()

// function add(num1, num2) {
//     return num1 + num2
// }

// const result = add(10, 50)
// console.log(result)



// const add = function () {
//     console.log("hello function")
// }

// add()



// function foo() {
//     console.log("HELLO WORLD")
// }

// foo()
// Arrow Function
// const foo = () => {
//     console.log("Arrow Function")
// }

// foo()


// const add = _ => {
//     console.log("num1 ", num1)
// }

// add(100)


// function add(num1, num2) {
//     return num1 + num2
// }
// const foo = fullName => fullName


// const result = add()
// console.log(result)

// var add = () => 10 + 100

// add()
// function add() {
//     console.log("normal function")
// }


// const obj = {
//     name: "Jaffar",
//     age: 22,
//     getName: function () {
//         console.log(this)
//     }
//     // getName: () => {
//     //     console.log(this)
//     // }
// }


// obj.getName()



// The Spread (...) Operator
// const arr1 = ["apple", "mango"]
// const arr2 = ["banana"]

// const arr3 = arr1 + arr2
// es5
// const arr3 = arr1.concat(arr2)

// es6
// const arr3 = [...arr1, ...arr2]
// const arr3 = [...arr1]

// console.log(arr3)



// var a = 10
// var b = a
// a = 100
// console.log(b)




// const arr1 = ["apple"]  //REF :100
// const arr2 = ["mango"]



// const arr3 = arr1 //REF :100

// arr1.push("orange")

// console.log("arr1", arr1)
// console.log("arr3", arr3)




var arr1 = ["apple"]
var arr2 = ["mango"]

// var arr3 = arr1.concat(arr2)
var arr3 = [...arr1, ...arr2]


arr1.push("orange")

console.log("arr3", arr3)