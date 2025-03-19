document.addEventListener("DOMContentLoaded", () => {
    // Select all elements to animate
    const elements = document.querySelectorAll(".animate-on-scroll");
  
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the 'visible' class when the element is in view
            entry.target.classList.add("visible");
          } else {
            // Remove the 'visible' class when the element is out of view
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );
  
    // Observe each element
    elements.forEach((element) => observer.observe(element));
  });