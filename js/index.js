// 1, 2
window.addEventListener("load", () => {
  let feedbackParagraph = document.createElement("p");

  feedbackParagraph.textContent =
    "How do you like Fun Bus? Let us know by emailing feedback@funbus.com.";
  feedbackParagraph.style.backgroundColor = "#E9EEF1";
  feedbackParagraph.style.margin = "0 auto 4rem auto";
  feedbackParagraph.style.padding = "2rem";

  let contentSection = document.querySelector(".content-section");

  setTimeout(() => {
    contentSection.prepend(feedbackParagraph);

    feedbackParagraph.addEventListener("contextmenu", event => {
      event.target.style.display = "none";
    });
  }, 3000);
});

// 3
let contactLink = document.querySelector("nav a:nth-child(4)");

contactLink.addEventListener("click", () => {
  alert("Email us at info@funbus.com.");
});

// 4, 5
let mainNavigation = document.querySelector(".main-navigation");

mainNavigation.addEventListener("mouseenter", event => {
  event.target.style.backgroundColor = "#E9EEF1";
});

mainNavigation.addEventListener("mouseleave", event => {
  event.target.style.backgroundColor = "white";
});

// 6, 7
addEventListener("keydown", () => {
  let headerImage = document.querySelector("header.intro img");
  headerImage.style.display = "none";
});

addEventListener("keyup", () => {
  let headerImage = document.querySelector("header.intro img");
  headerImage.style.display = "inline";
});

// 8
let headerParagraph = document.querySelector("header.intro p");

headerParagraph.addEventListener("dblclick", event => {
  event.target.style.border = "1px solid #17A2B8";
  event.target.style.padding = "2rem";
});

// 9
window.addEventListener("resize", () => {
  headerParagraph.style.border = 0;
  headerParagraph.style.padding = 0;
});

// 10
window.addEventListener("scroll", () => {
  let logoHeading = document.querySelector("h1.logo-heading");

  let currentBackgroundColor = logoHeading.style.backgroundColor;

  if (!currentBackgroundColor) {
    currentBackgroundColor = "lightblue";
  }

  switch (currentBackgroundColor) {
    case "lightblue":
      logoHeading.style.backgroundColor = "white";
      break;
    case "white":
      logoHeading.style.backgroundColor = "lightblue";
      break;
    default:
      break;
  }
});

let destinationDiv = document.querySelector(".destination");

destinationDiv.addEventListener("click", event => {
  event.target.style.backgroundColor = "lightgreen";
});

let destinationDivButton = document.querySelector(".destination .btn");

destinationDivButton.addEventListener("click", event => {
  event.stopPropagation();
});

let firstNavLink = document.querySelector("nav a");

firstNavLink.addEventListener("click", event => {
  event.preventDefault();
});
