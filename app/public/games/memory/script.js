var points = 0;
const cardArray = [
    {
        name: 'Kopius1',
        img: 'images/Kopius1.png'
    },
    {
        name: 'Kopius2',
        img: 'images/Kopius2.png'
    },
    {
        name: 'Kopius3',
        img: 'images/Kopius3.png'
    },
    {
        name: 'Kopius4',
        img: 'images/Kopius4.png'
    },
    {
        name: 'Kopius5',
        img: 'images/Kopius5.png'
    },
    {
        name: 'Kopius6',
        img: 'images/Kopius6.png'
    },
    {
        name: 'Kopius7',
        img: 'images/Kopius7.png'
    },
    {
        name: 'Kopius8',
        img: 'images/Kopius8.png'
    },
    {
        name: 'Kopius9',
        img: 'images/Kopius9.png'
    },
    {
        name: 'Kopius10',
        img: 'images/Kopius10.png'
    },
];


let cardSpawner = () => {
    let index = 0;
    const numberOfCards = 20;
    for(let i=0;i<numberOfCards;i++){
        const max = 9;
        let card = document.createElement('div');
        card.className = 'card-wrapper';
        card.setAttribute('data-name',cardArray[index].name);
        card.innerHTML = `<div class="card-front"><img src="${cardArray[index].img}" width="100%"></div><div class="card-back"></div>`;
        document.getElementById('grid').appendChild(card);
        index++;
        if(index>9){index=0};
    }
}

cardSpawner();





//Timer function

let timerWin = false;
let timeLimit = 59; //time limit in seconds

let timer = () => {
    let mil = 0;
    let sec = 0;
    let timeRemaining = 0;
    
    let interval = setInterval(() => {
        mil+=10;
        if(mil==1000){
            mil=0;
            sec++;
        }
        timeRemaining = timeLimit-sec;
        if(timeRemaining==0||timerWin==true){
            clearInterval(interval);
            youLoose();
        }
        document.getElementById('time').innerHTML = `Time:<br>${timeRemaining}:${mil/10}`
    },10);
}




//Main gameplay logic

let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;
const cardsList = document.querySelectorAll('.card-wrapper');

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    this.classList.add('flip');

    if(!hasFlipped){
        hasFlipped = true;
        firstCard = this;
    }
    else{
        hasFlipped = false;
        secondCard = this;

        checkForMatch();
    }

    let count = 0;
    for(let i=0;i<cardsList.length;i++){
        if(cardsList[i].classList.contains('flip')){
            count++;
        }
    }

    if(count==cardsList.length){
        setTimeout(() => {
            youWin();
        },500);
    }
}

let checkForMatch = () => {
    firstCard.dataset.name === secondCard.dataset.name ? disableCards() : unflipCards();
}

let disableCards = () => {
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
}

let unflipCards = () => {
    lockBoard = true;
    points += 10;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBaord();
    },700)
}

let resetBaord = () => {
    hasFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}


let youWin = () => {
    console.log('you win');
    document.getElementById('you-win').style.display = 'flex'
    document.getElementById('points-win').innerHTML="Your points are "+ points;
    timerWin = true;
    window.parent.postMessage({winner:true, points: points}, '*');
}

let youLoose = () => {
    console.log('you loose');
    document.getElementById('you-loose').style.display = 'flex'
    document.getElementById('points-lose').innerHTML="Your points are "+ points;
    window.parent.postMessage({winner:true, points: points}, '*');
}


//Function to shuffle the cards each time the webpage is reloaded
(function shuffle (){
    cardsList.forEach(cardsList => {
        let randomPos = Math.floor(Math.random()*20);
        cardsList.style.order = randomPos;
    });
})();


cardsList.forEach(cardsList => cardsList.addEventListener('click',flipCard));


//Function to start the game
function play(){
    document.getElementById('welcome-screen').style.display = 'none';
    points=0;
    timer();
}