"use strict";

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Vasya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['bow', 'sword', 'staff', 'dagger'],
    attack,
    changeHP,
    elHP,
    renderHP
};

const player2 = {
    player: 2,
    name: 'Petya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['bow', 'sword', 'staff', 'dagger'],
    attack,
    changeHP,
    elHP,
    renderHP
};

function attack() {
    console.log(this.name + ' Fight...');
}

function elHP(){
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function changeHP($kick){
    this.hp -= $kick;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}

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

function getRandom(num) {
    let $kick = Math.ceil(Math.random() * num);
    return $kick;
}

function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    if (name) {
        $loseTitle.innerText = name + ' wins';
    } else {
        $loseTitle.innerText = 'Draw';
    }
    
    return $loseTitle;
}

function createReloadButton(){
    const $reloadDiv = createElement('div', 'reloadWrap'),
          $reloadBtn = createElement('button', 'button');
    
    $reloadDiv.appendChild($reloadBtn);
    $reloadBtn.innerText = 'Reload';

    return $reloadDiv;
}

$randomButton.addEventListener('click', function() {
    player1.changeHP(getRandom(20));
    player1.renderHP();
    player2.changeHP(getRandom(20));
    player2.renderHP();

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        const $reloadButton = createReloadButton();
        
        $reloadButton.addEventListener('click', function() {
            window.location.reload();
        });
    
        $arenas.appendChild($reloadButton);
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name));
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin());
    }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));