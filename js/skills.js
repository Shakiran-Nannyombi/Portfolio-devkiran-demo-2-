document.addEventListener("DOMContentLoaded", () => {
    const toolList = document.querySelector(".tool-list");
  
    // Clone the children to create a seamless scroll
    const clone = toolList.innerHTML;
    toolList.innerHTML += clone;
  
    let scrollPosition = 0;
  
    function scrollTools() {
      scrollPosition += 1; // Adjust speed here (1px per frame)
      toolList.style.transform = `translateY(-${scrollPosition}px)`;
  
      // Reset scroll position to create a loop
      if (scrollPosition >= toolList.scrollHeight / 2) {
        scrollPosition = 0;
      }
  
      requestAnimationFrame(scrollTools);
    }
  
    scrollTools();
  });