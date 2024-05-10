document.querySelector('.main-header').classList.remove('main-header--no-js');

// Мобильное меню
let menu = document.querySelector('.main-header__list-wrapper');
let menuButton = document.querySelector('.main-header__toggle');
let menuButtonContent = document.querySelector('.main-header__toggle-lines')

const mobileMediaQuery = window.matchMedia('(max-width: 768px)')
  menu.classList.add("main-header__list-wrapper--no-animation");
    setTimeout(() => {
      menu.classList.remove("main-header__list-wrapper--no-animation");
    }, 1000);

mobileMediaQuery.addEventListener("change", function (event) {
  if (event.matches) {
    menu.classList.add("main-header__list-wrapper--no-animation");
    setTimeout(() => {
      menu.classList.remove("main-header__list-wrapper--no-animation");
    }, 1000);
  } else {
    menu.classList.remove("main-header__list-wrapper--no-animation");
  }
});

menu.classList.add('main-header__list-wrapper--menu-close');
if (menuButton) {menuButton.addEventListener ("click", function () {
  menu.classList.toggle('main-header__list-wrapper--menu-close');
  menu.classList.toggle('main-header__list-wrapper--menu-open');
  menuButtonContent.classList.toggle('main-header__toggle-lines--x');
})}

// Плеер
let videoPlayer = document.querySelector('.video__player');
let videoLink = document.querySelector('.video__play-button');
let videoPreview = document.querySelector('.video__video-wrapper');

if (videoLink) {
  videoLink.addEventListener("click",
function (event) {
  event.preventDefault();
  videoPlayer.classList.toggle('video__player--no-js');
  videoPreview.classList.toggle('video__video--hidden');
  videoLink.classList.toggle('video__play-button--hidden');
});
}

// Слайдер
let arrowLeft = document.querySelector('.slide-wrapper__button-previous');
let arrowRight = document.querySelector('.slide-wrapper__button-next');
let reviews = document.querySelectorAll('.reviews__item');
let active = document.querySelector('reviews__item--active');
console.log(reviews);

// if (reviews.classList('reviews__item--active')) {
//   console.log('review')
// }

// for (let currentSlide of reviews) {
//   if (currentSlide.matches(active)) {
//     console.log('Активный слайд')
//   }
// }
// for (let i = 0; i < reviews.length; i++) {
//   console.log(i)
// };



