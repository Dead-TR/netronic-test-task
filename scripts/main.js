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

  overlap.style = `display: ${overlapAction}`;
  videoObj.style = `display: ${videoAction}`;
};

videoLink.addEventListener('click', () => {
  videoDisplay('flex', 'block');
});

crossVideo.addEventListener('click', () => {
  videoDisplay('none', 'none');
});
