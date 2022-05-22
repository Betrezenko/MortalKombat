"use strict";

const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'Vasya',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['bow', 'sword', 'staff', 'dagger'],
    attack: function () {
        console.log(`${player1.name}` + ' Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'Petya',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['bow', 'sword', 'staff', 'dagger'],
    attack: function () {
        console.log(`${player2.name}` + ' Fight...');
    }
};

function createElement(tag, className){
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(objPlayer) {
    const $player = createElement('div', 'player'+objPlayer.player),
          $progressbar = createElement('div', 'progressbar'),
          $character = createElement('div', 'character'),
          $life = createElement('div', 'life'),
          $name = createElement('div', 'name'),
          $img = createElement('img');

    $life.style.width = objPlayer.hp +'%';
    $name.innerText = objPlayer.name;
    $img.src=objPlayer.img;
    
    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));