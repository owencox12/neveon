let swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    navigation: {
        nextEl: ".slider__right",
        prevEl: ".slider__left",
      },
      breakpoints: {
          1500: {
              slidesPerView: 3,
          },
          1300: {
            slidesPerView: 2,
        },
          900: {
            slidesPerView: 2,
          },
          100: {
            slidesPerView: 1,
        },
      }
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
})


let swiperSecond = new Swiper(".swiper-second", {
    slidesPerView: 4,
    navigation: {
        nextEl: ".slider__right_second",
        prevEl: ".slider__left_second",
      },
      breakpoints: {
        1400: {
            slidesPerView: 4,
        },
        1300: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        100: {
            slidesPerView: 1,
        }
    }
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
})


let burger = document.querySelector(".header__burger")
let burgerMenu = document.querySelector(".header__burger_list")
let body = document.querySelector("body")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
    body.classList.toggle("lock")
})