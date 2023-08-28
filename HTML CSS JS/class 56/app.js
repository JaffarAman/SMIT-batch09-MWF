
// DOM
// d = Document
// o = object
// m = model

// document.write("HELLO WORLD...")


// document.write("<h1>HELLO WORLD</h1>")

// document.getElementById("input") // dom method
// document.getElementsByClassName("input") // dom method
// document.getElementsByTagName("input") // dom method



// var h1Element = document.childNodes[1].childNodes[2].childNodes[1]

// h1Element.style.backgroundColor = "green"



// // var a = document.childNodes[1].childNodes[2].children
// var a = document.children[0].children
// console.log(a)


// var parent = document.getElementById("parent")
// var childElements = parent.children

// for (var i = 0; i < childElements.length; i++) {
//     console.log(childElements[i])
//     childElements[i].style.background = "blue"
// }


var parent = document.getElementById("parent")
// console.log(parent.childNodes)

var fChild = parent.firstElementChild
// var lstChild = parent.lastChild
var lstChild = parent.lastElementChild
// console.log(lstChild, "lstChild")
fChild.style.backgroundColor = "red"
lstChild.style.backgroundColor = "blue"


// console.log(parent.firstElementChild.nextElementSibling.nextElementSibling)
// console.log(parent.lastElementChild.previousElementSibling)
// console.log(parent.firstElementChild.previousElementSibling)



var child3 = document.getElementById("child3")
console.log(child3.parentNode.parentNode.style.backgroundColor = "pink")





