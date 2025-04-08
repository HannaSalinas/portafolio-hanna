console.log("¡Hola! Este es el portafolio de Hanna.");
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider-btn.left');
    const btnRight = document.querySelector('.slider-btn.right');
    let index = 0;
  
    btnLeft.addEventListener('click', () => {
      index = (index - 1 + slide.length) % slide.length;
      updateSlider();
    });
  
    btnRight.addEventListener('click', () => {
      index = (index + 1) % slide.length;
      updateSlider();
    });
  
    function updateSlider() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
  });
  