"use strict";

const player1 = {
    name: 'Vasya',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['bow', 'sword', 'staff', 'dagger'],
    attack: function () {
        console.log(`${player1.name}` + ' Fight...');
    }
};

const player2 = {
    name: 'Petya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['bow', 'sword', 'staff', 'dagger'],
    attack: function () {
        console.log(`${player2.name}` + ' Fight...');
    }
};

function createPlayer(player, objPlayer) {
    const player1Div = document.createElement('div'),
          progressbar = document.createElement('div'),
          character = document.createElement('div'),
          life = document.createElement('div'),
          nameDiv = document.createElement('div'),
          img = document.createElement('img');

    player1Div.classList.add(player);
    player1Div.appendChild(progressbar);
    progressbar.classList.add('progressbar');
    player1Div.appendChild(character);
    character.classList.add('character');
    progressbar.appendChild(life);
    life.classList.add('life');
    life.style.width = `${objPlayer.hp}%`;
    progressbar.appendChild(nameDiv);
    nameDiv.classList.add('name');
    nameDiv.innerText = objPlayer.name;
    character.appendChild(img);
    img.src=objPlayer.img;
    document.getElementsByClassName('arenas')[0].appendChild(player1Div);
}

createPlayer('player1', player1);
createPlayer('player2', player2);