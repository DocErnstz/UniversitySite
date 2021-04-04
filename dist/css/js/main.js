const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelector(".nav-links");

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    menuBtn.classList.add("open");
    hamburger.classList.add('open');
    navLinks.classList.add("open");
    showMenu = true;
    console.log("s");
  } else {
    hamburger.classList.remove('open');
    navLinks.classList.remove("open");
    showMenu = false;
  }
}