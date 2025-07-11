//  Генерирует сетку квадратов внутри контейнера по data-атрибутам data-rows и data-cols.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.squares').forEach(container => {
    const rows = parseInt(container.dataset.rows, 10) || 1;
    const cols = parseInt(container.dataset.cols, 10) || 1;
    const total = rows * cols;
    for (let i = 0; i < total; i++) {
      const square = document.createElement('span');
      square.className = 'square';
      square.style.width = '14px';
      square.style.height = '14px';
      square.style.backgroundColor = 'white';
      square.style.opacity = '0.3';
      container.appendChild(square);
    }
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${cols}, var(--square-size, 14px))`;
    container.style.gridTemplateRows = `repeat(${rows}, var(--square-size, 14px))`;
    container.style.gridGap = '14px';
  });
});

// Мобильное меню
const dots = document.querySelector('.header__dots');
const nav = document.querySelector('.header__nav');

if (dots && nav) {
  dots.addEventListener('click', function () {
    nav.classList.toggle('header__nav--open');
  });

  document.addEventListener('click', function (e) {
    if (
      nav.classList.contains('header__nav--open') &&
      !nav.contains(e.target) &&
      !dots.contains(e.target)
    ) {
      nav.classList.remove('header__nav--open');
    }
  });
} 