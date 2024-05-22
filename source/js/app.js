

document.querySelector('.main-header').classList.remove('main-header--no-js');

// Мобильное меню
let menu = document.querySelector('.main-header__list-wrapper');
let menuButton = document.querySelector('.main-header__toggle');
let menuButtonContent = document.querySelector('.main-header__toggle-lines');


const mobileMediaQuery = window.matchMedia('(max-width: 767px)');
    menu.classList.add('main-header__list-wrapper--no-animation');
    setTimeout(() => {
      menu.classList.remove('main-header__list-wrapper--no-animation');
    }, 1000);

mobileMediaQuery.addEventListener('change', function (event) {
  if (event.matches) { if (menu.classList.contains('main-header__list-wrapper--menu-open')) {
    menu.classList.toggle('main-header__list-wrapper--menu-close');
    menu.classList.toggle('main-header__list-wrapper--menu-open');
    menuButtonContent.classList.toggle('main-header__toggle-lines--x');
  }
    menu.classList.add('main-header__list-wrapper--no-animation');
    setTimeout(() => {
      menu.classList.remove('main-header__list-wrapper--no-animation');
    }, 1000);
  } else {
    menu.classList.remove('main-header__list-wrapper--no-animation');
  }
});

menu.classList.add('main-header__list-wrapper--menu-close');
if (menuButton) {menuButton.addEventListener ('click', function () {
  menu.classList.toggle('main-header__list-wrapper--menu-close');
  menu.classList.toggle('main-header__list-wrapper--menu-open');
  menuButtonContent.classList.toggle('main-header__toggle-lines--x');
})}

// Карта
if (document.querySelector('.map-wrapper__map')) {
  document.querySelector('.map-wrapper__map').classList.remove('map-wrapper__map--no-js');
};


// Плеер
let videoPlayer = document.querySelector('.video__player');
let videoLink = document.querySelector('.video__play-button');
let videoPreview = document.querySelector('.video__video-wrapper');

if (videoLink) {
  videoLink.addEventListener('click',
function (event) {
  event.preventDefault();
  videoPlayer.classList.toggle('video__player--no-js');
  videoPreview.classList.toggle('video__video--hidden');
  videoLink.classList.toggle('video__play-button--hidden');
});
}

// Модальное окно
let buy = document.querySelectorAll('.card__cart-button');
let buyIndex = document.querySelector('.button--for-modal');
let modal = document.querySelector('.modal-wrapper');
let modalButton = document.querySelector('.button--modal');
let size = document.querySelectorAll('.button-xs');

if (buyIndex) {
      buyIndex.addEventListener('click', function () {
      modal.classList.remove('modal-wrapper--invisible');
    });

    for (let sizeButton of size) {
      sizeButton.addEventListener('click', function () {
        let activeSize = document.querySelector('.button-xs--active');
        activeSize.classList.remove('button-xs--active');
        sizeButton.classList.add('button-xs--active');
      });
    };
  };

  if (buy) {
      for (let buyButton of buy) {
      buyButton.addEventListener('click', function () {
      modal.classList.remove('modal-wrapper--invisible');
    })

    for (let sizeButton of size) {
      sizeButton.addEventListener('click', function () {
        let activeSize = document.querySelector('.button-xs--active');
        activeSize.classList.remove('button-xs--active');
        sizeButton.classList.add('button-xs--active');
      })
    }
  }
  if (modalButton) {
    modalButton.addEventListener('click', function () {
      modal.classList.add('modal-wrapper--invisible');
    })
  };
};

// Слайдер
let reviews = Array.from(document.querySelectorAll('.reviews__item')); // Массив слайдов

if (reviews) {
  let arrowLeft = document.querySelector('.slide-wrapper__button-previous');
let arrowRight = document.querySelector('.slide-wrapper__button-next');

j = 0 // Индекс
let reviewsCount = reviews.length; // количество слайдов

  if (arrowRight) {
    arrowRight.addEventListener('click', nextSlide);
  };

  if (arrowRight) {
    arrowLeft.addEventListener('click', previousSlide);
  };


  function nextSlide() {
    j = (j + 1) % reviewsCount;
    updateSlider();
  };

  function previousSlide() {
    j = (j - 1 + reviewsCount) % reviewsCount;
    updateSlider();
  };

  function updateSlider() {
    reviews.forEach((review, index) => {
      if (index === j) {
        review.classList.add('reviews__item--active');
      } else {
        review.classList.remove('reviews__item--active');
      }
    });
  }

  updateSlider();
};
