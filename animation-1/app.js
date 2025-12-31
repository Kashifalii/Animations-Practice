let left = document.querySelector(".left");
let right = document.querySelector(".right");
let circle = document.querySelector(".circle");

window.addEventListener("load", () => {
  left.style.width = "30%";
  right.style.width = "60%";

  // circle
  circle.style.transform = "scale(1)";

  setInterval(() => {
    left.style.borderBottomRightRadius = "400px";
    left.style.borderTopRightRadius = "400px";
    right.style.borderBottomLeftRadius = "400px";
    right.style.borderTopLeftRadius = "400px";
    left.style.opacity = 1;
    right.style.opacity = 1;
    circle.style.opacity = 1;
    right.style.outline = "5px solid #2B2F2E";
    left.style.outline = "5px solid #2B2F2E";
  }, 500);
});
