// Projects Section

const projects = [
  {
    name: '3D Boxes Background',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/3d-boxes-background/cover.webp',
    description:
      'Click the button to see a shrink effect on the 3D background boxes.',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/3d-boxes-background',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/3d-boxes-background',
  },
  {
    name: 'Password Image Strength',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/password-image-strength/cover.webp',
    description: 'Change the password to see the image blur effect.',
    tryItUrl:
      'https://josephgattuso.github.io/js-projects/password-image-strength',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/password-image-strength',
  },
  {
    name: 'Light Dark Mode',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/light-dark-mode/cover.webp',
    description: 'A website example that toggles between light and dark mode.',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/light-dark-mode',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/light-dark-mode',
  },
  {
    name: 'Joke Teller',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/joke-teller/cover.webp',
    description: 'An app that combines a Joke API with a speech-to-text API.',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/joke-teller',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/joke-teller',
  },
  {
    name: 'Calculator',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/calculator/cover.webp',
    description: 'Creating a simple calculator with plain JavaScript.',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/calculator',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/calculator',
  },
  {
    name: 'Quotes Generator',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/quotes-generator/cover.webp',
    description:
      'Using an API to build a random quote generator with Twitter integration.',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/quotes-generator',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/quotes-generator',
  },
  {
    name: 'Pokedex',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/pokedex/cover.webp',
    description:
      'Find info on Pokemon with this Pokedex app. Uses the Pokeapi.co API.',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/pokedex',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/pokedex',
  },
  {
    name: 'Notes App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/notes-app/cover.webp',
    description: 'Create, Read, Edit, and Delete notes',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/notes-app',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/notes-app',
  },
  {
    name: 'Good Cheap Fast',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/good-cheap-fast/cover.webp',
    description: 'Optimise your next project from a set of predifined criteria',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/good-cheap-fast',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/good-cheap-fast',
  },
  {
    name: 'Password Generator',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/password-generator/cover.webp',
    description: 'Generate a random password with specific user settings',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/password-generator',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/password-generator',
  },
  {
    name: 'GitHub Profiles',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/github-profiles/cover.webp',
    description:
      'Search for any GitHub profile and returns key information.  Uses the GitHub API.',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/github-profiles',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/github-profiles',
  },
  {
    name: 'Double Vertical Slider',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/double-vertical-slider/cover.webp',
    description: 'Image carousel with sliding double vertical panels',
    tryItUrl:
      'https://josephgattuso.github.io/js-projects/double-vertical-slider',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/double-vertical-slider',
  },
  {
    name: 'Sticky Navigation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/sticky-navigation/cover.webp',
    description: 'Website template with feature sticky navigation',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/sticky-navigation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/sticky-navigation',
  },
  {
    name: 'Drawing App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drawing-app/cover.webp',
    description: 'Drawing app using HTML canvas',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/drawing-app',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drawing-app',
  },
  {
    name: 'Drag N Drop',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drag-n-drop/cover.webp',
    description: 'Drag and drop component',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/drag-n-drop',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drag-n-drop',
  },
  {
    name: 'Theme Clock',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/theme-clock/cover.webp',
    description: 'Theme clock with feature dark mode toggle',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/theme-clock',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/theme-clock',
  },
  {
    name: 'Background Slider',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/background-slider/cover.webp',
    description: 'Background slider project',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/background-slider',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/background-slider',
  },

  {
    name: 'Movie App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/movie-app/cover.webp',
    description:
      'Search for movies and view movie info and ratings. Uses the moviedb API',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/movie-app',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/movie-app',
  },
  {
    name: 'Drink Water',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drink-water/cover.webp',
    description: 'Track your water intake with this handy water tracking app',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/drink-water',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drink-water',
  },
  {
    name: 'Incrementing Counter',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/incrementing-counter/cover.webp',
    description: 'Incrementing counter widget',
    tryItUrl:
      'https://josephgattuso.github.io/js-projects/incrementing-counter',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/incrementing-counter',
  },
  {
    name: 'Random Choice Picker',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/random-choice-picker/cover.webp',
    description:
      'Enter all of the choices divided by commas. Then press enter when you are done.',
    tryItUrl:
      'https://josephgattuso.github.io/js-projects/random-choice-picker',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/random-choice-picker',
  },
  {
    name: 'FAQ Collapse',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/faq-collapse/cover.webp',
    description: 'Frequently asked questions',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/faq-collapse',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/faq-collapse',
  },
  {
    name: 'Event Keycodes',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/event-keycodes/cover.webp',
    description: 'Press any key to get the keycode',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/event-keycodes',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/event-keycodes',
  },

  {
    name: 'Sound Board',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/sound-board/cover.webp',
    description: 'Handy sound effects board',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/sound-board',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/sound-board',
  },
  {
    name: 'Split Landing',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/split-landing/cover.webp',
    description: 'Website template with feature landing page',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/split-landing',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/split-landing',
  },
  {
    name: 'Scroll Animation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/scroll-animation/cover.webp',
    description: 'Web component with feature scrolling animation effect',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/scroll-animation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/scroll-animation',
  },
  {
    name: 'Blurry Loading',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/blurry-loading/cover.webp',
    description: 'Web component with feature blurry page loading effect',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/blurry-loading',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/blurry-loading',
  },
  {
    name: 'Hidden Search',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/hidden-search/cover.webp',
    description: 'Web component with feature hidden search widget',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/hidden-search',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/hidden-search',
  },
  {
    name: 'Rotating Navigation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/rotating-navigation/cover.webp',
    description: 'Web component with feature rotating navigation animation',
    tryItUrl: 'https://josephgattuso.github.io/js-projects/rotating-navigation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/rotating-navigation',
  },
];

