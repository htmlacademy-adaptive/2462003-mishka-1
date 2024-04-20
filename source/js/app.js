document.querySelector('.main-header').classList.remove('main-header--no-js');

let menu = document.querySelector('.main-header__list-wrapper');

let menuButton = document.querySelector('.main-header__toggle');

let menuButtonContent = document.querySelector('.main-header__toggle-lines')

console.log(menuButtonContent);

menu.classList.add('menu-closed');

menuButton.onclick = function () {
  menu.classList.toggle('menu-closed')
  menu.classList.toggle('menu-opened')
  menuButtonContent.classList.toggle('main-header__toggle-lines--x')
}
