'use strict';

//about

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
