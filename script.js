// Navbar

function toggleMenu() {
  const myBtn = document.getElementById("myTopnav");
  if (myBtn.className === "topnav") {
    myBtn.className += " responsive";
  } else {
    myBtn.className = "topnav";
  }
}
