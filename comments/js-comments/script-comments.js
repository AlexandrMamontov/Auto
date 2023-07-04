// Карточки отзывов
document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.comments__btn').forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(e.target.closest('.comments__item').querySelector('.comments__content'));
      e.target.closest('.comments__item').querySelector('.comments__content').classList.toggle('comments__content--active')
      e.target.closest('.comments__content').querySelector('.comments__txt').classList.toggle('comments__txt--active')
      e.target.closest('.comments__content').querySelector('.comments__btn').classList.toggle('comments__btn--active')
    })
  });
})


// Показ блоков по клику
let commentsMore = document.querySelector('.comments__btn-more');
let comments = document.querySelectorAll('.comments__item');

commentsMore.addEventListener('click', function() {

  comments.forEach(function(el) {
    el.classList.add('comments__item--visible')
  });

  commentsMore.closest('.comments__btn-more').classList.add('comments__item--hidden');
})
