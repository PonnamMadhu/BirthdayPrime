var btnTRanslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#input");
var output=document.querySelector("#output");
var number = textInput.value
console.log(number);
function clickHandler(){
    var rem = textInput.value*2
    output.innerText= rem
    
}
btnTRanslate.addEventListener("click",clickHandler)
