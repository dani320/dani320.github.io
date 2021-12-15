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




  const requestURL = 'https://raw.githubusercontent.com/dani320/dani320.github.io/6227a94c04f28ac37c39d4d15262216e6d0a988c/project/json/prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth = document.createElement('h4');
        let place = document.createElement('h4');
        let img = document.createElement('img');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        place.innerHTML = `Place of Birth: ${prophet.birthplace}`;
        img.setAttribute('src', `${prophet.imageurl}`);
        img.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);


        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
        });
    });

  