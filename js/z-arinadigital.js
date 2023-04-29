/* **************** Header Navigation Bar Scroll Disappearance Appearance ***********************/
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();


$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();
  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    $("header").removeClass("nav-up").addClass("nav-down");
  }

  lastScrollTop = st;
}

/* **************** Home Page  Kartlar Slider ***********************/
var swiper = new Swiper(".HomeCardsSwiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  slidesPerView: 3,
  initialSlide: 0,
  speed: 500,
  autoplay: {
    delay: 5000,
  },

  /*  on: {
    slideChange: function () {
      for (let slide of this.slides) {
        slide.classList.remove("cartHover");
      }
      // console.log(this.slides[this.activeIndex]);
      this.slides[this.activeIndex].classList.add("cartHover");

      // console.log("slide Changed!");
    },
  }, */

  // Navigation arrows
  navigation: {
    nextEl: ".leftArrowTop",
    prevEl: ".leftArrowBottom",
  },

  breakpoints: {
    991: {
      slidesPerView: 3,
    },

    576: {
      direction: "vertical",
      slidesPerView: 2,
    },

    0: {
      slidesPerView: 2,
      direction: "horizontal",
    },
  },
});
/* **************** Home Page  Sertifikalarımız Slider ***********************/

var swiper = new Swiper(".HomeSertifikalarSwiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  initialSlide: 0,
  autoplay: {
    delay: 5000,
  },

  on: {
    init: function () {
      this.slides[this.activeIndex].classList.add("activeSertifika");
      this.slides[this.activeIndex].nextElementSibling.classList.add(
        "activeSertifikaNext"
      );
    },

    slideChange: function () {
      for (let slide of this.slides) {
        slide.classList.remove("activeSertifika");
        slide.classList.remove("activeSertifikaNext");
      }
      // console.log(this.slides[this.activeIndex]);
      this.slides[this.activeIndex].classList.add("activeSertifika");
      this.slides[this.activeIndex].nextElementSibling.classList.add(
        "activeSertifikaNext"
      );
      // console.log("slide Changed!");
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".leftArrowTopSertifikalar",
    prevEl: ".leftArrowBottomSertifikalar",
  },

  breakpoints: {
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    576: {
      direction: "vertical",
      slidesPerView: 2,
    },

    0: {
      slidesPerView: 2,
      direction: "horizontal",
      spaceBetween: 10,
    },
  },
});

/* **************** Home Page  Testimonial Slider ***********************/

var swiper = new Swiper(".testimonialSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".testRightArrow",
    prevEl: ".testLeftArrow",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

/* **************** Firmamız Slider ***********************/
var swiper = new Swiper(".firmamızPageSlider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  initialSlide: 0,

  /*  on: {
    slideChange: function () {
      for (let slide of this.slides) {
        slide.classList.remove("cartHover");
      }
      // console.log(this.slides[this.activeIndex]);
      this.slides[this.activeIndex].classList.add("cartHover");

      // console.log("slide Changed!");
    },
  }, */
  breakpoints: {
    1600: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    995: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },

    0: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".sliderButton-Next",
    prevEl: ".sliderButton-Prev",
  },
});

/* ****************   tUrunler Slider 3Lü ***********************/

var swiper = new Swiper(".tUrunlerSwiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  speed: 500,
  initialSlide: 1,

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 45,
    depth: 475,
    modifier: 1,
    slideShadows: false,
  },

  /* BBS Projesi detayları incelendi on methodu için */
  on: {
    slideChange: function () {
      for (let slide of this.slides) {
        slide.classList.remove("center");
      }

      this.slides[this.activeIndex].classList.add("center");
      // console.log("slide Changed!");
    },
  },

  breakpoints: {
    1200: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".tUrunlerRightArrow",
    prevEl: ".tUrunlerLeftArrow",
  },
});

/* ****************   tUrunler Slider Tekli ***********************/

var swiper = new Swiper(".tUrunlerSwiperOneSlide", {
  direction: "horizontal",
  loop: true,
  speed: 500,
  initialSlide: 2,

  // Navigation arrows
  navigation: {
    nextEl: ".tUrunlerRightArrow",
    prevEl: ".tUrunlerLeftArrow",
  },
});

/* ****************   Hamburger Button  ***********************/

$(".hamburger-button").click(function (e) {
  /* Menu opener */
  $(".mobile-menu").toggleClass("opened");
  /* Hamburger button shape changer */
  $(this).toggleClass("active");
  /* Darken the BG */
  $("body").toggleClass("darken");

  $(".mobile-menu .mobile-sub-menu").find("ul").slideUp();
  $(".mobile-menu .mobile-sub-menu").find("span").removeClass("active");
});

/* ****************   Mobile Menu    ***********************/

$(".mobile-menu .mobile-sub-menu > span").click(function () {
  /* Closing all sub menus and Making their arrow direction right */
  $(".mobile-menu .mobile-sub-menu").find("ul").slideUp();
  $(".mobile-menu .mobile-sub-menu").find("span").removeClass("active");

  if ($(this).nextAll("ul:first").is(":visible")) {
    $(this).nextAll("ul:first").slideUp();
    $(this).removeClass("active");
  } else {
    $(this).nextAll("ul:first").slideDown();
    $(this).addClass("active");
  }
});

$(".mobile-menu .mobile-sub-menu .mobile-sub-sub-menu").click(function () {
  /* Closing all sub menus and Making their arrow direction right */
  $(".mobile-menu .mobile-sub-menu .mobile-sub-sub-menu").find("ul").slideUp();
  $(".mobile-menu .mobile-sub-menu .mobile-sub-sub-menu")
    .find("span")
    .removeClass("active");

  if ($(this).find("ul").is(":visible")) {
    $(this).find("ul").slideUp();
    $(this).find("span").removeClass("active");
  } else {
    $(this).find("ul:first").slideDown();
    $(this).find("span:first").addClass("active");
  }
});

/* ****************   tUrunlerDownArrow scrollDown the page    ***********************/

$(".tUrunlerDownArrow").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(this).parent().next().offset().top - 50,
    },
    1000
  );
  return false;
});

/* ****************   Sertifikalar Page Pop-Up    ***********************/

/* Opening the BackGround and certificate */
$(".sertifikaBtn").click(function () {
  $("#sertifikaOpenBg").addClass("sertifikaOpenBg");

  var clickedSertifikaId = $(this).attr("id");
  $(`.${clickedSertifikaId}`).addClass("imgOpen");
});

/* Closing the BackGround and certificate */
$("#sertifikaOpenBg").click(function () {
  $("#sertifikaOpenBg").removeClass("sertifikaOpenBg");

  $(".imgOpen").removeClass("imgOpen");
});
