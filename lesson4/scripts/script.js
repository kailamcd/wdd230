const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');

const li = document.createElement("li");

const x = document.createElement("button");

let index = 0;



function addToList() {
    index += 1;
    console.log(index);
    const li = document.createElement("li");
    li.textContent= input.value;

    const x = document.createElement("button");
    x.textContent = "❌";

    li.appendChild(x);
    list.appendChild(li);

    input.value = '';
    input.focus();

    x.addEventListener('click', removeItem);
    
}

function removeItem() {
    list.remove(li);
}

button.addEventListener('click', addToList);

