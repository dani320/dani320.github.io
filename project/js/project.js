const date = new Date();
const year = date.getFullYear();
document.querySelector('#theyear').textContent = year;
document.querySelector('#lastmod').textContent = document.lastModified;

function openMenu() {
    const mainnav = document.querySelector(".nonResponsive");
    const menup = document.querySelector(".open");
  
    mainnav.classList.toggle("responsive");
    menup.classList.toggle("close");
  }