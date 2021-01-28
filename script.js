// Carousel

const sliderData = [
  {
    name: "CRWN Clothing",
    img:
      "https://github.com/josephgattuso/crwn-clothing/raw/master/src/assets/cover.png",
    description:
      "Full-stack React e-commerce application. Built with React/Redux and Stripe integration (for demo only)",
    url: "https://gattuso-crwn-live.herokuapp.com",
    repo: "https://github.com/josephgattuso/crwn-clothing",
  },
  {
    name: "Custom Countdown",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/custom-countdown/cover.png",
    description: "Saving a custom countdown in your browser.",
    url: "https://josephgattuso.github.io/js-projects/custom-countdown",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/custom-countdown",
  },
  {
    name: "Monsters Rolodex",
    img:
      "https://github.com/josephgattuso/monsters-rolodex/raw/master/src/images/cover.png",
    description: "Building a contact directory app using React.",
    url: "https://josephgattuso.github.io/monsters-rolodex",
    repo: "https://github.com/josephgattuso/monsters-rolodex",
  },
  {
    name: "Calculator",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/calculator/cover.png",
    description: "Creating a simple calculator with plain JavaScript.",
    url: "https://josephgattuso.github.io/js-projects/calculator",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/calculator",
  },
  {
    name: "Quotes Generator",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/quotes-generator/cover.png",
    description:
      "Using an API to build a random quote generator with Twitter integration.",
    url: "https://josephgattuso.github.io/js-projects/quotes-generator",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/quotes-generator",
  },
  {
    name: "Pokedex",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/pokedex/cover.png",
    description:
      "Find info on Pokemon with this Pokedex app. Uses the Pokeapi.co API.",
    url: "https://josephgattuso.github.io/js-projects/pokedex",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/pokedex",
  },
  {
    name: "Hoverboard",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/hoverboard/cover.png",
    description: "Hoverboard app with color-change effect on mouse hover",
    url: "https://josephgattuso.github.io/js-projects/hoverboard",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/hoverboard",
  },
  {
    name: "Image Carousel",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/image-carousel/cover.png",
    description: "Web component with classic image carousel",
    url: "https://josephgattuso.github.io/js-projects/image-carousel",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/image-carousel",
  },
  {
    name: "Animated Countdown",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/animated-countdown/cover.png",
    description: "Web compononet loader with feature animated countdown",
    url: "https://josephgattuso.github.io/js-projects/animated-countdown",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/animated-countdown",
  },
  {
    name: "Notes App",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/notes-app/cover.png",
    description: "Create, Read, Edit, and Delete notes",
    url: "https://josephgattuso.github.io/js-projects/notes-app",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/notes-app",
  },
  {
    name: "Good Cheap Fast",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/good-cheap-fast/cover.png",
    description: "Optimise your next project from a set of predifined criteria",
    url: "https://josephgattuso.github.io/js-projects/good-cheap-fast",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/good-cheap-fast",
  },
  {
    name: "Password Generator",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/password-generator/cover.png",
    description: "Generate a random password with specific user settings",
    url: "https://josephgattuso.github.io/js-projects/password-generator",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/password-generator",
  },
  {
    name: "Auto Text Effect",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/auto-text-effect/cover.png",
    description:
      "Web component with feature typing effect. Control speed using input field or keyboard arrows.",
    url: "https://josephgattuso.github.io/js-projects/auto-text-effect",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/auto-text-effect",
  },
  {
    name: "Hearts Click",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/double-heart-click/cover.png",
    description: "Generate hearts at double-click events",
    url: "https://josephgattuso.github.io/js-projects/double-heart-click",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/double-heart-click",
  },
  {
    name: "Search Profiles",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/github-profiles/cover.png",
    description:
      "Search for any GitHub profile and returns key information.  Uses the GitHub API.",
    url: "https://josephgattuso.github.io/js-projects/github-profiles",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/github-profiles",
  },
  {
    name: "Toast Notifications",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/toast-notifications/cover.png",
    description: "Generate toast notifications",
    url: "https://josephgattuso.github.io/js-projects/toast-notifications",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/toast-notifications",
  },
  {
    name: "Vertical Slider",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/double-vertical-slider/cover.png",
    description: "Image carousel with sliding double vertical panels",
    url: "https://josephgattuso.github.io/js-projects/double-vertical-slider",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/double-vertical-slider",
  },
  {
    name: "Sticky Navigation",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/sticky-navigation/cover.png",
    description: "Website template with feature sticky navigation",
    url: "https://josephgattuso.github.io/js-projects/sticky-navigation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/sticky-navigation",
  },
  {
    name: "Content Placeholder",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/content-placeholder/cover.png",
    description: "Content placeholder component",
    url: "https://josephgattuso.github.io/js-projects/content-placeholder",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/content-placeholder",
  },
  {
    name: "Kinetic Loader",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/kinetic-loader/cover.png",
    description: "Kinetic page loading component",
    url: "https://josephgattuso.github.io/js-projects/kinetic-loader",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/kinetic-loader",
  },
  {
    name: "Drawing App",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/drawing-app/cover.png",
    description: "Drawing app using HTML canvas",
    url: "https://josephgattuso.github.io/js-projects/drawing-app",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/drawing-app",
  },
  {
    name: "Drag 'N' Drop",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/drag-n-drop/cover.png",
    description: "Drag and drop component",
    url: "https://josephgattuso.github.io/js-projects/drag-n-drop",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/drag-n-drop",
  },
  {
    name: "Button Ripple",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/button-ripple/cover.png",
    description: "Button ripple effect",
    url: "https://josephgattuso.github.io/js-projects/button-ripple",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/button-ripple",
  },
  {
    name: "Theme Clock",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/theme-clock/cover.png",
    description: "Theme clock with feature dark mode toggle",
    url: "https://josephgattuso.github.io/js-projects/theme-clock",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/theme-clock",
  },
  {
    name: "Background Slider",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/background-slider/cover.png",
    description: "Background slider project",
    url: "https://josephgattuso.github.io/js-projects/background-slider",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/background-slider",
  },

  {
    name: "Movie App",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/movie-app/cover.png",
    description:
      "Search for movies and view movie info and ratings. Uses the moviedb API",
    url: "https://josephgattuso.github.io/js-projects/movie-app",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/movie-app",
  },
  {
    name: "Drink Water",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/drink-water/cover.png",
    description: "Track your water intake with this handy water tracking app",
    url: "https://josephgattuso.github.io/js-projects/drink-water",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/drink-water",
  },
  {
    name: "Incrementing Counter",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/incrementing-counter/cover.png",
    description: "Incrementing counter widget",
    url: "https://josephgattuso.github.io/js-projects/incrementing-counter",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/incrementing-counter",
  },
  {
    name: "Animated Navigation",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/animated-navigation/cover.png",
    description: "Website template with feature animated expanding navigation",
    url: "https://josephgattuso.github.io/js-projects/animated-navigation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/animated-navigation",
  },
  {
    name: "Random Picker",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/random-choice-picker/cover.png",
    description:
      "Enter all of the choices divided by commas. Then press enter when you are done.",
    url: "https://josephgattuso.github.io/js-projects/random-choice-picker",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/random-choice-picker",
  },
  {
    name: "FAQ Collapse",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/faq-collapse/cover.png",
    description: "Frequently asked questions",
    url: "https://josephgattuso.github.io/js-projects/faq-collapse",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/faq-collapse",
  },
  {
    name: "Event Keycodes",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/event-keycodes/cover.png",
    description: "Press any key to get the keycode",
    url: "https://josephgattuso.github.io/js-projects/event-keycodes",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/event-keycodes",
  },

  {
    name: "Sound Board",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/sound-board/cover.png",
    description: "Handy sound effects board",
    url: "https://josephgattuso.github.io/js-projects/sound-board",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/sound-board",
  },
  {
    name: "Form Wave",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/form-wave/cover.png",
    description: "Login form with feature animated input text",
    url: "https://josephgattuso.github.io/js-projects/form-wave",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/form-wave",
  },
  {
    name: "Split Landing",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/split-landing/cover.png",
    description: "Website template with feature landing page",
    url: "https://josephgattuso.github.io/js-projects/split-landing",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/split-landing",
  },
  {
    name: "Scroll Animation",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/scroll-animation/cover.png",
    description: "Web component with feature scrolling animation effect",
    url: "https://josephgattuso.github.io/js-projects/scroll-animation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/scroll-animation",
  },
  {
    name: "Blurry Loading",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/blurry-loading/cover.png",
    description: "Web component with feature blurry page loading effect",
    url: "https://josephgattuso.github.io/js-projects/blurry-loading",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/blurry-loading",
  },
  {
    name: "Search Widget",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/hidden-search/cover.png",
    description: "Web component with feature hidden search widget",
    url: "https://josephgattuso.github.io/js-projects/hidden-search",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/hidden-search",
  },
  {
    name: "Rotating Navigation",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/rotating-navigation/cover.png",
    description: "Web component with feature rotating navigation animation",
    url: "https://josephgattuso.github.io/js-projects/rotating-navigation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/rotating-navigation",
  },
  {
    name: "Progress Steps",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/progress-steps/cover.png",
    description: "Web component timeline with feature progress steps",
    url: "https://josephgattuso.github.io/js-projects/progress-steps",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/progress-steps",
  },
  {
    name: "Expanding Cards",
    img:
      "https://github.com/josephgattuso/js-projects/raw/master/expanding-cards/cover.png",
    description: "Web component with feature expanding cards",
    url: "https://josephgattuso.github.io/js-projects/expanding-cards",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/expanding-cards",
  },
];

for (let i = 0; i < sliderData.length; i++) {
  const slider = document.querySelector(".slider");
  const { img, name, description, url, repo } = sliderData[i];
  const slideData = `
    <figure class="slide ${i == 0 ? "visible" : ""}">
      <a href=${url} target="_blank" rel="noopener noreferrer">
        <img class="img" src="${img}" title=${name} alt="${name}" />
      </a>  
        <figcaption>
          <h3>${name}</h3>
          <p>
            ${description}
          </p>
          <div>
          <a href=${repo} target="_blank" rel="noopener noreferrer">View Source</a>
          <a href=${url} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
        </figcaption>
    </figure>
  `;
  slider.innerHTML += slideData;
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(() => {
  slides[currentSlide].classList.remove("visible");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("visible");
}, 5000);
