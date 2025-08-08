console.log("🌸 Bienvenid@ al portafolio de Hanna");

// ======== SLIDER DE PROYECTOS ========
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

  // Eventos para slider
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

// ======== MODAL CERTIFICADOS ========
function openModal(imgSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = imgSrc; // ✅ Ruta directa para que funcione
  modal.classList.add("fade-in");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("fade-in");
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("fade-out");
  }, 300);
}

// Cerrar modal con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
});




  