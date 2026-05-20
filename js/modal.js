const modal  = document.getElementById("modalid");
const modal1 = document.getElementById("modalid1");
const open   = document.getElementById("open");
const open1  = document.getElementById("open1");
const open2  = document.getElementById("but1");
const close  = document.querySelector(".close");
const close1 = document.querySelector(".close1");
const close3  = document.getElementById("but2");

function closeBurgerMenu() {
  const burger = document.getElementById('burger');
  const burgerMenu = document.getElementById('burgermenu');
  const burgerOverlay = document.getElementById('burgerreal');
  burger.classList.remove('active');
  burgerMenu.classList.remove('active');
  burgerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

open.onclick = function (e) {
  e.stopPropagation();
  closeBurgerMenu();
  modal.style.display = "block";
}

open1.onclick = function (e) {
  e.stopPropagation();
  closeBurgerMenu();
  modal.style.display = "block";
}

close.onclick = function (e) {
  e.stopPropagation();
  closeModal();
}

close3.onclick = function (e) {
  e.stopPropagation();
  closeModal1();
}
const form = document.querySelector(".form23");

form.onsubmit = function (e) {
  e.preventDefault();

  modal.style.display = "none";
  modal1.style.display = "block";
  form.reset();
}
close1.onclick = function (e) {
  e.stopPropagation();
  closeModal1();
}

window.onclick = function (event) {
  if (event.target == modal)  closeModal();
  if (event.target == modal1) closeModal1();
}
function closeModal() {
  modal.style.display = "none";
  document.querySelector(".form23").reset();
}

function closeModal1() {
  modal1.style.display = "none";
}