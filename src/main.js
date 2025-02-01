/* #region faq question script */
document.addEventListener('DOMContentLoaded', () => {
  // Знаходимо всі кнопки в елементах <li> з класом "faq-item-btn"
  const buttons = document.querySelectorAll('.faq-item-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Отримуємо батьківський <li>, в якому знаходиться кнопка
      const parentLi = button.closest('.faq-item');
      const content = parentLi.querySelector('.faq-item-answer-text');
      content.style.maxHeight = 0 + 'px';

      if (parentLi) {
        // Перемикаємо клас active
        parentLi.classList.toggle('active');
      }

      if (parentLi.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px'; // Встановлення потрібної висоти
      }
    });
  });
});
/* #endregion */
