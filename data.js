const projects = [
  {
    title: "Project 01",
    name: "CRWN Clothing",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description:
      "Full-stack React e-commerce application. Built with React/Redux and Stripe integration (for demo only)",
    url: "https://gattuso-crwn-live.herokuapp.com",
    repo: "https://github.com/josephgattuso/crwn-clothing",
  },
  {
    title: "Project 02",
    name: "Monsters Rolodex",
    img:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Building a contact directory app using React.",
    url: "https://josephgattuso.github.io/monsters-rolodex",
    repo: "https://github.com/josephgattuso/monsters-rolodex",
  },
  {
    title: "Project 03",
    name: "Calculator",
    img:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Creating a simple calculator with plain JavaScript.",
    url: "https://josephgattuso.github.io/js-projects/calculator",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/calculator",
  },
  {
    title: "Project 04",
    name: "Quotes Generator",
    img:
      "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description:
      "Using an API to build a random quote generator with Twitter integration.",
    url: "https://josephgattuso.github.io/js-projects/quotes-generator",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/quotes-generator",
  },
  {
    title: "Project 05",
    name: "Pokedex",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description:
      "Find info on Pokemon with this Pokedex app. Uses the Pokeapi.co API.",
    url: "https://josephgattuso.github.io/js-projects/pokedex",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/pokedex",
  },
  {
    title: "Project 06",
    name: "Hoverboard",
    img:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Hoverboard app with color-change effect on mouse hover",
    url: "https://josephgattuso.github.io/js-projects/hoverboard",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/hoverboard",
  },
  {
    title: "Project 07",
    name: "Image Carousel",
    img:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web component with classic image carousel",
    url: "https://josephgattuso.github.io/js-projects/image-carousel",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/image-carousel",
  },
  {
    title: "Project 08",
    name: "Animated Countdown",
    img:
      "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web compononet loader with feature animated countdown",
    url: "https://josephgattuso.github.io/js-projects/animated-countdown",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/animated-countdown",
  },
  {
    title: "Project 09",
    name: "Notes App",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Create, Read, Edit, and Delete notes",
    url: "https://josephgattuso.github.io/js-projects/notes-app",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/notes-app",
  },
  {
    title: "Project 10",
    name: "Good Cheap Fast",
    img:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Optimise your next project from a set of predifined criteria",
    url: "https://josephgattuso.github.io/js-projects/good-cheap-fast",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/good-cheap-fast",
  },
  {
    name: "Password Generator",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Generate a random password with specific user settings",
    url: "https://josephgattuso.github.io/js-projects/password-generator",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/password-generator",
  },
  {
    name: "Auto Text Effect",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description:
      "Web component with feature typing effect. Control speed using input field or keyboard arrows.",
    url: "https://josephgattuso.github.io/js-projects/auto-text-effect",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/auto-text-effect",
  },
  {
    name: "Hearts Click",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Generate hearts at double-click events",
    url: "https://josephgattuso.github.io/js-projects/double-heart-click",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/double-heart-click",
  },
  {
    name: "Search Profiles",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description:
      "Search for any GitHub profile and returns key information.  Uses the GitHub API.",
    url: "https://josephgattuso.github.io/js-projects/github-profiles",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/github-profiles",
  },
  {
    name: "Toast Notifications",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Generate toast notifications",
    url: "https://josephgattuso.github.io/js-projects/toast-notifications",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/toast-notifications",
  },
  {
    name: "Vertical Slider",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Image carousel with sliding double vertical panels",
    url: "https://josephgattuso.github.io/js-projects/double-vertical-slider",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/double-vertical-slider",
  },
  {
    name: "Sticky Navigation",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Website template with feature sticky navigation",
    url: "https://josephgattuso.github.io/js-projects/sticky-navigation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/sticky-navigation",
  },
  {
    name: "Content Placeholder",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Content placeholder component",
    url: "https://josephgattuso.github.io/js-projects/content-placeholder",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/content-placeholder",
  },
  {
    name: "Kinetic Loader",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Kinetic page loading component",
    url: "https://josephgattuso.github.io/js-projects/kinetic-loader",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/kinetic-loader",
  },
  {
    name: "Drawing App",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Drawing app using HTML canvas",
    url: "https://josephgattuso.github.io/js-projects/drawing-app",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/drawing-app",
  },
  {
    name: "Drag 'N' Drop",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Drag and drop component",
    url: "https://josephgattuso.github.io/js-projects/drag-n-drop",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/drag-n-drop",
  },
  {
    name: "Button Ripple",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Button ripple effect",
    url: "https://josephgattuso.github.io/js-projects/button-ripple",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/button-ripple",
  },
  {
    name: "Theme Clock",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Theme clock with feature dark mode toggle",
    url: "https://josephgattuso.github.io/js-projects/theme-clock",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/theme-clock",
  },
  {
    name: "Background Slider",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Background slider project",
    url: "https://josephgattuso.github.io/js-projects/background-slider",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/background-slider",
  },

  {
    name: "Movie App",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description:
      "Search for movies and view movie info and ratings. Uses the moviedb API",
    url: "https://josephgattuso.github.io/js-projects/movie-app",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/movie-app",
  },
  {
    name: "Drink Water",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Track your water intake with this handy water tracking app",
    url: "https://josephgattuso.github.io/js-projects/drink-water",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/drink-water",
  },
  {
    name: "Incrementing Counter",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Incrementing counter widget",
    url: "https://josephgattuso.github.io/js-projects/incrementing-counter",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/incrementing-counter",
  },
  {
    name: "Animated Navigation",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Website template with feature animated expanding navigation",
    url: "https://josephgattuso.github.io/js-projects/animated-navigation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/animated-navigation",
  },
  {
    name: "Random Picker",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description:
      "Enter all of the choices divided by commas. Then press enter when you are done.",
    url: "https://josephgattuso.github.io/js-projects/random-choice-picker",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/random-choice-picker",
  },
  {
    name: "FAQ Collapse",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Frequently asked questions",
    url: "https://josephgattuso.github.io/js-projects/faq-collapse",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/faq-collapse",
  },
  {
    name: "Event Keycodes",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Press any key to get the keycode",
    url: "https://josephgattuso.github.io/js-projects/event-keycodes",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/event-keycodes",
  },

  {
    name: "Sound Board",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Handy sound effects board",
    url: "https://josephgattuso.github.io/js-projects/sound-board",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/sound-board",
  },
  {
    name: "Form Wave",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Login form with feature animated input text",
    url: "https://josephgattuso.github.io/js-projects/form-wave",
    repo: "https://github.com/josephgattuso/js-projects/tree/master/form-wave",
  },
  {
    name: "Split Landing",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Website template with feature landing page",
    url: "https://josephgattuso.github.io/js-projects/split-landing",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/split-landing",
  },
  {
    name: "Scroll Animation",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web component with feature scrolling animation effect",
    url: "https://josephgattuso.github.io/js-projects/scroll-animation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/scroll-animation",
  },
  {
    name: "Blurry Loading",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web component with feature blurry page loading effect",
    url: "https://josephgattuso.github.io/js-projects/blurry-loading",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/blurry-loading",
  },
  {
    name: "Search Widget",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web component with feature hidden search widget",
    url: "https://josephgattuso.github.io/js-projects/hidden-search",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/hidden-search",
  },
  {
    name: "Rotating Navigation",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web component with feature rotating navigation animation",
    url: "https://josephgattuso.github.io/js-projects/rotating-navigation",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/rotating-navigation",
  },
  {
    name: "Progress Steps",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web component timeline with feature progress steps",
    url: "https://josephgattuso.github.io/js-projects/progress-steps",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/progress-steps",
  },
  {
    name: "Expanding Cards",
    img:
      "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    description: "Web component with feature expanding cards",
    url: "https://josephgattuso.github.io/js-projects/expanding-cards",
    repo:
      "https://github.com/josephgattuso/js-projects/tree/master/expanding-cards",
  },
];

export default projects;
