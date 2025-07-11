document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.header__decor-squares').forEach(container => {
    const rows = parseInt(container.dataset.rows, 10) || 1;
    const cols = parseInt(container.dataset.cols, 10) || 1;
    const total = rows * cols;
    for (let i = 0; i < total; i++) {
      const square = document.createElement('span');
      square.className = 'header__square';
      container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${cols}, var(--square-size, 14px))`;
    container.style.gridTemplateRows = `repeat(${rows}, var(--square-size, 14px))`;
  });
}); 