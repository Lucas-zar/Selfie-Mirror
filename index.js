const Emailbtn = document.getElementById("email");
const Email = document.getElementById("emailuser");

const NumberBtn = document.getElementById("number");
const PNumber = document.getElementById("pnumber");

const MNumberBtn = document.getElementById("Mnumber")
const MPNumber = document.getElementById("Mpnumber");

const MEmailbtn = document.getElementById("Memail");
const MEmail = document.getElementById("Memailuser");

NumberBtn.onclick = function DisplayNumber(){
    PNumber.classList.toggle("hidden");
};

Emailbtn.onclick = function DisplayEmail(){
    Email.classList.toggle("hidden");
};

MNumberBtn.onclick = function MDisplayNumber(){
    MPNumber.classList.toggle("hidden");
};

MEmailbtn.onclick = function MDisplayEmail(){
    MEmail.classList.toggle("hidden");
};