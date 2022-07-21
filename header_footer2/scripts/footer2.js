import footer from "./footer.js";

document.getElementById("P-container").innerHTML=footer();

function Accept_Decline(){
    let div=document.getElementById("P-footer2Box1");
    div.style.display="none";
}