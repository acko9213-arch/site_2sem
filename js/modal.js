const modal  = document.getElementById("modalid");
const modal1 = document.getElementById("modalid1");
const form   = document.querySelector(".form23");

function closeBurgerMenu() {
  document.getElementById('burger').classList.remove('active');
  document.getElementById('burgermenu').classList.remove('active');
  document.getElementById('burgerreal').classList.remove('active');
  document.body.style.overflow = '';
}

function closeModal() {
  modal.style.display = "none";
  form.reset();
}

document.getElementById("open").onclick =document.getElementById("open1").onclick = function(e) {
  e.stopPropagation();
  closeBurgerMenu();
  modal.style.display = "block";
}
document.addEventListener("click", function(e) {
  if (e.target.closest(".close"))  closeModal();
  if (e.target.closest(".close1") || e.target.closest("#but2")) modal1.style.display = "none";
  if (e.target === modal)  closeModal();
  if (e.target === modal1) modal1.style.display = "none";
});

form.onsubmit = function(e) {
  e.preventDefault();
  modal.style.display = "none";
  modal1.style.display = "block";
  form.reset();
}