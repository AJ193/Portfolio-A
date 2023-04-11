const openHam = document.getElementById('openHam');
const closeHam = document.getElementById('closeHam');
const menuLinks = document.querySelectorAll('.link');
const navOpen=document.querySelector('.nav-open');

openHam.addEventListener('click', () => {
  navOpen.classList.toggle('show');

  openHam.classList.add('hide');
  closeHam.classList.remove('hide');
});

closeHam.addEventListener('click', () => {
  navOpen.classList.toggle('show');

  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
});

menuLinks.forEach((link) => link.addEventListener('click', () => {
  navOpen.classList.remove('show');
  openHam.classList.remove('hide');
  closeHam.classList.add('hide');
}));
