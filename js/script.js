'use strict';

// DOM elements select
const navLinkElement = document.querySelector('.mainmenu__bar');

////////////////////section navigation///////////////////////
// section navigation with regular function
// const sectionNavigate = function (eve) {
//   eve.preventDefault();
//   if (eve.target.classList.contains('mainmenu__item')) {
//     const attrElement = eve.target.getAttribute('href');
//     document.querySelector(attrElement).scrollIntoView({ behavior: 'smooth' });
//   }
// };
// navLinkElement.addEventListener('click', sectionNavigate);

// section navigation with arrow function
const sectionNavigate = eve => {
  eve.preventDefault();
  if (eve.target.classList.contains('mainmenu__item')) {
    const attrElement = eve.target.getAttribute('href');
    document.querySelector(attrElement).scrollIntoView({ behavior: 'smooth' });
  }
};
navLinkElement.addEventListener('click', sectionNavigate);
