const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector(".arrow.left-arrow");

nextBtn.onclick = function () {
  moveNavNext();
  moveSlideNext();
  changeBackground();
};

prevBtn.onclick = function () {
  moveNavBack();
  moveSlideBack();
  changeBackground();
};

changeBackground();

// DRY - Don't Repeat Yourself

function moveNavNext() {
  const activeNav = document.querySelector(".nav-item.active");
  activeNav.classList.remove("active");
  let nextNav = activeNav.nextElementSibling;
  if (nextNav === null) {
    nextNav = activeNav.parentElement.firstElementChild;
  }
  nextNav.classList.add("active");
}

function moveNavBack() {
  const activeNav = document.querySelector(".nav-item.active");
  activeNav.className = "nav-item";
  let prevNav = activeNav.previousElementSibling;

  if (prevNav === null) {
    prevNav = activeNav.parentElement.lastElementChild;
  }

  prevNav.className = "nav-item active";
}

function moveSlideNext() {
  const activeSlide = document.querySelector(".slide.active");
  activeSlide.classList.remove("active");
  let nextSlide = activeSlide.nextElementSibling;

  if (nextSlide === null) {
    nextSlide = activeSlide.parentElement.firstElementChild;
  }
  nextSlide.classList.add("active");
}

function moveSlideBack() {
  const activeSlide = document.querySelector(".slide.active");
  activeSlide.className = "slide";
  let prevSlide = activeSlide.previousElementSibling;
  if(prevSlide === null){
    prevSlide = activeSlide.parentElement.lastElementChild;
  }
  prevSlide.className = "slide active";
}

function changeBackground() {
  const activeSlide = document.querySelector(".slide.active");
  document.body.style.backgroundImage = activeSlide.style.backgroundImage;
}


// <div class="arrow right-arrow" id="next-btn">&#8250;</div>
// function createNextBtn(){
//     const btn = document.createElement("div"); // <div></div>
//     // btn.className = "arrow right-arrow"; // 1 case
//     btn.classList.add("arrow", "right-arrow"); // 2 case
//     btn.id = "next-btn";
//     btn.innerHTML = "&#8250;";
//     return btn;
// }

// <div class="arrow left-arrow">&#8249;</div>
// function createPrevBtn(){
//     const btn = document.createElement("div");
//     btn.classList.add("arrow", "left-arrow");
//     btn.innerHTML = "&#8249;"
//     return btn;
// }

// const buttonsContainer = document.querySelector(".buttons")

// buttonsContainer.append( createNextBtn() );
// buttonsContainer.append( createPrevBtn() );

// const circle = document.createElement("div");
// circle.style.backgroundColor  = "red";
// circle.style.width  = "15px";
// circle.style.height = "15px";
// circle.style.borderRadius = "50%";

// const thirdNav = document.querySelector(".nav").children[2];
// thirdNav.insertAdjacentElement("afterend", circle);
