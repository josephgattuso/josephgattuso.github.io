import data from "./data.js";

// Navbar

function toggleMenu() {
  const myBtn = document.getElementById("myTopnav");
  if (myBtn.className === "topnav") {
    myBtn.className += " responsive";
  } else {
    myBtn.className = "topnav";
  }
}

// Carousel

const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// if length is 2, add copies of slides
let projects = [...data];
if (data.length === 2) {
  projects = [...data, ...data];
}
container.innerHTML = projects
  .map((project, slideIndex) => {
    const { img, name, description, url, repo } = project;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === projects.length - 1) {
      position = "last";
    }
    if (data.length <= 1) {
      position = "active";
    }
    return `
    <article class="slide ${position}">
      <a href=${url} target="_blank' rel="noopener noreferrer">
        <img src=${img} class="img" title=${name} alt="${name}"/>
      </a>
      <h4>${name}</h4>
      <p class="description">
      ${description}
      </p>
      <a href=${repo} target="_blank' rel="noopener noreferrer">View Source</a>
      <a href=${url} target="_blank' rel="noopener noreferrer">Live Demo</a>
    </article>
    `;
  })
  .join("");

const startSlider = type => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);

  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};
nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
