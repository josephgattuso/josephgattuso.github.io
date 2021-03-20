// Projects Data
const projects = [
  {
    name: 'Dev Profiles',
    img:
      'https://raw.githubusercontent.com/josephgattuso/dev-profiles/main/static/og.webp',
    desc:
      'Search for any GitHub profile and return key information using the GitHub API. Built with Next.js and Styled Components',
    demo: 'https://profiles.gattuso.dev',
    repo: 'https://github.com/josephgattuso/dev-profiles',
  },
  {
    name: 'Calculator',
    img:
      'https://github.com/josephgattuso/js-projects-v2/raw/master/calculator/cover.webp',
    desc: 'Creating a basic calculator with JavaScript.',
    demo: 'https://gattuso.dev/js-projects-v2/calculator',
    repo:
      'https://github.com/josephgattuso/js-projects-v2/tree/master/calculator',
  },
  {
    name: 'Joke Teller',
    img:
      'https://github.com/josephgattuso/js-projects-v2/raw/master/joke-teller/cover.webp',
    desc: 'An app that combines a Joke API with a speech-to-text API.',
    demo: 'https://gattuso.dev/js-projects-v2/joke-teller',
    repo:
      'https://github.com/josephgattuso/js-projects-v2/tree/master/joke-teller',
  },
  {
    name: 'Quotes Generator',
    img:
      'https://github.com/josephgattuso/js-projects-v2/raw/master/quote-generator/cover.webp',
    desc:
      'Using an API to build a random quote generator with Twitter integration.',
    demo: 'https://gattuso.dev/js-projects-v2/quote-generator',
    repo:
      'https://github.com/josephgattuso/js-projects-v2/tree/master/quote-generator',
  },
  {
    name: 'Notes App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/notes-app/cover.webp',
    desc: 'Create, Read, Edit, and Delete notes',
    demo: 'https://gattuso.dev/js-projects/notes-app',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/notes-app',
  },
  {
    name: 'Password Generator',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/password-generator/cover.webp',
    desc: 'Generate a random password with specific user settings',
    demo: 'https://gattuso.dev/js-projects/password-generator',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/password-generator',
  },
  {
    name: 'Drink Water',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drink-water/cover.webp',
    desc: 'Track your water intake with this handy water tracking app',
    demo: 'https://gattuso.dev/js-projects/drink-water',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drink-water',
  },
  {
    name: 'Paint Clone',
    img:
      'https://github.com/josephgattuso/js-projects-v2/raw/master/paint-clone/cover.webp',
    desc: 'Recreating a paint app with HTML canvas',
    demo: 'https://gattuso.dev/js-projects-v2/paint-clone',
    repo:
      'https://github.com/josephgattuso/js-projects-v2/tree/master/paint-clone',
  },
  {
    name: 'Movie App',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/movie-app/cover.webp',
    desc:
      'Search for movies and view movie info and ratings. Uses the moviedb API',
    demo: 'https://gattuso.dev/js-projects/movie-app',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/movie-app',
  },
  {
    name: 'Random Choice Picker',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/random-choice-picker/cover.webp',
    desc:
      'Enter all of the choices divided by commas. Then press enter when you are done.',
    demo: 'https://gattuso.dev/js-projects/random-choice-picker',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/random-choice-picker',
  },
  {
    name: 'Theme Clock',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/theme-clock/cover.webp',
    desc: 'Theme clock with feature dark mode toggle',
    demo: 'https://gattuso.dev/js-projects/theme-clock',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/theme-clock',
  },
  {
    name: 'Sound Board',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/sound-board/cover.webp',
    desc: 'Handy sound effects board',
    demo: 'https://gattuso.dev/js-projects/sound-board',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/sound-board',
  },
  {
    name: 'Drag N Drop',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/drag-n-drop/cover.webp',
    desc: 'Drag and drop component',
    demo: 'https://gattuso.dev/js-projects/drag-n-drop',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/drag-n-drop',
  },
  {
    name: 'Pokedex',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/pokedex/cover.webp',
    desc:
      'Find info on Pokemon with this Pokedex app. Uses the Pokeapi.co API.',
    demo: 'https://gattuso.dev/js-projects/pokedex',
    repo: 'https://github.com/josephgattuso/js-projects/tree/master/pokedex',
  },
  {
    name: '3D Boxes Background',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/3d-boxes-background/cover.webp',
    desc: 'Click the button to see a shrink effect on the 3D background boxes.',
    demo: 'https://gattuso.dev/js-projects/3d-boxes-background',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/3d-boxes-background',
  },
  {
    name: 'Event Keycodes',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/event-keycodes/cover.webp',
    desc: 'Press any key to get the keycode',
    demo: 'https://gattuso.dev/js-projects/event-keycodes',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/event-keycodes',
  },
  {
    name: 'Double Vertical Slider',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/double-vertical-slider/cover.webp',
    desc: 'Image carousel with sliding double vertical panels',
    demo: 'https://gattuso.dev/js-projects/double-vertical-slider',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/double-vertical-slider',
  },
  {
    name: 'Background Slider',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/background-slider/cover.webp',
    desc: 'Background slider project',
    demo: 'https://gattuso.dev/js-projects/background-slider',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/background-slider',
  },
  {
    name: 'Split Landing',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/split-landing/cover.webp',
    desc: 'Website template with feature landing page',
    demo: 'https://gattuso.dev/js-projects/split-landing',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/split-landing',
  },
  {
    name: 'Rotating Navigation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/rotating-navigation/cover.webp',
    desc: 'Web component with feature rotating navigation animation',
    demo: 'https://gattuso.dev/js-projects/rotating-navigation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/rotating-navigation',
  },
  {
    name: 'Sticky Navigation',
    img:
      'https://github.com/josephgattuso/js-projects/raw/master/sticky-navigation/cover.webp',
    desc: 'Website template with feature sticky navigation',
    demo: 'https://gattuso.dev/js-projects/sticky-navigation',
    repo:
      'https://github.com/josephgattuso/js-projects/tree/master/sticky-navigation',
  },
];

export default projects;
