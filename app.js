const nav = document.querySelector('.nav-open');
const burgerMenu = document.querySelector('.navbar-list-item');
const handleNavClick = () => {
  nav.classList.toggle('toggle');
  // burgerMenu.classList.toggle('rotate');
  // console.log("hi");
};
// console.log(nav);
burgerMenu.addEventListener('click', handleNavClick);
// const handleLinkClick = () => {
//   nav.classList.toggle('toggle');
//   burgerMenu.classList.toggle('rotate');
// links.forEach((lin) => {
//   lin.addEventListener('click', handleLinkClick);
// });