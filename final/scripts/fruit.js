const fruitURL = 'json/fruits.json';
const container1 = document.querySelector('.fruit1');
const container2 = document.querySelector('.fruit2');
const container3 = document.querySelector('.fruit3');

async function getFruitData(fruitURL) {
    const response = await fetch(fruitURL);
    if(response.ok) {
        const data = await response.json();
        console.table(data.fruits);
        createOption(data.fruits, container1);
        createOption(data.fruits, container2);
        createOption(data.fruits, container3);

    }
}

getFruitData(fruitURL);

const createOption = (fruit, container) => {

    fruit.forEach((fruit) => {
            
        let fruitName = document.createElement('option');

        fruitName.textContent = `${fruit.name}`;

        container.appendChild(fruitName);

    });
}
