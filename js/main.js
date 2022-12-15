// swiper
var Swipes = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 25,
  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}",
  },
});

// tabs in steps
let tabsBtn = document.querySelectorAll(".steps__step__button");
let tabsItem = document.querySelectorAll(".tabs-item");
tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("steps__step__button--active");
    });
    e.currentTarget.classList.add("steps__step__button--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("tabs-item--active");
    });

    let tabsActive = document.querySelectorAll(`[data-target="${path}"]`);
    tabsActive.forEach((el) => {
      el.classList.add("tabs-item--active");
    });
  });
});

// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click',
function() {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
}
)

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// search
document.querySelector('.header__search-btn').addEventListener('click', () => {
  document.querySelector('.header__search').classList.add('header__search-show')
  document.querySelector('.header__search-btn').classList.add('header__search-btn--hidden')
})

document.querySelector('.header__search-close').addEventListener('click', () => {
  document.querySelector('.header__search').classList.remove('header__search-show')
  document.querySelector('.header__search-btn').classList.remove('header__search-btn--hidden')

})
