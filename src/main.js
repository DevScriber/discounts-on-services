/* #region faq question script */
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.faq-item-btn');

  buttons.forEach(button => {
    button.addEventListener('click', ShowHideAnswer);
  });

  function ShowHideAnswer() {
    const parentLi = button.closest('.faq-item');
    const content = parentLi.querySelector('.faq-item-answer-text');
    content.style.maxHeight = 0 + 'px';

    if (parentLi) {
      parentLi.classList.toggle('active');
    }

    if (parentLi.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
});
/* #endregion */
