const hamburgers = document.querySelectorAll(".hamburger");
const hamburger1 = document.getElementById("hamburger1");
const hamburger2 = document.getElementById("hamburger2");
const mobileNav = document.getElementById("mobileNav");
const mediaQuery = window.matchMedia("(min-width: 768px)");
const header = document.querySelector(".header");
const content = document.querySelector(".content");
const desktopNavElements = document.querySelectorAll(".desktopNav a");
const socialLinksElements = document.querySelectorAll(".socialLinks a");
const logo = document.querySelector(".logo a");
const opacity = document.querySelector(".opacity");
let rootBottomMargin = window.innerHeight - (header.offsetHeight-1);
console.log(rootBottomMargin);
console.log(desktopNavElements);
console.log(socialLinksElements);
console.log(logo.innerHTML);
console.log(opacity.style.top);

const nav = document.querySelector("nav");

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

document.getElementById("year").innerHTML = new Date().getFullYear();

let options = {
  rootMargin: `0px 0px ${rootBottomMargin * -1}px 0px`,
  threshold: 0,
};

let intersectionCallBack = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("True");
      console.log(entry.intersectionRatio);

      //remove header backgroundImage Add header backgroundColor
      header.style.backgroundImage = "none";
      header.style.backgroundColor = "#F0F8FF";
      header.style.boxShadow = "0px 1px 6px 0px #000000";
      //Change menu links elements color
      desktopNavElements.forEach((desktopNavElement) => {
        desktopNavElement.style.color = "black";
      });
      //Change socialLinks icons color
      socialLinksElements.forEach((socialLinksElement) => {
        socialLinksElement.style.color = "black";
      });
      //Change logo color
      logo.style.color = "black";
      //Change opacity top position
      opacity.style.top = "55px";
    } else {
      console.log("False");
      console.log(entry.intersectionRatio);
      //remove header backgroundImage Add header backgroundColor
      header.style.backgroundImage = "url(../img/background.jpg)";
      header.style.backgroundColor = "transparent";
      header.style.boxShadow = "none";
      //Change menu links elements color
      desktopNavElements.forEach((desktopNavElement) => {
        desktopNavElement.style.color = "white";
      });
      //Change socialLinks icons color
      socialLinksElements.forEach((socialLinksElement) => {
        socialLinksElement.style.color = "white";
      });
      //Change logo color
      logo.style.color = "white";
      //Change opacity top position
      opacity.style.top = "0px";
    }
  });
};
let observer = new IntersectionObserver(intersectionCallBack, options);

observer.observe(content);
