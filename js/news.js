
//Get The Elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//Toggle the navbar menu on click Open/Close 
menuBtn.addEventListener("click", () => {
  menu.classList.toggle('nav-toggle');
});

//Get the current year and add it into the HTML
document.querySelector(".year").innerHTML = new Date().getFullYear();