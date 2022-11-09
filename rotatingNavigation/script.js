/////////////////////////////////////////////////
/////////////////// Rotate nav /////////////////////
/////////////////////////////////////////////////

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));

/////////////////////////////////////////////////
/////////////////// Scroll To Top Button /////////////////////
/////////////////////////////////////////////////

// Get the button:
let mybutton = document.getElementById("goUp");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/////////////////////////////////////////////////
/////////////////// Mobile Only Animation /////////////////////
/////////////////////////////////////////////////

const spans = document.querySelectorAll(".word span");

spans.forEach((span, idx) => {
  span.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  span.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

  // Initial animation
  setTimeout(() => {
    span.classList.add("active");
  }, 750 * (idx + 1));
});
