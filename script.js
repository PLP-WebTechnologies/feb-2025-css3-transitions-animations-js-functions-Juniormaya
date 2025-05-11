const animateBtn = document.getElementById("animateBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body;

// Load the saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Animate on click
animateBtn.addEventListener("click", () => {
  animateBtn.classList.add("animate");
  setTimeout(() => {
    animateBtn.classList.remove("animate");
  }, 300);
});

// Toggle theme and store in localStorage
toggleThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    const newTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
});