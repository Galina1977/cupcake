$(function () {
  // Скрипт плавного перехода к нужному блоку
  $(".menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".footer").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  //Стрелка вверх-скролл
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $("#scroller").fadeIn();
      } else {
        $("#scroller").fadeOut();
      }
    });
    $("#scroller").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });
  });

  // slider - cupcake;
  $(".slider-cupcake").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpead: 1500,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/section_2/arrow_left.png" alt="">',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right"  src="images/section_2/arrow_right.png" alt="">',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Пупап Слайдер Галерея
  $(".popup-cupcake__gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tloading: "loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
  });

  // Бургер меню
  $(".visuallyHidden").on("click", function () {
    $(".menu__list").toggleClass("menu__list--active");
  });

  // Подключили анимацию
  new WOW().init();

  // Отключили анимацию
  var wow = new WOW({
    mobile: false,
  });
});
