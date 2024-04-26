document.querySelector('.main-header').classList.remove('main-header--no-js');

let menu = document.querySelector('.main-header__list-wrapper');

let menuButton = document.querySelector('.main-header__toggle');

let menuButtonContent = document.querySelector('.main-header__toggle-lines')



console.log(menuButtonContent);

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

menuButton.onclick = function () {
  menu.classList.toggle('main-header__list-wrapper--menu-close');
  menu.classList.toggle('main-header__list-wrapper--menu-open');
  menuButtonContent.classList.toggle('main-header__toggle-lines--x');
}
let videoPlayer = document.querySelector('.video__player');
let videoLink = document.querySelector('.video__play-button');
let videoPreview = document.querySelector('.video__video-wrapper');

console.log(videoLink);
console.log(videoPlayer);
console.log(videoPreview);

videoLink.addEventListener("click",
function (event) {
  event.preventDefault();
  videoPlayer.classList.toggle('video__player--no-js');
  videoPreview.classList.toggle('video__video--hidden');
  videoLink.classList.toggle('video__play-button--hidden');
});


