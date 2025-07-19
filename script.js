console.log("🌸 Bienvenida al portafolio de Hanna");

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideItems = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-btn.left");
  const btnRight = document.querySelector(".slider-btn.right");
  let index = 0;
  let autoSlideInterval;

  const updateSlider = () => {
    slides.style.transform = `translateX(-${index * 100}%)`;
  };

  const changeSlide = (direction = 1) => {
    index = (index + direction + slideItems.length) % slideItems.length;
    updateSlider();
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => changeSlide(1), 7000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  // Eventos
  btnLeft?.addEventListener("click", () => changeSlide(-1));
  btnRight?.addEventListener("click", () => changeSlide(1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
  });

  // Inicializar slider
  updateSlider();
  startAutoSlide();
});


  