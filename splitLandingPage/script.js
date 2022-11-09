const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container"); // to remove or add classes to it

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);

// when left side is hovered on, we add a class of 'hover-left' to the container

left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);

right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
