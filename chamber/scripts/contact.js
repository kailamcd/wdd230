const contactInfo = 'json/contact.json';

async function getContactData(contactInfo) {
    const response = await fetch(contactInfo);
    if (response.ok) {
        const data = await response.json();
        createContacts(data.contacts);
    }
}

getContactData(contactInfo);

const createContacts = (contact) => {
    const people = document.querySelector('#people');

    contact.forEach(contact => {
        let personName = document.createElement('h3');
        let phoneNum = document.createElement('p');
        let email = document.createElement('p');

        personName.innerHTML = `${contact.name}`;
        phoneNum.innerHTML = `${contact.phone}`;
        email.innerHTML = `${contact.email}`;

        people.appendChild(personName);
        people.appendChild(phoneNum);
        people.appendChild(email);
    });
}