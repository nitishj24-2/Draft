document.addEventListener("DOMContentLoaded", ()=> {
    
    const text = document.getElementById("text")
    const letter = document.getElementById("letter")
    const envelop = document.getElementById("envelop")
    const finalBtn = document.getElementById("finalBtn")
    const finalTxt = document.getElementById("finalTxt")

    let envelopOpen = false;
    let letterVisible = false;
    envelop.src = "closed.png";
    
    finalBtn.style.display = "none";


    envelop.addEventListener("click", ()=> {
         if (!envelopOpen) {
            envelop.src = "open.png"
            envelop.classList.add("open");
            envelopOpen = true ;
            return;                       
        }
        
        letterVisible =!letterVisible
        letter.classList.toggle("show")
        text.style.pointerEvents= "none"
        
        if (letterVisible) {
            finalBtn.style.display =" block";
            envelop.classList.add("disable");
            
        }else {
            envelop.classList.remove("disable")
        }
        });
        
        finalBtn.addEventListener("click", () => {
            letter.classList.remove("show");
            envelop.style.opacity ="0";
            finalTxt.classList.add("app");
            finalBtn.style.display= "none";
            text.style.display= "none";
            envelop.style.pointerEvents = "none"
            
        });
    
});