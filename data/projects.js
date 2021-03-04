// Projects Data
const projects = [
  {
    name: '3D Boxes Background',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/3d-boxes-background/cover.webp',
    desc: 'Click the button to see a shrink effect on the 3D background boxes.',
    demo: 'https://josephgattuso.github.io/js-projects/3d-boxes-background',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/3d-boxes-background',
  },
  {
    name: 'Password Image Strength',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/password-image-strength/cover.webp',
    desc: 'Change the password to see the image blur effect.',
    demo: 'https://josephgattuso.github.io/js-projects/password-image-strength',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/password-image-strength',
  },
  {
    name: 'Light Dark Mode',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/light-dark-mode/cover.webp',
    desc: 'A website example that toggles between light and dark mode.',
    demo: 'https://josephgattuso.github.io/js-projects/light-dark-mode',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/light-dark-mode',
  },
  {
    name: 'Joke Teller',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/joke-teller/cover.webp',
    desc: 'An app that combines a Joke API with a speech-to-text API.',
    demo: 'https://josephgattuso.github.io/js-projects/joke-teller',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/joke-teller',
  },
  {
    name: 'Calculator',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/calculator/cover.webp',
    desc: 'Creating a simple calculator with plain JavaScript.',
    demo: 'https://josephgattuso.github.io/js-projects/calculator',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/calculator',
  },
  {
    name: 'Quotes Generator',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/quotes-generator/cover.webp',
    desc:
      'Using an API to build a random quote generator with Twitter integration.',
    demo: 'https://josephgattuso.github.io/js-projects/quotes-generator',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/quotes-generator',
  },
  {
    name: 'Pokedex',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/pokedex/cover.webp',
    desc:
      'Find info on Pokemon with this Pokedex app. Uses the Pokeapi.co API.',
    demo: 'https://josephgattuso.github.io/js-projects/pokedex',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/pokedex',
  },
  {
    name: 'Notes App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/notes-app/cover.webp',
    desc: 'Create, Read, Edit, and Delete notes',
    demo: 'https://josephgattuso.github.io/js-projects/notes-app',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/notes-app',
  },
  {
    name: 'Good Cheap Fast',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/good-cheap-fast/cover.webp',
    desc: 'Optimise your next project from a set of predifined criteria',
    demo: 'https://josephgattuso.github.io/js-projects/good-cheap-fast',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/good-cheap-fast',
  },
  {
    name: 'Password Generator',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/password-generator/cover.webp',
    desc: 'Generate a random password with specific user settings',
    demo: 'https://josephgattuso.github.io/js-projects/password-generator',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/password-generator',
  },
  {
    name: 'GitHub Profiles',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/github-profiles/cover.webp',
    desc:
      'Search for any GitHub profile and returns key information.  Uses the GitHub API.',
    demo: 'https://josephgattuso.github.io/js-projects/github-profiles',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/github-profiles',
  },
  {
    name: 'Double Vertical Slider',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/double-vertical-slider/cover.webp',
    desc: 'Image carousel with sliding double vertical panels',
    demo: 'https://josephgattuso.github.io/js-projects/double-vertical-slider',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/double-vertical-slider',
  },
  {
    name: 'Sticky Navigation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/sticky-navigation/cover.webp',
    desc: 'Website template with feature sticky navigation',
    demo: 'https://josephgattuso.github.io/js-projects/sticky-navigation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/sticky-navigation',
  },
  {
    name: 'Drawing App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drawing-app/cover.webp',
    desc: 'Drawing app using HTML canvas',
    demo: 'https://josephgattuso.github.io/js-projects/drawing-app',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drawing-app',
  },
  {
    name: 'Drag N Drop',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drag-n-drop/cover.webp',
    desc: 'Drag and drop component',
    demo: 'https://josephgattuso.github.io/js-projects/drag-n-drop',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drag-n-drop',
  },
  {
    name: 'Theme Clock',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/theme-clock/cover.webp',
    desc: 'Theme clock with feature dark mode toggle',
    demo: 'https://josephgattuso.github.io/js-projects/theme-clock',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/theme-clock',
  },
  {
    name: 'Background Slider',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/background-slider/cover.webp',
    desc: 'Background slider project',
    demo: 'https://josephgattuso.github.io/js-projects/background-slider',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/background-slider',
  },

  {
    name: 'Movie App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/movie-app/cover.webp',
    desc:
      'Search for movies and view movie info and ratings. Uses the moviedb API',
    demo: 'https://josephgattuso.github.io/js-projects/movie-app',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/movie-app',
  },
  {
    name: 'Drink Water',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drink-water/cover.webp',
    desc: 'Track your water intake with this handy water tracking app',
    demo: 'https://josephgattuso.github.io/js-projects/drink-water',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drink-water',
  },
  {
    name: 'Incrementing Counter',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/incrementing-counter/cover.webp',
    desc: 'Incrementing counter widget',
    demo: 'https://josephgattuso.github.io/js-projects/incrementing-counter',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/incrementing-counter',
  },
  {
    name: 'Random Choice Picker',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/random-choice-picker/cover.webp',
    desc:
      'Enter all of the choices divided by commas. Then press enter when you are done.',
    demo: 'https://josephgattuso.github.io/js-projects/random-choice-picker',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/random-choice-picker',
  },
  {
    name: 'FAQ Collapse',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/faq-collapse/cover.webp',
    desc: 'Frequently asked questions',
    demo: 'https://josephgattuso.github.io/js-projects/faq-collapse',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/faq-collapse',
  },
  {
    name: 'Event Keycodes',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/event-keycodes/cover.webp',
    desc: 'Press any key to get the keycode',
    demo: 'https://josephgattuso.github.io/js-projects/event-keycodes',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/event-keycodes',
  },

  {
    name: 'Sound Board',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/sound-board/cover.webp',
    desc: 'Handy sound effects board',
    demo: 'https://josephgattuso.github.io/js-projects/sound-board',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/sound-board',
  },
  {
    name: 'Split Landing',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/split-landing/cover.webp',
    desc: 'Website template with feature landing page',
    demo: 'https://josephgattuso.github.io/js-projects/split-landing',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/split-landing',
  },
  {
    name: 'Scroll Animation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/scroll-animation/cover.webp',
    desc: 'Web component with feature scrolling animation effect',
    demo: 'https://josephgattuso.github.io/js-projects/scroll-animation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/scroll-animation',
  },
  {
    name: 'Blurry Loading',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/blurry-loading/cover.webp',
    desc: 'Web component with feature blurry page loading effect',
    demo: 'https://josephgattuso.github.io/js-projects/blurry-loading',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/blurry-loading',
  },
  {
    name: 'Hidden Search',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/hidden-search/cover.webp',
    desc: 'Web component with feature hidden search widget',
    demo: 'https://josephgattuso.github.io/js-projects/hidden-search',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/hidden-search',
  },
  {
    name: 'Rotating Navigation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/rotating-navigation/cover.webp',
    desc: 'Web component with feature rotating navigation animation',
    demo: 'https://josephgattuso.github.io/js-projects/rotating-navigation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/rotating-navigation',
  },
];

export default projects;
