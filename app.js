const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const opened = nav.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', opened);
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => nav.classList.remove('is-open')));

const form = document.querySelector('#lead-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.querySelector('.form__status').textContent = 'Спасибо! Заявка принята, мы скоро свяжемся с вами.';
  form.reset();
});
document.querySelector('.chat').addEventListener('click', () => document.querySelector('#application').scrollIntoView({ behavior: 'smooth' }));

const modal = document.querySelector('#application-modal');
const closeModal = () => {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
const openModal = (event) => {
  event.preventDefault();
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  modal.querySelector('input').focus();
};

document.querySelectorAll('.hero .button, .program-card .button').forEach((element) => {
  element.addEventListener('click', openModal);
});
modal.querySelector('.modal__close').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });
modal.querySelector('#modal-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = modal.querySelector('.modal__status');
  status.textContent = 'Спасибо! Заявка принята, мы скоро свяжемся с вами.';
  status.classList.add('is-success');
  event.currentTarget.reset();
});
