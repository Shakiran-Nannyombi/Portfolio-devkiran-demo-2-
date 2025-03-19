const nav = document.querySelector('.nav-area');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.scrollY;

  // Show navbar on scroll up
  if (prevScrollPos > currentScrollPos) {
    nav.classList.remove('hidden');
  } else {
    // Hide navbar on scroll down
    nav.classList.add('hidden');
  }

  // Add 'scroll' class for background color when scrolling down
  if (currentScrollPos > 50) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }

  // Update previous scroll position
  prevScrollPos = currentScrollPos;
});

// Mobile menu toggle
const menuIcon = document.getElementById("menu-icon");
const navLinksContainer = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinksContainer.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

// Active section highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

