const date = new Date();
const year = date.getFullYear();
document.querySelector('#theyear').textContent = year;
document.querySelector('#lastmod').textContent = document.lastModified;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};