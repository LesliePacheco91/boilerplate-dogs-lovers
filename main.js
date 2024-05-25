//para poder ejecutar mediante un servidor local instalar: npm install serve --save-dev despues ejecuar mediante npm start.

import data from './data.js';

const arrayData = data.dogs;

const ul = document.querySelector('#list_card');

arrayData.forEach((item) => {
    console.log(item);

    const li = document.createElement('li');
    li.setAttribute('class', 'card-item');

    const data_img = document.createElement("img");
    data_img.src = item.image;

    const name = document.createElement("p");
    name.textContent= item.breed;

    li.appendChild(data_img);
    li.appendChild(name);
    
    ul.appendChild(li);

});

