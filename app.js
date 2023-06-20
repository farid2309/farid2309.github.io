const circleGrow = document.querySelector(".circle");
const darkMode = document.querySelector(".dark_mode");
const textMain = document.querySelector(".mainheading");
const sideMenu = document.querySelector("aside");
const sideButton = document.querySelector(".inner_side_button");
const menuNav = document.querySelector("nav");
const navItems = Array.from(menuNav.children);
const dateTime = document.querySelector(".date_time");
const firstImg = document.getElementById("firstimg");
const secImg = document.getElementById("secimg");
const thirdImg = document.getElementById("thirdimg");
const firstText = document.getElementById("first-text");
const firstSub = document.getElementById("first-text-p");
const secText = document.getElementById("sec-text");
const secSub = document.getElementById("sec-text-p");
const thirdText = document.getElementById("third-text");
const thirdSub = document.getElementById("third-text-p");

dateTime.textContent = new Date().toLocaleString();

sideMenu.style.left = "-17%";
circleGrow.style.transform = "scale(0)";

const toggleDarkMode = () => {
  const randomNum = () => Math.floor(Math.random() * 90) + "%";
  const isDarkMode = circleGrow.style.transform === "scale(0)";
  const color = isDarkMode ? "white" : "#121212";
  const textColor = isDarkMode ? "white" : "#121212";
  const backgroundColor = isDarkMode ? "black" : "white";
  const borderShadowColor = isDarkMode ? "0, 0, 0" : "255, 255, 255";
  const filter = isDarkMode ? "invert(100%)" : "invert(0%)";

  circleGrow.style.bottom = randomNum();

  circleGrow.style.right = randomNum();
  circleGrow.style.transform = isDarkMode ? "scale(4)" : "scale(0)";
  circleGrow.style.opacity = "1";
  darkMode.style.background = "white";
  textMain.style.color = color;
  sideMenu.style.color = "white";
  sideMenu.style.backgroundColor = backgroundColor;
  dateTime.style.color = color;
  sideButton.style.backgroundColor = "white";
  sideButton.style.color = "black";
  sideMenu.style.borderColor = `rgba(${borderShadowColor}, 0.9)`;
  firstImg.style.filter = filter;
  secImg.style.filter = filter;
  thirdImg.style.filter = filter;
  firstText.style.color = textColor;
  firstSub.style.color = textColor;
  secText.style.color = textColor;
  secSub.style.color = textColor;
  thirdText.style.color = textColor;
  thirdSub.style.color = textColor;

  navItems.forEach((item) => {
    item.style.color = color;
  });

  // Set explicit borderColor for light mode
  if (!isDarkMode) {
    sideMenu.style.borderColor = "rgba(0, 0, 0, 0.9)";
  }
};

const toggleSideMenu = () => {
  const isOpen = sideMenu.style.left === "-17%";
  sideButton.innerHTML = isOpen
    ? '<ion-icon name="close-circle-outline"></ion-icon>'
    : '<ion-icon name="open-outline"></ion-icon>';
  sideButton.textContent = isOpen ? "CLOSE" : "OPEN";
  sideMenu.style.left = isOpen ? "0%" : "-17%";
  menuNav.style.left = isOpen ? "0%" : "-26%";
};

darkMode.addEventListener("click", toggleDarkMode);
sideButton.addEventListener("click", toggleSideMenu);

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    speed: 2000,
    loop: true,
    mousewheel: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
  });
});
