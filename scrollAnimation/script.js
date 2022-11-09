/////////////////////////////////////////////////////////////
////////////////// BOXES ///////////////////////
/////////////////////////////////////////////////////////////

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes); //'checkBoxes' function checks which side each box is at

checkBoxes();

function checkBoxes() {
  //find trigger ponit first, where in a window you want them to come in when start scrolling
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // to see where the top of particular box is
    const boxTop = box.getBoundingClientRect().top;

    // see if top of the box is less than trigger bottom, if it is add class 'show', if its more -remove

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
