const busInfo = 'https://kailamcd.github.io/wdd230/chamber/json/data.json';

console.log('js connected');

async function getBusData(busInfo) {
    const response = await fetch(busInfo);
    if (response.ok) {
        const data = await response.json();
        console.log(data.businesses);
        createCards(data.businesses);
    }
}

getBusData(busInfo);

const createCards = (business) => {
    const cards = document.querySelector('#business-cards');

    business.forEach(business => {
        let container = document.createElement('section');
        let icon = document.createElement('img');
        let busName = document.createElement('h2');
        let fullInfo = document.createElement('p');
        console.log(business.logo);
        icon.setAttribute('src', business.logo);
        icon.setAttribute('alt', `Logo for ${business.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '200');
        icon.setAttribute('height', '200');

        container.appendChild(icon);
        container.appendChild(busName);
        container.appendChild(fullInfo);

        cards.appendChild(container);
        
    });
}