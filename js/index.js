const hamburgers = document.querySelectorAll(".hamburger");
const hamburger1 = document.getElementById("hamburger1");
const hamburger2 = document.getElementById("hamburger2");
const mobileNav = document.getElementById("mobileNav");
const mediaQuery = window.matchMedia("(min-width: 768px)");

hamburgers.forEach((hamburger) => {
  hamburger.addEventListener("click", (e) => {
    hamburger1.classList.toggle("invisible");
    hamburger2.classList.toggle("invisible");
    hamburger2.classList.toggle("visible");
    mobileNav.classList.toggle("invisible");
  });
});

mediaQuery.addEventListener("change", (e) => {
  hamburger1.classList.add("visible");
  hamburger1.classList.remove("invisible");
  hamburger2.classList.add("invisible");
  hamburger2.classList.remove("visible");
  mobileNav.classList.add("invisible");
});
