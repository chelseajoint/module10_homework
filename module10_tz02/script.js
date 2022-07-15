const cta = document.querySelector('button');

let check = true;

cta.addEventListener('click', () => {
  alert(`Ширина экрана: ${window.screen.width}, высота экрана: ${window.screen.height}. Ширина браузера без учёта полосы прокрутки: ${document.documentElement.clientWidth}, высота браузера без учёта полосы прокрутки: ${document.documentElement.clientHeight}`);
});
