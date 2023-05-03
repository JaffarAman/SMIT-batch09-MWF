// console.log("document", document.childNodes[1].childNodes)
// console.log("document", document.childNodes[1].children)
// // console.log("document", document.children)


// var h1 = document.children[0].children[1].children[0]
// h1.style.backgroundColor = "blue"
// console.log(h1)

// var parent = document.getElementById("parent")
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

// var childOne = parent.firstElementChild
// var childLast = parent.lastElementChild
// console.log(childOne.nextElementSibling)

// var a = childLast.previousElementSibling
// console.log(a)


// var para = document.getElementById("para")

// console.log(para.childNodes)



// console.log(document.childNodes[1].childNodes[1].nodeType)
// console.log(document.childNodes[1].childNodes[0].nodeType)

var para = document.getElementById("para")
console.log(para.nodeName)
console.log(para.nodeType)
console.log(para.nodeValue)


var list = document.getElementById("list")
console.log(list.children.length)
