// console.log("hello world")

// function getInput() {
//     var input = document.getElementById("input")
//     console.log(input, "input")
//     // input.className = "bgBlue"
//     // input.setAttribute("class", "bgBlue")
//     // console.log(input.attributes)
//     // console.log(input.getAttribute("placeholder"))
//     console.log(input.hasAttribute("class"))
//     input.setAttribute("class", "bgBlue askdj asjkd")
//     input.setAttribute("class", "bgBlue")
//     console.log(input.getAttribute("placeholder"))
//     input.removeAttribute("placeholder")


// }

// var parent = document.getElementById("parent")

// for (var i = 0; i < 5; i++) {

//     var h1Element = document.createElement("h1")
//     var h1Txt = document.createTextNode("HEADING " + (i + 1))


//     h1Element.appendChild(h1Txt)
//     h1Element.setAttribute("onclick", "foo()")
//     h1Element.setAttribute("id", "foo")
//     h1Element.setAttribute("class", "bgBlue")



//     parent.appendChild(h1Element)



// }


// console.log(h1Element)
// // console.log(h1Txt)



var head2 = document.getElementById("head2")
console.log(head2.parentNode)


var h1Element = document.createElement("h1")
var h1Txt = document.createTextNode("HEADING 1")

h1Element.appendChild(h1Txt)
console.log(h1Element.childNodes[0].nodeValue)


document.write("<h1>HELLO WORLD</h1>")