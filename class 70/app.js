

// function goToGoogle() {
//     console.log(window.location.href)
//     window.location.href = "https://www.google.com"
// }


// function goToFb() {
//     console.log(window.location.href)
//     window.location.href = "https://www.facebook.com"
//     if (window.location.pathname === "/contact") {
//         // style==> change the body element bgColorj
//     }
// }



function goToGoogle() {
    // console.log(window.location.href)
    // window.location.href = "https://www.google.com"
    // window.location.href = "./about.html"


    // window.location.assign("./about.html")
    // window.location.assign("https://www.google.com")


    window.location.replace("https://www.google.com")

}

function refreshPage(params) {
    window.location.reload(true) //hard reload
    window.location.reload(false) //normal reload
    window.location.reload() //normal reload
}