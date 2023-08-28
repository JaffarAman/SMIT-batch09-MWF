// import export


const userObj = {
    name: "Jaffar",
    age: 22,
    email: "jaffar@gmail.com"
}


const stdObj = {
    name: "std1",
    age: 22,
    email: "std1@gmail.com"
}
console.log("userObj javascript 1", userObj)



//single export
// export default userObj

// multiply exports
export {
    stdObj,
    userObj
}
