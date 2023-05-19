const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('ul');

const li = document.createElement("li");

const x = document.createElement("button");



function addToList() {
    li.textContent= input.value;

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