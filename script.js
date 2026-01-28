function hey() {
    document.getElementById("rep1").innerHTML= 
    "So you are probably wondering what is this?";             
    document.getElementById("b2").style.display="block";
    document.getElementById("b1").style.display="none"
    
} 
function reply() {
    document.getElementById("rep2").innerHTML=
    "Then why you are waiting? Click on the button below Cutieeee!!";
    document.getElementById("b2").style.display="none"
    document.getElementById("b3").style.display="block"
}
function huh() {
    document.getElementById("rep3").innerHTML=
    "Before the final click! You have a task, to guess the reason behind the color of this webpage!";
    document.getElementById("b3").style.display="none"
    document.getElementById("lbtn").style.display="block"
}
let tries = 0;

function move() {
    tries++;
    const butn= document.getElementById("lbtn").style.transform =
    tries % 2 ? "translateX(80px)" : "translateX(-80px)";
   if (tries===7)location.href = "Eyes.html";
   document.getElementById("rbtn").innerHTML="Click the button dummyyy!!!!!"
   
}