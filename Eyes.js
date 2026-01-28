document.addEventListener("DOMContentLoaded",() => {
    const bn = document.getElementById("button1");
    const po = document.getElementById("poe")
    const app =document.getElementById("like")
    bn.addEventListener("click", () => {
    po.classList.add("show")});
    bn.addEventListener("click", () => {
    app.classList.add("come")    
    });
})
function dis() {
    document.getElementById("button1").style.display ="none";
    document.getElementById("yes").style.display ="block"
}
function is() {
    document.getElementById("yes").style.display="none"    
}
const yesBtn = document.getElementById("yes")
yesBtn.addEventListener("click", () => {
    document.body.style.display.opacity="0";
    setTimeout(() => {
        window.location.href= "prop.html";
    },400);
});