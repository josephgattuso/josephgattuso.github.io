// Carousel

const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const img = document.querySelectorAll("#imgs img");

let idx = 0;

// 2000ms = 2secs
let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  // carousel animation
  imgs.style.transform = `translateX(${-idx * 420}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
  idx++;

  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;

  changeImage();
  resetInterval();
});

// Navbar

function toggleMenu() {
  const myBtn = document.getElementById("myTopnav");
  if (myBtn.className === "topnav") {
    myBtn.className += " responsive";
  } else {
    myBtn.className = "topnav";
  }
}
