import projects from './data/projects.js';
import articles from './data/articles.js';

// Add Project Cards

let projectData = [...projects];
const projectsContainer = document.getElementById('projects-container');

function addProjects() {
  projectsContainer.innerHTML = projectData
    .map(project => {
      const { name, img, desc, repo, demo } = project;
      return `
      <div class="card">
        <a href=${project.demo} target="_blank" rel="noopener noreferrer nofollow">
          <img class="card-img" src=${project.img} alt=${project.name} />
        </a>
        <div class="card-content">
          <h3 class="card-title">${project.name}</h3>
          <p class="card-description">${project.desc}</p>
          <a class="card-link" href=${project.demo} target="_blank" rel="noopener noreferrer nofollow">
            try it out</a>
          <a class="card-link" href=${project.repo} target="_blank" rel="noopener noreferrer nofollow">
            <i class="fab fa-github"></i>          
          </a>
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
          <a class="card-link" href=${article.link} target="_blank" rel="noopener noreferrer nofollow">
            Read More
            <i class="fas fa-external-link-alt"></i>
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

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const aboutImg = document.getElementById('about-img');

function imageMode(color) {
  aboutImg.src = `images/about_${color}.webp`;
}

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
  // 3. Update About section image
  imageMode('dark');
};

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', null);
  // 3. Update About section image
  imageMode('light');
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode');

  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
    // if it has been enabled, turn it off
  } else {
    disableDarkMode();
  }
});

// Image Carousel

// for (let i = 0; i < projects.length; i++) {
//   const slider = document.querySelector('.slider');
//   const { name, Desc, demo, repo } = projects[i];
//   const projectData = `
//     <figure class="slide ${i == 0 ? 'show' : ''}">
//       <a href="${demo}" target="_blank" rel="noopener noreferrer">
//         <img
//           class="slide-img"
//           src="https://github.com/josephgattuso/js-projects/raw/master/${name
//             .replace(/\s+/g, '-')
//             .toLowerCase()}/cover.webp"
//           title="${name.replace(/\s+/g, '&nbsp;')}"
//           alt="${name.replace(/\s+/g, '&nbsp;')}"
//           width="720"
//           height="320"
//           />
//       </a>
//       <figcaption>
//         <h3>${name}</h3>
//         <p>${Desc}</p>
//         <a href="${repo}" target="_blank" rel="noopener noreferrer">
//           View Source
//         </a>
//         <a href="${demo}" target="_blank" rel="noopener noreferrer">
//           Live Demo
//         </a>
//       </figcaption>
//     </figure>
//   `;
//   slider.innerHTML += projectData;
// }

// //select all slides
// const slides = document.querySelectorAll('.slide');

// //set slide count
// let currentSlide = 0;

// const slideInterval = setInterval(() => {
//   slides[currentSlide].classList.remove('show');
//   currentSlide = (currentSlide + 1) % slides.length;
//   slides[currentSlide].classList.add('show');
// }, 5000);

// //increment slide index
// const nextSlide = () => {
//   changeSlide(currentSlide + 1);
// };

// //decrement slide index
// const prevSlide = () => {
//   changeSlide(currentSlide - 1);
// };

// //select arrow controls
// const next = document.querySelector('.next-btn');
// const prev = document.querySelector('.prev-btn');

// //click event that passes to changeSlide function
// next.addEventListener('click', nextSlide, false);
// prev.addEventListener('click', prevSlide, false);

// const changeSlide = clicked => {
//   //selects class for current slide
//   slides[currentSlide].className = 'slide';

//   //checks remainder of link to select current slides
//   currentSlide = (clicked + slides.length) % slides.length;

//   //adds css class to show current slide
//   slides[currentSlide].className = 'slide show';
// };s
