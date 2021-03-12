// Script for Modal

//Get the modal
let modal = document.querySelector("#main-modal");

// Get the button that opens the modal
let btnProject = document.querySelector(".back-project");

// Get the button that closes the modal
let btnClose = document.querySelector(".close");


// When the usr clicks on the back project button, the modal opens
btnProject.onclick = function(){
    modal.style.display ="block";
}

//When user clicks on close button, the modal closes
btnClose.onclick = function(){
    modal.style.display ="none";
}

//When user clicks anywhere outside of the modal, close it
window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}


//Script for navbar

let menu = document.querySelector(".menu");
let menuOpen = document.querySelector(".menu-open");
let menuClose = document.querySelector(".menu-close")


menuOpen.onclick = function(){
    menu.style.visibility="visible";
    menu.style.opacity="1";
    menuClose.style.display="block";
    menuOpen.style.display="none";
}

menuClose.onclick = function(){
    menu.style.visibility="hidden";
    menu.style.opacity="0";
    menuClose.style.display="none";
    menuOpen.style.display="block";
}