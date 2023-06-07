var nameInput = document.getElementById("nameInput")

// function goToAbout() {

//     // var location = window.location.href
//     // console.log("location", location)
//     // location = "./about.html"

//     if (!nameInput.value) {
//         alert("Enter your name")
//         return
//     }
//     window.location.href = "./about.html"
// }


function goToAbout() {

    var location = window.location.href
    console.log("location", location)
    location = "./about.html"

    if (!nameInput.value) {
        alert("Enter your name")
        return
    }

    // window.location.assign("./about.html")
    window.location.replace("./about.html")

}


function goToGoogle() {
    //anchor target work
    // window.open("https://www.google.com" )
    window.open("./about.html", "win1", "width=500, height=500 , left = 40% , top = 40% ")
}
