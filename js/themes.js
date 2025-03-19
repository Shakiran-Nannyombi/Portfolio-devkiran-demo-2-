const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.setAttribute("data-theme", savedTheme);

  // Set icon visibility based on the saved theme
  if (savedTheme === "dark") {
    lightIcon.style.display = "inline-block";
    darkIcon.style.display = "none";
  } else {
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";
  }
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    lightIcon.style.display = "inline-block";
    darkIcon.style.display = "none";
  }
});

// Initialize AOS on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
