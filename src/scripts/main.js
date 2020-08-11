'use strict';

// about
const about = document.querySelector('#about');

about.addEventListener('click', (event) => {
  const dropDown = document.querySelector('.roof__navigation-drop');

  event.preventDefault();

  dropDown.style = `
    visibility: visible;
    opacity: 1;
  `;
});

document.addEventListener('click', (event) => {
  if (!about.contains(event.target)) {
    const dropDown = document.querySelector('.roof__navigation-drop');

    dropDown.style = `
      visibility: hidden;
      opacity: 0;
    `;
  }
});

// full video
const videoLink = document.querySelector('.header__URL-video');
const crossVideo = document.querySelector('.full-video__cross');

const videoDisplay = (videoAction, overlapAction) => {
  const videoObj = document.querySelector('.full-video');
  const overlap = document.querySelector('.overlap');

  const documentWidth = document.body.offsetWidth;

  if (documentWidth < 860) {
    videoObj.firstElementChild.width = documentWidth - 60;
    videoObj.firstElementChild.height = (documentWidth - 60) / 1.65;
  }

  overlap.style = `display: ${overlapAction}`;
  videoObj.style = `display: ${videoAction}`;
};

videoLink.addEventListener('click', () => {
  videoDisplay('flex', 'block');
});

crossVideo.addEventListener('click', () => {
  videoDisplay('none', 'none');
});

// tour card
const tour = [...document.querySelector('.tour').children];

for (const tourChild of tour) {
  tourChild.style = `bottom: -${tourChild.offsetHeight / 2}px;`;
}

// toggle
const toggleButton = document.querySelector('.price-card__toggle');
const price = {
  '60min': {
    0: '3 000 ₽',
    1: '3 600 ₽',
  },
  '30min': {
    0: '1 500 ₽',
    1: '1 800 ₽',
  },
};
const add = {
  '60min': {
    0: '+500 ₽',
    1: '+500 ₽',
  },
  '30min': {
    0: '+250 ₽',
    1: '+300 ₽',
  },
};

toggleButton.addEventListener('click', (event) => {
  const timesText = [
    ...document.querySelectorAll('.price__command-game .price-card__time'),
  ];
  const prices = [
    ...document.querySelectorAll('.price__command-game .price-card__price'),
  ];
  const addPrice = [
    ...document.querySelectorAll('.price__command-game .price-card__add'),
  ];

  if (event.target.dataset.active === '60min') {
    toggleButton.dataset.active = '30min';
    toggleButton.src = './images/main/price/price-card/toggle_off.svg';
  } else {
    toggleButton.dataset.active = '60min';
    toggleButton.src = './images/main/price/price-card/toggle_on.svg';
  }

  for (const i of timesText) {
    i.classList.toggle('price-card_gray');
  }

  for (let i = 0; i < prices.length; i++) {
    prices[i]
      .lastElementChild.textContent = price[event.target.dataset.active][i];

    addPrice[i]
      .firstElementChild.textContent = add[event.target.dataset.active][i];
  }
});

// form
const oForm = document.querySelector('.o-form');
const OMForm = document.querySelector('.order-menu__form');

const formSubmit = (event) => {
  event.preventDefault();

  for (const i of event.target.children) {
    i.value = ''; // Sand To Server Script
  }
};

oForm.addEventListener('submit', formSubmit);
OMForm.addEventListener('submit', formSubmit);

// order-menu
const oCross = document.querySelector('.order-menu__cross');
const oButton = document.querySelector('#order-button');

const orderVisibility = (display) => {
  const oMenu = document.querySelector('.order-menu');

  oMenu.style = `display: ${display}`;
};

oButton.addEventListener('click', () => orderVisibility('flex'));
oCross.addEventListener('click', () => orderVisibility('none'));

// phone nav
const navBtn = document.querySelector('.roof__nav-btn');

navBtn.addEventListener('click', (event) => {
  const mobileNavElements = [...navBtn.children];

  mobileNavElements[0].classList.toggle('roof__btn-one_active');
  mobileNavElements[1].classList.toggle('roof__btn-two_active');

  // roof__btn-one

  const navigation = document.querySelector('.mobile-nav');

  navigation.classList.toggle('mobile-nav_active');
  // navBtn.classList.toggle('roof__nav-btn_active');
});

// map width
const footer = document.querySelector('.footer');
console.log("footer.offsetWidth", footer.offsetWidth)

if (footer.offsetWidth <= 1300 && footer.offsetWidth > 600) {
  const footerOrder = document.querySelector('.footer__order');
  const mapItem = document.querySelector('.map__map-item').firstElementChild;

  mapItem.width = footer.offsetWidth - footerOrder.offsetWidth;
};

if (footer.offsetWidth <= 600) {
  const mapItem = document.querySelector('.map__map-item').firstElementChild;

  mapItem.width = footer.offsetWidth;
}

// footer navigation

const footerNavBtn = document.querySelector('.nav__btn');

footerNavBtn.addEventListener('click', () => {
  const footerNavigation = document.querySelector('.nav');

  footerNavigation.classList.toggle('nav_active');
  footerNavBtn.classList.toggle('nav__btn_active');
});
