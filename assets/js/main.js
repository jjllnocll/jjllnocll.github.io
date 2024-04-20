const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const toggleContentByTab = () => {

  let tabs = document.querySelectorAll('.products-block__tab');
  let contents = document.querySelectorAll('.products-block__wrapper');

  tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {

      tabs.forEach((tab_2) => {
        tab_2.classList.remove('active');
      })
      contents.forEach((content) => {
        content.classList.remove('active');
      })


      tab.classList.add('active');
      contents[index].classList.add('active');

    })

  })

}

toggleContentByTab();

var burger = document.querySelector('.burger');
var mobilemenu = document.querySelector('.mobile-menu');
var cross = document.querySelector('.cross');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobilemenu.classList.toggle('active');
});

cross.addEventListener('click', () => {
  burger.classList.remove('active');
  mobilemenu.classList.remove('active');
});

var korzina = document.querySelector('.korzina');
var tovkorzina = document.querySelector('.tovkorzina');
var krest = document.querySelector('.krest');

tovkorzina.addEventListener('click', () => {
  korzina.classList.toggle('active');
});

krest.addEventListener('click', () => {
  tovkorzina.classList.remove('active');
  korzina.classList.remove('active');
});

