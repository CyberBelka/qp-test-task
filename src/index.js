import './main.scss';
import './fonts/fonts.scss';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const mySwiper = new Swiper('.js-slider', {
  slidesPerView: 1,
  loop: true,
  modules: [Navigation],
  navigation: {
    nextEl: '.first-block__navigation.swiper-button-next',
    prevEl: '.first-block__navigation.swiper-button-prev',
  },
});

const toggle = document.querySelector('.js-toggle');
const menu = document.querySelector('.js-menu');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  body.classList.toggle('scroll');
  toggle.classList.toggle('open')
});

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27 && menu.classList.contains('open')) {
    menu.classList.remove('open');
    body.classList.remove('scroll');
    toggle.classList.remove('open')
  }
});

document.addEventListener('mouseup', (e) => {
  if (!e.target.closest('.js-content') && e.target.classList.contains('open')) {
    menu.classList.remove('open');
    body.classList.remove('scroll');
    toggle.classList.remove('open')
  }
});

const openPopupBtns = document.querySelectorAll('.js-open-popup');
const closePopupBtn = document.querySelector('.js-close-popup');
const popup = document.querySelector('.js-popup');

function closePopup() {
  if (popup.classList.contains('open')) {
    popup.classList.remove('open');
    body.classList.remove('scroll');
  }
}

function openPopup() {
  popup.classList.add('open');
  body.classList.add('scroll');
}

if (openPopupBtns.length) {
    openPopupBtns.forEach((btn) => {
        btn.addEventListener('click', openPopup.bind(event, btn));
    });
}

closePopupBtn.addEventListener('click', closePopup);

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        closePopup();
    }
});

document.addEventListener('mouseup', (e) => {
    if (!e.target.closest('.js-popup-content')) {
        closePopup();
    }
});