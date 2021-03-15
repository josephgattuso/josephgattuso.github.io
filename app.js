import projects from './data/projects.js';
import articles from './data/articles.js';

// Add Project Cards

let projectData = [...projects];
const projectsContainer = document.querySelector('#projects-container');

function addProjects() {
  projectsContainer.innerHTML = projectData
    .map(project => {
      const { name, img, desc, repo, demo } = project;
      return `
      <div class="slide">
        <h3>${project.name}</h3>
        <p>${project.desc}</p>
        <img src="${project.img}" alt="${project.name}" />
        <div class="btn-container">
          <a
              class="card-link"
              href="${project.repo}"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Repo
              <i class="fab fa-github"></i>
            </a>
            <a
              class="card-link"
              href="${project.demo}"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Demo
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
      `;
    })
    .join('');
}

addProjects();

// Add Article Cards

let articlesData = [...articles];
const articlesContainer = document.getElementById('articles-container');

function addArticles() {
  articlesContainer.innerHTML = articlesData
    .map(article => {
      const { name, img, desc, link } = article;
      return `
      <div class="card">
        <a href=${article.link} target="_blank" rel="noopener noreferrer nofollow">
          <img class="card-img" src=${article.img} alt=${article.name} />
        </a>
        <div class="card-content">
          <h3 class="card-title">${article.name}</h3>
          <p class="card-description">${article.desc}</p>
          <a class="card-link external" href=${article.link} target="_blank" rel="noopener noreferrer nofollow">
            <span>
              Read More
              <i class="fas fa-external-link-alt"></i>
            </span>
          </a>
        </div>
      </div>
    `;
    })
    .join('');
}

addArticles();

// Animated Nav

const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation

function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate In - Overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate In - Nav Items
    navAnimation('out', 'in');
  } else {
    // Animate Out - Overlauy
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate Out - Nav Items
    navAnimation('in', 'out');
  }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => {
  nav.addEventListener('click', toggleNav);
});

// Theme Toggle

// Select the theme toggle
const toggleTheme = document.querySelector('#toggleTheme');
// Cehck for dark scheme preference at the userOS level
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
// Get the user theme preference from local storage
const currentTheme = localStorage.getItem('theme');

// If the user preference is dark...
if (currentTheme == 'dark') {
  // Toggle dark theme
  document.body.classList.toggle('dark-theme');
  // If the user preference is light...
} else if (currentTheme == 'light') {
  // Toggle light theme
  document.body.classList.toggle('light-theme');
}

// Listen for a click on the theme button
toggleTheme.addEventListener('click', function () {
  // If the user setting is dark and matches the theme class...
  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    document.body.classList.toggle('light-theme');
    // ...but use dark class if the light class is already on the body
    var theme = document.body.classList.contains('light-theme')
      ? 'light'
      : 'dark';
  } else {
    // Do the same thing but for dark theme...
    document.body.classList.toggle('dark-theme');
    var theme = document.body.classList.contains('dark-theme')
      ? 'dark'
      : 'light';
  }
  // Save the current preference to localStorage to keep using it
  localStorage.setItem('theme', theme);
});

// Set Current Year

const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

// Project Carousel

const slider = document.querySelector('.slider-container');
const slides = Array.from(document.querySelectorAll('.slide'));

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img');
  slideImage.addEventListener('dragstart', e => e.preventDefault());

  // Touch events
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index));
  slide.addEventListener('mouseup', touchEnd);
  slide.addEventListener('mouseleave', touchEnd);
  slide.addEventListener('mousemove', touchMove);
});

// Disable context menu
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    currentIndex = index;
    startPos = getPositionX(event);
    isDragging = true;
    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
  };
}

function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
  setPositionByIndex();
  slider.classList.remove('grabbing');
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}
