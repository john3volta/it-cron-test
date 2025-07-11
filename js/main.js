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