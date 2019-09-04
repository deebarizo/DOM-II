// 1
let contactLink = document.querySelector("nav a:nth-child(4)");

contactLink.addEventListener("click", () => {
  alert("Email us at info@funbus.com.");
});

// 2, 3
let mainNavigation = document.querySelector(".main-navigation");

mainNavigation.addEventListener("mouseenter", event => {
  event.target.style.backgroundColor = "#E9EEF1";
});

mainNavigation.addEventListener("mouseleave", event => {
  event.target.style.backgroundColor = "white";
});

// 4, 5
addEventListener("keydown", () => {
  let headerImage = document.querySelector("header.intro img");
  headerImage.style.display = "none";
});

addEventListener("keyup", () => {
  let headerImage = document.querySelector("header.intro img");
  headerImage.style.display = "inline";
});
