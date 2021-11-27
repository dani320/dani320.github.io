const date = new Date();
const year = date.getFullYear();
document.querySelector('#theyear').textContent = year;
document.querySelector('#lastmod').textContent = document.lastModified;