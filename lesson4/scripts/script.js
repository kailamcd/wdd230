const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');

const li = document.createElement("li");

const x = document.createElement("button");



function addToList() {
    const li = document.createElement("li");
    li.textContent= input.value;

    const x = document.createElement("button");
    x.textContent = "❌";

    li.appendChild(x);
    list.appendChild(li);

    input.value = '';
    input.focus();
    
}

function removeItem() {
    list.remove(li);
}

button.addEventListener('click', addToList);

x.addEventListener('click', removeItem);