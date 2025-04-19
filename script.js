
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );
  
    sections.forEach((section) => observer.observe(section));
  });
document.addEventListener("DOMContentLoaded", () => {
    const typewriters = document.querySelectorAll(".typewriter");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Trigger the animation
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );
  
    typewriters.forEach((typewriter) => observer.observe(typewriter));
  });
