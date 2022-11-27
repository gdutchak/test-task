const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    initialSlide: 2,
    spaceBetween: 15,
    centeredSlides: true,
    width: 280,
    slidesOffsetBefore: 25,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },       
  })