// Слайдер
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },

   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },

   a11y: {
    paginationBulletMessage: 'Слайд {{index}}',
  }
});


// Показ блоков по клику
let autoMore = document.querySelector('.auto__btn-more');
let auto = document.querySelectorAll('.auto__item');

autoMore.addEventListener('click', function() {

  auto.forEach(function(el) {
    el.classList.add('auto__item--visible')
  });

  autoMore.closest('.auto__btn-more').classList.add('auto__item--hidden');
})


// Карточки отзывов
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.comment__btn').forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(e.target.closest('.comment__item').querySelector('.comment__content'));
      e.target.closest('.comment__item').querySelector('.comment__content').classList.toggle('comment__content--active')
      e.target.closest('.comment__content').querySelector('.comment__text').classList.toggle('comment__text--active')
      e.target.closest('.comment__content').querySelector('.comment__btn').classList.toggle('comment__btn--active')
    })
  });
})


// Шаги
let tabsBtn = document.querySelectorAll('.info__btn');
let tabsinfo = document.querySelectorAll('.info__steps');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {
      btn.classList.remove('info__btn--active')
    });

    e.currentTarget.classList.add('info__btn--active');

    tabsinfo.forEach(function(element) {
      element.classList.remove('info__steps--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('info__steps--active');
  });
});
