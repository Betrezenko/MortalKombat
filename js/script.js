"use strict";

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Vasya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['bow', 'sword', 'staff', 'dagger'],
    attack: function () {
        console.log(`${player1.name}` + ' Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'Petya',
    hp: 100,
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

function changeHP(player){
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    
    console.log('1. ' + player1.hp + ' 2. ' + player2.hp);
    
    let $kick = Math.ceil(Math.random() * 20);
    
    console.log($kick);
    
    if (player.hp - $kick > 0) {
        player.hp -= $kick;
    } else {
        function whoWon() {
            if (player1.hp > 0) {
                $arenas.appendChild(playerLose(player1.name));
            } else {
                $$arenas.appendChild(playerLose(player2.name));
            }
        }
        whoWon();
        player.hp = 0;
        $randomButton.disabled = true;
    }
    
    console.log('1. ' + player1.hp + ' 2. ' + player2.hp);
    
    $playerLife.style.width = player.hp + '%';
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' wins';
    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));