document.addEventListener("click", function (e) {

const modal = document.getElementById("modalwindow");
const modal1 = document.getElementById("modalid1");

function closeModalBron() {
  modal.style.display = "none";
  document.querySelector(".forma").reset();
}

if (e.target.closest(".kredit1")) {
    modal.style.display = "block";
}

if (e.target.closest(".krest")) {
    closeModalBron();
}

if (e.target === modal) {
    closeModalBron();
}

});


document.querySelector(".forma").addEventListener("submit", function(e){

e.preventDefault();

if(!this.checkValidity())
{
    this.reportValidity();
    return;
}
this.reset();
document.getElementById("modalwindow").style.display="none";
document.getElementById("modalid1").style.display="block";

});