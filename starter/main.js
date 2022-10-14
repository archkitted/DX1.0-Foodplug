

// console.log("send me your account number")

// var writeup = "I play alot"


// console.log(document)

var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")

// console.log(hamburgerdiv)
function dosomething() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("showmobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}
 