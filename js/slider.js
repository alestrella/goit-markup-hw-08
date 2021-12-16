var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
  spaceBetween: 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        },
      });