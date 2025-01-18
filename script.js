document.addEventListener("DOMContentLoaded", function () {
    // Select all elements you want to apply the effect on
    const elements = document.querySelectorAll('body *');  // Applies to every element inside the body
  
    // Intersection Observer to detect when elements enter the viewport
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add 'visible' class when element is in view
          observer.unobserve(entry.target); // Stop observing the element once it has come into view
        }
      });
    }, {
      threshold: 0.25 // 25% of the element should be visible to trigger the effect
    });
  
    // Observe all elements that need the effect
    elements.forEach(element => {
      // Apply pop-in class to all elements
      element.classList.add('pop-in');
      observer.observe(element);
    });
  });
  