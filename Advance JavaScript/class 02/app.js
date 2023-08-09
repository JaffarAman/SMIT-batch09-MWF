// const obj = {
//     name: "Jaffar",
//     age: 22,
//     gender: "male"
// }

// console.log(obj.age)
// console.log(obj["age"])
// const objName = obj.name

// const obj = {
//     fullName
//         : "Jaffar",
//     age: 22,
//     gender: "male"
// }
// const { gender, } = obj
// console.log(gender)
// const obj2 = {
//     name: "bilal",
//     age: 28,
//     gender: "male"
// }
// const { name, age } = obj2

// const age = 25

// document.write(age)


// const arr = ["apple", "mango"]
// const [fruit1, fruit2] = arr
// console.log(fruit1)
// console.log(fruit2)



// MAP OR Filter


// const arr = [0, 2, 4, 6, 8, 10]

// const arr3 = [...arr]


// arr3[1] = 10
// console.log("arr3", arr3)
// console.log("arr", arr)



// const arr = [0, 2, 4, 6, 8, 10]

// const arr2 = arr.map((value, index, array) => {
//     if (value === 2) {
//         return value
//     }

// })


// const foreachArr = arr.forEach((value) => {
//     return value * 2
// })
// console.log("foreachArr", foreachArr)
// console.log("arr1", arr)
// // console.log("arr2", arr2)



// filter

// const userName = ["Jaffar", "Sufiyan", "Bilal"]

// const findName = userName.filter((value, index) => {
//     if (value === "Sufiyanss") {
//         return true
//     }
// })

// console.log(findName)



// const ages = [32, 33, 20, 40];

// const check = ages.every(function (age) {
//     return age > 18;
// })
// console.log(check)


// const ages = [32, 33, 20, 40];
// ages.entries


const arr = [10, 20, 30, 50, 50, 90, 10, 20]

const newArr = Array.from( new Set(arr))

console.log(newArr)