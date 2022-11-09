////////////////////////////////////////////////////////////////////////
///////////////     Desktop Menu       //////////////////////////
////////////////////////////////////////////////////////////////////////

var btn = document.querySelector(".toggle");
var btnst = true;

btn.onclick = function () {
  if (btnst == true) {
    document.querySelector(".toggle span").classList.add("toggle");
    document.getElementById("sidebar").classList.add("sidebarshow");
    document.getElementById("container").classList.add("containershow");
    btnst = false;
  } else if (btnst == false) {
    document.querySelector(".toggle span").classList.remove("toggle");
    document.getElementById("sidebar").classList.remove("sidebarshow");
    document.getElementById("container").classList.remove("containershow");
    btnst = true;
  }
};

////////////////////////////////////////////////////////////////////////
///////////////     Mobile Menu        //////////////////////////
////////////////////////////////////////////////////////////////////////

document
  .querySelector("#navbar")
  .addEventListener("click", ({ currentTarget }) => {
    currentTarget.classList.toggle("opened");
    currentTarget.classList.toggle("closed");
    const menuItems = currentTarget.querySelectorAll(".menu-item");
    menuItems.forEach((element) => {
      if (!element.classList.contains("main")) {
        element.classList.toggle("hidden");
      }
    });
  });

////////////////////////////////////////////////////////////////////////
///////////////     Progress bars     //////////////////////////
////////////////////////////////////////////////////////////////////////

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle"); // there are many circles so I used class instead and queryselectorAll//

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
