// function getData() {
//     console.log("getData()")
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(function (data) {
//             return data.json()
//         })
//         .then(function (response) {
//             console.log(response)
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
//     console.log("100")
// }



// PROMISES


// const myPromise = new Promise(function (resolve, reject) {
//     var age = 20
//     if (age === 20) {
//         resolve(true)
//     } else {
//         reject(false)
//     }
// })
//     .then(function (resolve) {
//         console.log("resolve", resolve)
//     })
//     .catch(function (reject) {
//         console.log("reject", reject)

//     })



const myPromise = new Promise(function (resolve, reject) {
    const isAssignmentDone = true
    if (isAssignmentDone) {
        resolve("allow")
    } else {
        reject("dafa hojao class sy")
    }
})
    .then(function (resolve) {
        console.log(resolve)
        alert(resolve)
    })
    .catch(function (error) {
        console.log(error)
        alert(error)
    })