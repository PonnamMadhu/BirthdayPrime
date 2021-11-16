var btnTRanslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#input");
var output=document.querySelector("#output");
function clickHandler(){
   for(var i=2;i<textInput.value;i++)
   {
       if(textInput.value%i==0){
           output.innerHTML=("Your birthday is Not  a Prime number");
           
       }
       else
       {
        output.innerHTML=("Your birtday is Prime Number")
       }
   }
       
}
btnTRanslate.addEventListener("click",clickHandler)
