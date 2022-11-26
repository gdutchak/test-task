const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    // loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
    // breakpoints: {
    //   360: {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
        centeredSlides: true,
        centerInsufficientSlides: true,
        centeredSlidesBounds: true,
    //   }}
  });