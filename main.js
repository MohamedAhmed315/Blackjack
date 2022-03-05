// Variables
const dealer = document.getElementById("dealer");
const player = document.getElementById("player");
const playAgain = document.getElementById('play-again');
const hitBtn = document.getElementById("hit-btn");
const stayBtn = document.getElementById("stay-btn");
let dealer_score = document.getElementById("dealer-score");
let player_score = document.getElementById("player-score");
let blankCard = document.getElementsByClassName('playing-card');
let selectedCard = 0;
let cardScore = 0;
let nobleCards = ['K-of-hearts', 'K-of-clubs', 'K-of-diamonds', 'K-of-spades', 'Q-of-hearts', 'Q-of-diamonds', 'Q-of-spades', 'J-of-hearts', 'J-of-clubs', 'J-of-diamonds', 'J-of-spades', 'Q-of-clubs'];
let deck = ['1-of-hearts', '1-of-diamonds', 'J-of-spades', 'Q-of-clubs', 'K-of-diamonds', '1-of-clubs', '1-of-diamonds', '1-of-spades', '2-of-hearts', '2-of-clubs', '2-of-diamonds', '2-of-spades', '3-of-spades', '3-of-hearts', '3-of-clubs', '3-of-diamonds', '4-of-spades', '4-of-hearts', '4-of-clubs', '4-of-diamonds', '5-of-spades', '5-of-hearts', '5-of-clubs', '5-of-diamonds', '6-of-spades', '6-of-hearts', '6-of-clubs', '6-of-diamonds', '7-of-spades', '7-of-hearts', '7-of-clubs', '7-of-diamonds', '8-of-spades', '8-of-hearts', '8-of-clubs', '8-of-diamonds', '9-of-spades', '9-of-hearts', '9-of-clubs', '9-of-diamonds', '10-of-spades', '10-of-hearts', '10-of-clubs', '10-of-diamonds', 'K-of-hearts', 'K-of-clubs', 'K-of-diamonds', 'K-of-spades', 'Q-of-hearts', 'Q-of-diamonds', 'Q-of-spades', 'J-of-hearts', 'J-of-clubs', 'J-of-diamonds'];
let closeX = document.getElementsByClassName("close")[0];
let modal_popup = document.getElementById("modal-popup");
let modal_content = document.getElementsByClassName("modal-content")[0];
let winner = document.getElementById("winner");
let modal_text = document.getElementById("modal-text");
let arrow = document.getElementsByClassName("arrow")[0];

