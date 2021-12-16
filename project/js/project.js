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




  const requestURL = 'https://raw.githubusercontent.com/dani320/dani320.github.io/master/project/json/project.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const directory = jsonObject['directory'];
    directory.forEach((directory) => {
        let card = document.createElement('section');
        
        let business = document.createElement('h2')
        let phone = document.createElement('h4');
        let address = document.createElement('h4');
        let email = document.createElement('h4');

        business.innerHTML = `${directory.businessname} `;
        phone.innerHTML = `Phone number: ${directory.phonenumber}`;
        address.innerHTML = `Address: ${directory.address}`;
        email.innerHTML = `Email: ${directory.email}`;


        card.appendChild(business);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(email);

        document.querySelector('div.cards').appendChild(card);
        });
    });

  