for (let i = 0; i < projects.length; i++) {
  const slider = document.querySelector('.slider');
  const { name, description, tryItUrl, repo } = projects[i];
  const projectData = `
    <figure class="slide ${i == 0 ? 'show' : ''}">
    <a href="${tryItUrl}" target="_blank" rel="noopener noreferrer">
      <picture>
        <source
          type="image/webp"
          srcset="
            https://github.com/josephgattuso/js-projects/raw/master/${name
              .replace(/\s+/g, '-')
              .toLowerCase()}/cover.webp
          "
        />
        <source
          type="image/webp"
          srcset="
          https://github.com/josephgattuso/js-projects/raw/master/${name
            .replace(/\s+/g, '-')
            .toLowerCase()}/cover.webp
        "
        />
        <img
          class="img"
          src="https://github.com/josephgattuso/js-projects/raw/master/${name
            .replace(/\s+/g, '-')
            .toLowerCase()}/cover.webp"
          title="${name.replace(/\s+/g, '&nbsp;')}"
          alt="${name.replace(/\s+/g, '&nbsp;')}"
          width="720"
          height="320"
          />
      </picture>
      </a>
    <figcaption>
      <h3>${name}</h3>
      <p>${description}</p>
      <a href="${repo}" target="_blank" rel="noopener noreferrer">
        View Source
      </a>
      <a href="${tryItUrl}" target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
    </figcaption>
  </figure>
  `;
  slider.innerHTML += projectData;
}

//select all slides
const slides = document.querySelectorAll('.slide');

//set slide count
let currentSlide = 0;

const slideInterval = setInterval(() => {
  slides[currentSlide].classList.remove('show');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('show');
}, 5000);

//increment slide index
const nextSlide = () => {
  changeSlide(currentSlide + 1);
};

//decrement slide index
const prevSlide = () => {
  changeSlide(currentSlide - 1);
};

//select arrow controls
const next = document.querySelector('.next-btn');
const prev = document.querySelector('.prev-btn');

//click event that passes to changeSlide function
next.addEventListener('click', nextSlide, false);
prev.addEventListener('click', prevSlide, false);

const changeSlide = clicked => {
  //selects class for current slide
  slides[currentSlide].className = 'slide';

  //checks remainder of link to select current slides
  currentSlide = (clicked + slides.length) % slides.length;

  //adds css class to show current slide
  slides[currentSlide].className = 'slide show';
};