// Draw card
function draw_card() {
    selectedCard = deck[Math.floor(Math.random() * deck.length)];
    deck.splice(deck.indexOf(selectedCard), 1);
    const card = document.createElement("div");
    const cardNumber = document.createElement("p");
    card.classList.add("playing-card");
    card.appendChild(cardNumber);
    switch (selectedCard) {
        case '1-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/04/ace-28357_960_720.png)";
            cardScore = 1;
            break;
        case '1-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/56/ace-28331_960_720.png)";
            cardScore = 1;
            break;
        case '1-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/56/ace-28331_960_720.png)";
            cardScore = 1;
            break;
        case '1-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2014/03/25/17/01/spades-297839_960_720.png)";
            cardScore = 1;
            break;
        case '2-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/44/two-28296_960_720.png)";
            cardScore = 2;
            break;
        case '2-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/15/clubs-28387_960_720.png)";
            cardScore = 2;
            break;
        case '2-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/41/diamonds-28283_960_720.png)";
            cardScore = 2;
            break;
        case '2-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/49/spades-28311_960_720.png)";
            cardScore = 2;
            break;
        case '3-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/44/hearts-28297_960_720.png)";
            cardScore = 3;
            break;
        case '3-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/53/clubs-28324_960_720.png)";
            cardScore = 3;
            break;
        case '3-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/57/three-28337_960_720.png)";
            cardScore = 3;
            break;
        case '3-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/07/spades-28365_960_720.png)";
            cardScore = 3;
            break;
        case '4-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/02/four-28351_960_720.png)";
            cardScore = 4;
            break;
        case '4-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/38/four-28272_960_720.png)";
            cardScore = 4;
            break;
        case '4-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/41/diamonds-28285_960_720.png)";
            cardScore = 4;
            break;
        case '4-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/08/spades-28366_960_720.png)";
            cardScore = 4;
            break;
        case '5-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/03/hearts-28352_960_720.png)";
            cardScore = 5;
            break;
        case '5-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/54/five-28326_960_720.png)";
            cardScore = 5;
            break;
        case '5-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/58/five-28339__340.png)";
            cardScore = 5;
            break;
        case '5-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/08/spades-28367__340.png)";
            cardScore = 5;
            break;
        case '6-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/24/hearts-28417__340.png)";
            cardScore = 6;
            break;
        case '6-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/54/six-28327__340.png)";
            cardScore = 6;
            break;
        case '6-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/58/six-28340__480.png)";
            cardScore = 6;
            break;
        case '6-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/08/spades-28368__340.png)";
            cardScore = 6;
            break;
        case '7-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/03/hearts-28354__340.png)";
            cardScore = 7;
            break;
        case '7-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/54/seven-28328_960_720.png)";
            cardScore = 7;
            break;
        case '7-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/59/seven-28341__340.png)";
            cardScore = 7;
            break;
        case '7-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/09/spades-28369__340.png)";
            cardScore = 7;
            break;
        case '8-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/04/eight-28355__480.png)";
            cardScore = 8;
            break;
        case '8-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/17/eight-28393__340.png)";
            cardScore = 8;
            break;
        case '8-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/59/eight-28342_960_720.png)";
            cardScore = 8;
            break;
        case '8-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/09/spades-28370__340.png)";
            cardScore = 8;
            break;
        case '9-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/04/nine-28356__480.png)";
            cardScore = 9;
            break;
        case '9-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/55/nine-28330__340.png)";
            cardScore = 9;
            break;
        case '9-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/43/diamonds-28290_960_720.png)";
            cardScore = 9;
            break;
        case '9-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/51/spades-28317__340.png)";
            cardScore = 9;
            break;
        case '10-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/01/ten-28348__480.png)";
            cardScore = 10;
            break;
        case '10-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/14/clubs-28386__340.png)";
            cardScore = 10;
            break;
        case '10-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/57/ten-28335__340.png)";
            cardScore = 10;
            break;
        case '10-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/14/clubs-28386__340.png)";
            cardScore = 10;
            break;
        case 'K-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/05/hearts-28359__340.png)";
            cardScore = 10;
            break;
        case 'K-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/56/king-28333__340.png)";
            cardScore = 10;
            break;
        case 'K-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/44/card-28293__340.png)";
            cardScore = 10;
            break;
        case 'K-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/11/king-28374__340.png)";
            cardScore = 10;
            break;
        case 'Q-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/06/hearts-28360__340.png)";
            cardScore = 10;
            break;
        case 'Q-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/57/clubs-28334__340.png)";
            cardScore = 10;
            break;
        case 'Q-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/01/queen-28347__340.png)";
            cardScore = 10;
            break;
        case 'Q-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/11/spades-28375__340.png)";
            cardScore = 10;
            break;
        case 'J-of-hearts':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/05/hearts-28358__340.png)";
            cardScore = 10;
            break;
        case 'J-of-clubs':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/13/56/jack-28332__340.png)";
            cardScore = 10;
            break;
        case 'J-of-diamonds':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/00/jack-28345__340.png)";
            cardScore = 10;
            break;
        case 'J-of-spades':
            card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2012/04/11/14/10/spades-28373__340.png)";
            cardScore = 10;
            break;
        default:
            break;
    }
    return card;
}

// Blank card
function blank_card() {
    const card = document.createElement("div");
    const cardNumber = document.createElement("p");
    card.classList.add("playing-card");
    card.appendChild(cardNumber);
    card.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/10/15/18/49/frame-3749726__340.jpg)";
    card.style.animationName = "draw-card";
    return card;
}

// View modal
function view_modal(text) {
    modal_popup.style.display = "block";
    winner.innerHTML = text;
    modal_content.style.animationName = "modal-board";
    modal_text.innerHTML = 'Press "Space" to play again or the close icon to view board.';
    arrow.style.display = "block";
    hitBtn.disabled = true;
    stayBtn.disabled = true;

    document.body.onkeyup = function (e) {
        if (e.key === " ") {
            e.preventDefault();
            modal_popup.style.display = "none";
            window.location.reload();
        }
    }
}

