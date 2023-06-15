const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
    createCards(data.prophets);
    }
}

getProphetData(url);

const createCards = (prophet) => {
    const cards = document.querySelector('.cards');

    prophet.forEach((prophet) => {
        let container = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthInfo = document.createElement('p');
        let picture = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthInfo.innerHTML = `Born ${prophet.birthdate}<br>in ${prophet.birthplace}`;

        picture.setAttribute('src', prophet.imageurl);
        if (prophet.order == 1) {
            ordinal = 'st';
        }
        else if (prophet.order == 2) {
            ordinal = 'nd';
        }
        else {
            ordinal = 'th';
        }

        picture.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}, ${prophet.order}${ordinal} prophet of The Church of Jesus Christ of Latter-Day Saints`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '340');
        picture.setAttribute('height', '440');

        container.appendChild(fullName);
        container.appendChild(birthInfo);
        container.appendChild(picture);

        cards.appendChild(container);
    })
}