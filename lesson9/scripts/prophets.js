const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData(url) {
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
    console.table(data.prophets);
    createCards(data.prophets);
    }
}

getProphetData(url);

const createCards = (prophet) => {
    const cards = document.querySelector('.cards');

    prophet.forEach((prophet) => {
        let container = document.createElement('section');
        let name = document.createElement('h2');
        let birthDate = document.createElement('p');
        let picture = document.createElement('img');
        let ordinal;

        name.textContent = `${prophet.name} ${prophet.lastname}`;
        console.log(name);
        birthDate.innerHTML = `Born ${prophet.birthdate}<br>in ${prophet.birthplace}`;

        picture.setAttribute('src', prophet.imageurl);
        if (prophet.order == '1') {
            let ordinal = 'st';
        }
        if (prophet.order == '2') {
            let ordinal = 'nd';
        }
        else {
            let ordinal = 'th';
        }
        picture.setAttribute('alt', `${prophet.firstname} ${prophet.lastname}, ${prophet.order}${ordinal} of The Church of Jesus Christ of Latter-Day Saints`);
        console.log('alt');

        container.appendChild(name);
        container.appendChild(birthDate);
        container.appendChild(picture);

        cards.appendChild(container);
    })
}