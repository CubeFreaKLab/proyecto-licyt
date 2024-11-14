let currentIndex = 0;

      function showSlide(index) {
        const slides = document.querySelectorAll(".carousel-images img");
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[index].classList.add("active");
      }

      function changeSlide(direction) {
        const slides = document.querySelectorAll(".carousel-images img");
        currentIndex =
          (currentIndex + direction + slides.length) % slides.length;
        showSlide(currentIndex);
      }

      document.addEventListener("DOMContentLoaded", () =>
        showSlide(currentIndex)
      );