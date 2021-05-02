$(function () {
  // Скрипт плавного перехода к нужному блоку
  $(".header-top__menu").on("click", "a", function (event) {
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

  //scroller
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

  // Табы
  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass(
      "tabs-content--active"
    );

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $(".slick-slider").slick("setPosition");
  });

  //Слайдер
  $(".carousel__inner").slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  //Кнопка Избранное-сердце
  $(".carousel__favorite").on("click", function () {
    $(this).toggleClass("carousel__favorite--active");
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
  $(".header-top__burger").click(function (event) {
    $(".header-top__burger, .header-top__menu ").toggleClass("active");
    $("body").toggleClass("lock");
  });

  // Показать ещё
  $(".popup-cupcake__btn").on("click", function () {
    $(this).toggleClass("popup-cupcake__btn--active");
    $(this).next().slideToggle(500);
  });

  // Подключили анимацию
  new WOW().init();

  // Отключили анимацию
  var wow = new WOW({
    mobile: false,
  });
});
