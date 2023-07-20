const fruitURL = 'json/fruits.json';
const container1 = document.querySelector('.fruit1');
const container2 = document.querySelector('.fruit2');
const container3 = document.querySelector('.fruit3');
let fruitsList = [];
let data;

async function getFruitData(fruitURL) {
    const response = await fetch(fruitURL);
    if(response.ok) {
        data = await response.json();
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



// display inputs
let displayInput = () => {
    //personal info
    const n = document.querySelector('.first-name').value;
    const e = document.querySelector('.email').value;
    const p = document.querySelector('.phone').value;
    //fruits
    const f1 = document.querySelector('.fruit1').value;
    const f2 = document.querySelector('.fruit2').value;
    const f3 = document.querySelector('.fruit3').value;
    //add to list to get nutritional value
    fruitsList.push(f1);
    fruitsList.push(f2);
    fruitsList.push(f3);
    console.log(fruitsList);

    //get nutritional value of fruits
        

    
    // nutritionalInfo(data.fruits, fruitsList);


    
    const output = document.querySelector('.order-output');
    let special = document.querySelector('.special').value;





    output.style.marginTop = "100px";

        let fullInfo = `Name: ${n}<br>Email: ${e}<br>Phone: ${p}<br>${f1},  ${f2},  ${f3}<br>${special}`;
        output.innerHTML = `<h3>Thanks for your order!</h3>${fullInfo}`;


}

// let nutritionalInfo = (fruitData, fruitsList) => {
//     let totalCarbs = 0;
//     // let index = 0;
//     // let totalPro = 0;
//     // let totalFat = 0;
//     // let totalCals = 0;
//     // let totalSug = 0;

//     fruitData.forEach(fruit => {
//         fruitsList.forEach(userFruit => {
//             if (fruit == userFruit) {
//                 totalCarbs += parseInt(fruit.nutritions.carbohydrates);
//                 console.log(totalCarbs);
//                 // let protein = fruit.nutritions.protein;
//                 // let fat = fruit.nutritions.fat;
//                 // let cals = fruit.nutritions.calories;
//                 // let sugar = fruit.nutritions.sugar;
                
//             }
//             // index += 1;
//         });

//     });
// }













