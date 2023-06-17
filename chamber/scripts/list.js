const busInfo = 'https://kailamcd.github.io/wdd230/chamber/json/data.json';


async function getListData(busInfo) {
    const response = await fetch(busInfo);
    if (response.ok) {
        const data = await response.json();
        console.table(data.businesses);
        createList(data.businesses);
    }
}

getListData(busInfo);

const createList = (business) => {
    const table = document.querySelector('#business-cards');
    table.style.display = 'block';
    table.style.border = "2px solid #097b02"
    table.style.maxWidth = 'fit-content';
    let heading = document.createElement('tr');
    let nameHead = document.createElement('th');
    let addHead = document.createElement('th');
    let phoneHead = document.createElement('th');
    let webHead = document.createElement('th');

    nameHead.textContent = 'Name';

    if (window.innerWidth < 300) {
        
    }
    addHead.textContent = 'Address';
    phoneHead.textContent = 'Phone Number';
    webHead.textContent = 'Website';

    heading.appendChild(nameHead);
    heading.appendChild(addHead);
    heading.appendChild(phoneHead);
    heading.appendChild(webHead);

    table.appendChild(heading);

    business.forEach(business => {
        let row = document.createElement('tr');
        let compName = document.createElement('th');
        let address = document.createElement('td');
        let phoneNum = document.createElement('td');
        let website = document.createElement('td');

        compName.innerHTML = `${business.name}`;
        address.innerHTML = `${business.address}`;
        phoneNum.textContent = `${business.phone}`;
        website.innerHTML = `<a href='${business.url}'>${business.url}</a>`;
        website.style.textAlign = 'center';

        row.appendChild(compName);
        row.appendChild(address);
        row.appendChild(phoneNum);
        row.appendChild(website);

        table.appendChild(row);
    });
}