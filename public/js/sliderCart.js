document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.nav-bar');
    const slides = slider.querySelector('.list-bar');
    const prevButton = document.querySelector('.fa-solid.fa-chevron-left');
    const nextButton = document.querySelector('.fa-solid.fa-chevron-right');
    let currentIndex = 0;
  
    const showSlide = () => {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
  
    prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        showSlide();
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (currentIndex < slides.children.length - 1) {
        currentIndex++;
        showSlide();
      }
    });
  });
