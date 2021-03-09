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
