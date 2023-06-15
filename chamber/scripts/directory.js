const busInfo = 'https://kailamcd.github.io/wdd230/chamber/json/data.json';


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

        busName.innerHTML = `${business.name}`;

        icon.setAttribute('src', business.logo);
        icon.setAttribute('alt', `Logo for ${business.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '100');
        icon.setAttribute('height', '100');

        

        fullInfo.innerHTML = `${business.address}<br>${business.phone}<br>${business.url}<p>${business.other}</p>`;


        container.appendChild(icon);
        container.appendChild(busName);
        container.appendChild(fullInfo);

        cards.appendChild(container);
        
    });
}