// Toggle sidebar menu on mobile device
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("sidebar");
});

// Close menu when clicking on any link inside it
const menuLinks = document.querySelectorAll(".menu a"); // Select all links inside the menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("sidebar"); // Remove the sidebar class to close the menu
  });
});

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("sidebar");
  }
});

// Download img for header background
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const backgroundImageUrl = "./img/pexels-nao-triponez-129207.avif";

  const img = new Image();
  img.src = backgroundImageUrl;
  img.onload = () => {
    header.style.backgroundImage = `url(${backgroundImageUrl})`;
  };
});

// Scroll smoothly
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".scroll-fade");
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
});

// Remove element position when scrolling
window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".slide-in");
  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (elementPosition < screenPosition) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
});
