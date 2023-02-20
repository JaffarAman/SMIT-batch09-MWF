
// for (var i = 1; i <= 10; i++) {
//     document.write("HELLO WORLD" + " " + i + "<br/>")
// }

//  1 to 50

// for (var i = 1; i <= 20; i++) {
//     document.write(i + "<br />")
// }

// 10 to 0

// for (var i = 10; i > 0; i--) {
//     document.write(i + "<br />")

// }


var tableNumber = +prompt("Enter Table number");
var tablelength = +prompt("Enter table length");

for (var i = 1; i <= tablelength; i++) {
    document.write(tableNumber + " x" + " " + i + " " + " = " + " " + tableNumber * i + "<br />")

}
