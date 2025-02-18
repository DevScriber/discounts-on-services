// #region faq question script

const buttons = document.querySelectorAll('.faq-item-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => ShowHideAnswer(button));
});

function ShowHideAnswer(button) {
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

// #endregion

// #region invite-link copy script
const copyBtn = document.querySelector('.invite-copy-button');
const inviteLink = document.querySelector('.invite-link');

copyBtn.addEventListener('click', copyLink);

function copyLink() {
  navigator.clipboard.writeText(inviteLink.href);
}
// #endregion
