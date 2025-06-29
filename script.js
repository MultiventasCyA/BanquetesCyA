//* Menú móvil
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//* Cerrar menú al hacer clic en un enlace
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

//* Smooth scrolling para enlaces
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
