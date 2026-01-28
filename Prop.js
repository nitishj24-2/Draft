document.addEventListener("DOMContentLoaded",()=>{
    const img = document.getElementById("img");
    const text = document.getElementById("text");
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    const choices = document.getElementById("choices");
    const finalBtn = document.getElementById("final");

    img.src = "laugh.jpg";
    text.innerText ="Heyy!! Tap me!! I have something to say!!So hurry up!! 😼🎀";

    choices.style.display = "none"
    finalBtn.style.display ="none"
    let noCount = 0

    const noImg = [
        "goofy.jpg",
        "cry.jpg",
        "tear.jpg",
        "blnkt.jpg",
        "Stnd.jpg",
    ]
    
    const noText = [
    "No??😾",
    "Mau is gonna be sad 🙁",
    "Pweaseee!! 😭",
    "Mau is losing hope 😔",
    "Ok then, I m gonna stand like this, forever😿",
    ]



    text.addEventListener("click", () => {
        img.src ="rose.jpg";
        text.innerText ="Will you be my valentine & Wifey?😭💗👉👈";
        choices.style.display="flex";
        
    });
    
    no.addEventListener("click", () =>{
        if (noCount < noImg.length) {
            img.src = noImg[noCount];
            text.innerText= noText[noCount];
            noCount++;
        }
    });
    yes.addEventListener("click", ()=> {
        img.src= "bow.jpg";
        text.innerText="Yayyyyy!! Thankeeww Pookieee 🎀😭💗🌷Let's Get to the final page!! 🎀"
        choices.style.display="none"
        finalBtn.style.display="Block"
    });
    
    finalBtn.addEventListener("click", () => {
        window.location.href= "letter.html";
    });
       
});
        