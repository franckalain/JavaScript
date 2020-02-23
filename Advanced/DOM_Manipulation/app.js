var scores, roundScore, activePlayer;

score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. random number
    var dice = Math.floor(Math.random() * 6 + 1);
    // 2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block'; 
    diceDOM.src = 'dice-' + dice + '.png';
    // update the round score If the rolled number is not 1
    if (dice !== 1){
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        // next 
        nextPlayer();

       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('.player-1-panel').classList.add('active');
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add current score to glabal score
    scores[activePlayer] += roundScore;

    // update the UI
    document.querySelector('score-' + activePlayer).textContent = scores[activePlayer];

    // check if the player won the game
    nextPlayer();
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('dice').style.display = 'none';
}


// document.querySelector('#current-' + activePlayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);