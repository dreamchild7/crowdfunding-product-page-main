//Get Column Footer
let bambooColumn = document.querySelector(".bamboo-col");
let blackColumn = document.querySelector(".black-col");
let mahoColumn = document.querySelector(".mahogany-col");


let bambooRadio = document.querySelector("#bamboo-radio");
let blackRadio = document.querySelector("#black-radio");




    


if(bambooRadio){
    bambooRadio.onchange = function(){
        console.log("bamboo radio is checked")
        
        bambooColumn.style.display="block";
        blackColumn.style.display="none"
    
    }
    
}

 

 if(blackRadio){
    blackRadio.onchange = function(){
        console.log("black radio is checked")
        blackColumn.style.display="block"
        bambooColumn.style.display="none"
    
    }
}



