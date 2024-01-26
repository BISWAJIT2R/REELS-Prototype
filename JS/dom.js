let linksbtn = document.querySelector(".hide")
let closebtn = document.querySelector(".popupCut")
let topNav = document.querySelector(".container .Header .links-box .links-box-child")

function PopUp () {
    topNav.classList.add("toggle")
}

function ClosePopUp() {
    topNav.classList.remove("toggle")
}
linksbtn.addEventListener("click", PopUp)

closebtn.addEventListener("click", ClosePopUp)