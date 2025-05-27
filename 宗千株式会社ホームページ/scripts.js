var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    on: {
      slideChange: function () {
        updateDescription(this.activeIndex);
      }
    }
  });
  
  updateDescription(0);

function updateDescription(index) {
  const descriptions = document.querySelectorAll(".slide-description");
  descriptions.forEach(desc => {
    if (desc.dataset.index == index) {
      desc.style.display = "block";
    } else {
      desc.style.display = "none";
    }
  });
}