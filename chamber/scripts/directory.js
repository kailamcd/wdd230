const busInfo = 'https://kailamcd.github.io/wdd230/chamber/json/data.json';

async function getBusData(busInfo) {
    const response = await fetch(busInfo);
    if (response.ok) {
        const data = await response.json();
        console.log(data.businesses);
    }
}