// Game initialize
window.onload = function game_init() {

    // Play again button
    playAgain.addEventListener("click", function () {
        window.location.reload();
    });

    // Dealer starting cards
    dealer.appendChild(draw_card()).style.animationName = "draw-card";
    dealer_score.innerHTML = parseInt(dealer_score.innerHTML) + cardScore;

    setTimeout(() => {
        dealer.appendChild(blank_card());
    }, 100);

    // Player starting cards
    let playerFirstCard, playerSecondCard;
    player.appendChild(draw_card()).style.animationName = "draw-card";

    player_score.innerHTML = parseInt(player_score.innerHTML) + cardScore;
    playerFirstCard = selectedCard;

    setTimeout(() => {
        player.appendChild(draw_card()).style.animationName = "draw-card";
        player_score.innerHTML = parseInt(player_score.innerHTML) + cardScore;
        playerSecondCard = selectedCard;
        //Blackjack
        if (nobleCards.includes(playerFirstCard) || nobleCards.includes(playerSecondCard)) {
            if (playerFirstCard == '1-of-hearts' || playerFirstCard == '1-of-clubs' || playerFirstCard == '1-of-diamonds' || playerFirstCard == '1-of-spades' || playerSecondCard == '1-of-hearts' || playerSecondCard == '1-of-clubs' || playerSecondCard == '1-of-diamonds' || playerSecondCard == '1-of-spades') {
                player_score.style.color = "gold";
                player_score.innerHTML = "BlackJack";
                setTimeout(() => {
                    view_modal("You win");
                    document.getElementById("blackjack").style.display = "block";
                    confetti();
                }, 1000);
            }
        }
    }, 100);

    // Hit button
    hitBtn.addEventListener("click", function () {
        player.appendChild(draw_card()).style.animationName = "draw-card";
        player_score.innerHTML = parseInt(player_score.innerHTML) + cardScore;
        if (parseInt(player_score.innerHTML) > 21) {
            player_score.style.color = "red";
            dealer_score.style.color = "gold";
            setTimeout(() => {
                view_modal("You lose");
            }, 1000);
        }
        // player scores 21
        if (player_score.innerHTML == 21) {
            player_score.style.color = "gold";
            setTimeout(() => {
                view_modal("You win");
                confetti();
            }, 1000);
        }
    });

    // Stand button
    stayBtn.addEventListener("click", function () {
        hitBtn.disabled = true;
        blankCard[1].style.display = "none";
        dealer.appendChild(draw_card());
        dealer_score.innerHTML = parseInt(dealer_score.innerHTML) + cardScore;

        while (dealer_score.innerHTML < 18) {
            dealer.appendChild(draw_card()).style.animationName = "draw-card";
            dealer_score.innerHTML = parseInt(dealer_score.innerHTML) + cardScore;
        }

        // Dealer scores 21
        if (dealer_score.innerHTML == 21) {
            dealer_score.style.color = "gold";
            setTimeout(() => {
                view_modal("Dealer wins");
            }, 1000);
        }

        // Dealer stand
        if (dealer_score.innerHTML >= 18 && dealer_score.innerHTML < 21) {
            if (dealer_score.innerHTML > player_score.innerHTML) {
                dealer_score.style.color = "gold";
                setTimeout(() => {
                    view_modal("Dealer wins");
                }, 1000);
            } else if (dealer_score.innerHTML < player_score.innerHTML) {
                player_score.style.color = "gold";
                setTimeout(() => {
                    view_modal("You win");
                    confetti();
                }, 1000);
            }
        }

        // Both score 21
        if (player_score.innerHTML == 21 && dealer_score.innerHTML == 21) {
            dealer_score.style.color = "gold";
            player_score.style.color = "gold";
            setTimeout(() => {
                view_modal("Draw");
            }, 1000);
        }

        // Draw
        if (player_score.innerHTML == dealer_score.innerHTML) {
            setTimeout(() => {
                view_modal("Draw");
            }, 1000);
        }

        // Dealer loses
        if (dealer_score.innerHTML > 21) {
            dealer_score.style.color = "red";
            player_score.style.color = "gold";
            setTimeout(() => {
                view_modal("You win");
                confetti();
            }, 1000);
        }

        // Both lose
        if (player_score.innerHTML > 21 && dealer_score.innerHTML > 21) {
            setTimeout(() => {
                view_modal("Both players lose");
            }, 1000);
        }
    })
};

// Modal
closeX.onclick = function () {
    modal_popup.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal_popup) {
        modal_popup.style.display = "none";
    }
}

function confetti() {
    for (i = 0; i < 100; i++) {
        var randomRotation = Math.floor(Math.random() * 360);
        var randomScale = Math.random() * 1;
        var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
        var randomHeight = Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));

        var randomAnimationDelay = Math.floor(Math.random() * 15);

        var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0', '#7497B2', '#FF5733', '#FFBA33', '#E7ED0B', '#0B88ED', '#0BED49', '#0BEDD4', '#F63908', '#F608EB', '#623D60', '#3AECEB', '#8EE278', '#DFDF31', '#FF8300'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];

        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.top = randomHeight + 'px';
        confetti.style.right = randomWidth + 'px';
        confetti.style.backgroundColor = randomColor;
        confetti.style.obacity = randomScale;
        confetti.style.transform = 'skew(15deg) rotate(' + randomRotation + 'deg)';
        confetti.style.animationDelay = randomAnimationDelay + 's';
        document.getElementById("confetti-wrapper").appendChild(confetti);
    }
}