//EJERCICIO 1
const backgroundColorBtn = document.getElementById('background-color-btn');

backgroundColorBtn.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = color;
});

//EJERCICIO 2
const counter = document.getElementById('counter');
const addBton = document.getElementById('add-btn');
const substractBtn = document.getElementById('substract-btn');

let count = 0;

addBton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

substractBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

//EJERCICIO 3
const toggleBtn = document.getElementById('toggle-btn');
const paragraph = document.getElementById('paragraph');

toggleBtn.addEventListener('click', function () {
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        toggleBtn.textContent = 'Hide text';
    } else {
        paragraph.style.display = 'none'
        toggleBtn.textContent = 'Show text'
    }
}
);

//EJERCICIO 4
const deleteBtn = document.getElementById('delete-btn');

deleteBtn.addEventListener('click', function () {
    const listItems = document.querySelectorAll('li');

    if (listItems.length > 0) {
        listItems[0].remove();
    }
});
//EJERCICIO 5

const ul = document.querySelector('#ejercicio-5 ul');
console.log(ul);
const addTextButtons = document.querySelectorAll('.paragraph-container button');
console.log(addTextButtons);
addTextButtons.forEach(button => {
    button.addEventListener('click', function () {
        const texto = this.previousElementSibling.textContent;
        const li = document.createElement('li');
        li.textContent = texto;
        ul.appendChild(li);
    });
});

//EJERCICIO 6
const squareContainer = document.getElementById('square-container');
const addBtn = document.querySelector('button');

squareContainer.addEventListener('click', event => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains('square')) {
        clickedElement.remove();
    }
});

addBtn.addEventListener('click', () => {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    squareContainer.appendChild(newSquare);
});


//EJERCICIO 7
const blueBtn = document.querySelector('#blue_btn');
const redBtn = document.querySelector('#red_btn');
const greenBtn = document.querySelector('#green_btn');
const blackBtn = document.querySelector('#black_btn');
const purpleBtn = document.querySelector('#purple_btn');

const colorDiv = document.querySelector('.color-div');

blueBtn.addEventListener('click', () => {
    colorDiv.style.backgroundColor = 'blue';
});

redBtn.addEventListener('click', () => {
    colorDiv.style.backgroundColor = 'red';
});

greenBtn.addEventListener('click', () => {
    colorDiv.style.backgroundColor = 'green';
});

blackBtn.addEventListener('click', () => {
    colorDiv.style.backgroundColor = 'black';
});

purpleBtn.addEventListener('click', () => {
    colorDiv.style.backgroundColor = 'purple';
});

//EJERCICIO 8
const faqBtn = document.querySelector('#faq-title button');
const faqText = document.querySelector('#faq-card p');

faqBtn.addEventListener('click', () => {
    if (faqText.classList.contains('hidden')) {
        faqText.classList.remove('hidden');
        faqBtn.textContent = 'Close';
    } else {
        faqText.classList.add('hidden');
        faqBtn.textContent = 'Open';
    }
});

//EJERCICIO 9
//cafe altura
//EJERCICIO 10
// Este array debe usarse para el ejercicio 10
const data = [
    { id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
    { id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
    { id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
    { id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
    { id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
    { id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
    { id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
    { id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
    { id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
    { id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
    { id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
    { id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]

const objetosContainer = document.getElementById('objetos-container');


data.forEach(objeto => {

    const div = document.createElement('div');
    const span = document.createElement('span');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    span.textContent = objeto.id;
    h4.textContent = objeto.name;
    img.src = objeto.img;
    div.appendChild(span);
    div.appendChild(h4);
    div.appendChild(img);
    objetosContainer.appendChild(div);
});