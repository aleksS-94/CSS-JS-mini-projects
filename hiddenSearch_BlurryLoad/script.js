////////////////////////////////////
///////////// Search widget   //////////////

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

////////////////////////////////////
///////////// Blurry loading   //////////////

const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30); // blur every 30ms

function blurring() {
  load++;

  // when it gets to 100 it stops
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  // mapping the load numbers to numbers of opacity so they load at the same time
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // when load goes from 0 to 100 opacity on text goes from 1 to 0
  // mapping the load numbers to numbers of blur(starting at max blur= 30px)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // when load goes from 0 to 100 blur on background goes from full at 30px to 0
}

// map a range of numbers to another range of numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
