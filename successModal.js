//Get Success Modal
let modalSuccess = document.querySelector("#success-modal");
let modalMain = document.querySelector("#main-modal");

// The Form and Prevent Default so that the submit button does not close the form
let submitForm = document.querySelector("#form")


//Get Buttons to open success Modal
let noReward = document.querySelector("#no-reward");
let bamboo = document.querySelector("#bamboo-reward");
let black = document.querySelector("#black-reward");
let mahogany = document.querySelector("#mahogany-reward");

//Get Button to close success Modal
let closeModal = document.querySelector(".modal-btn");

// Write the preventDefault function
submitForm.onsubmit = function(e){
    e.preventDelfault();
}

//Open modal functions
if (noReward) {
    noReward.addEventListener('click', (event) => {
        modalSuccess.style.display = "block";
        modalMain.style.display = "none";
    });
}

if (bamboo) {
    bamboo.addEventListener('click', (event) => {
        modalSuccess.style.display = "block";
        modalMain.style.display = "none";
        event.preventDelfault();
    });
}

if (black) {
    black.addEventListener('click', (event) => {
        modalSuccess.style.display = "block";
       // modalMain.style.display = "none";
    });
}

if (mahogany) {
    mahogany.addEventListener('click', (event) => {
        modalSuccess.style.display = "block";
       // modalMain.style.display = "none";
    });
}


//Close Modal Function
if (closeModal) {
    closeModal.addEventListener('click', (event) => {
        modalSuccess.style.display = "none";
        modalMain.style.display = "none";
        console.log("this button closes the success modal")
    });
}

