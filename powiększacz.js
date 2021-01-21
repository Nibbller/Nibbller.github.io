
var powiekszanie=document.getElementById("add");
var zmiejszenie=document.getElementById("decline");
var number=document.getElementById("number");
powiekszanie.addEventListener("click",function(){
    number.innerHTML=Number(number.innerHTML)+1
    

})
zmiejszenie.addEventListener("click",function(){
    number.innerHTML=Number(number.innerHTML)-1
    

})