$(document).ready(function () {
  // ! Switch-el
  $('.switch-el').on('click', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  //! Burger

  $('.top-header__burger').on('click', function () {
    $(this).toggleClass('active');
    $('.menu').toggleClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.top-header__burger, .menu').length) {
      $('.menu').removeClass('active');
      $('.top-header__burger').removeClass('active');
    }
    e.stopPropagation();
  });

  //! ButtonDelivery
  function buttonDelivery() {
    $('.dropdown-main__button').on('click', function (e) {
      e.preventDefault();
      $('.dropdown-main__body').removeClass('active');
      $(this).toggleClass('active');
      $(this).next().toggleClass('active');
    });

    $('.dropdown-main__close').on('click', function () {
      $('.dropdown-main__body').removeClass('active');
    });

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.dropdown-main__button, .dropdown-main__body').length) {
        $('.dropdown-main__body').removeClass('active');
        $('.dropdown-main__button').removeClass('active');
      }
      e.stopPropagation();
    });
  }
  buttonDelivery();

  //! Swiper
  const swiperRegions = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
      renderBullet: function (index, className) {
        const title = ['Global', 'North America', 'Latin America', 'META*', 'Europe', 'Russia', 'APAC'];
        return '<span class="' + className + '">' + '<span>'+ title[index] + '</span>'  + '</span>';
      },
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

    //! Swiper
    const swiperPartners = new Swiper(".partners__swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

});
