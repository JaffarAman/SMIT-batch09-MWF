// function function_name (parameters)  {

// }

// function_name(arguments)



// function foo(user = ""){

// }


// function foo(name = "John Doe") {
//     console.log(name)
// }

// foo()


// function getName() {
//     var value = "VALUE"

//     return value

//     console.log("HELLO WORLD")
// }

// var name = getName()
// console.log(name, "name")



// local vs global scope

// var num = 100  //global scope


// function foo() {
//     var num = 10  //local
//     console.log(num)

// }

// foo()
// console.log(num)


// var num = 100

// function foo() {
//     num = 500
//     console.log(num)
// }




// foo()
// console.log(num, "bahir wala")


/*  function foo() {
    alert("HELLO USER")
}*/


function greetUser() {
    var userName = document.getElementById("userName")
    console.log(userName.value)

    alert("hello " + userName.value)
}
