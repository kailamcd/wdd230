

const spotInfo = 'https://kailamcd.github.io/wdd230/chamber/json/data.json';
var spotList = [];

async function getSpotInfo(spotInfo) {
    const response = await fetch(spotInfo);
    if (response.ok) {
        const data = await response.json();
        createSpotList(data.businesses);
        createSpotlight(spotList);
    }
}



getSpotInfo(spotInfo);

const createSpotList = (business) => {


    business.forEach(business => {
        if (business.level == "gold" || business.level == "silver") {
            
            spotList.push(business);
            console.log(spotList);


        }

    });

}

const createSpotlight = (spotList) => {

    spotList.forEach(spotList => {
        const spotlights = document.querySelector('#spotlight-grid');

        let container = document.createElement('figure');
        let icon = document.createElement('img');
        let busName = document.createElement('h3');
        let website = document.createElement('figcaption');
        // let memLevel = document.createElement('p');
    
        busName.innerHTML = `${spotList.name}`;
    
        icon.setAttribute('src', spotList.logo);
        icon.setAttribute('alt', `Logo for ${spotList.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '100');
        icon.setAttribute('height', '100');
        icon.setAttribute('id', 'home-logo');
    
        website.innerHTML = `<a href="${spotList.url}">${spotList.url}</a>`;
        
        container.appendChild(icon);
        container.appendChild(busName);
        container.appendChild(website);
        // container.appendChild(memLevel);
    
        spotlights.appendChild(container);
    });
            

}
