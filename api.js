var btnTRanslate=document.querySelector("#btn-translate");
var textInput=document.querySelector("#input");
var output=document.querySelector("#output");
function clickHandler(){
    
    var a =textInput.value;
    var newStr=a.replaceAll("-","");
   addition(newStr)
   
}
function addition(str){
    
    var ar=str.split("")
    let sum=0
    for(let i=0;i<ar.length;i++){
        sum+=Number(ar[i])
    }
    console.log(sum)
    isPrime(sum)
}
function isPrime(num){
    let c =true;
    for(let i=2;i<num;i++){
        if(num%i==0){
            c=false;
            break;
        }
    }
    if(c){
        output.innerHTML="Yayy! Your Birthday is a Prime Number.🥳🥳"
    }else{
        output.innerHTML="Oh No! Your Birthday is Not a Prime Number.☹️"
    }
}
btnTRanslate.addEventListener("click",clickHandler)
