// console.log(`test`);
let inputBox = document.getElementById(`inputBox`).value
let result = document.getElementById(`result`);
document.getElementById('inputBox').onkeydown = function(e){
    if(e.keyCode == 13){
        inputBox = document.getElementById(`inputBox`).value
        result.textContent=inputBox
    }
}

function saveInputBox(){ 
    inputBox = document.getElementById(`inputBox`).value
    result.textContent=inputBox

}

function codeTest() { //This is what I'm testing
    document.getElementById(`inputBox`).value = "Let's see if this works." // The string is being entered in the box just fine
        //I just can't think of a way to submit the string into the input box.
}