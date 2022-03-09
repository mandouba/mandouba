
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let shuffledDeck;
 let startGame = false, // the game doesnt start till you hit play game
    yourPoints = 0,
    dealerPoints = 0,// user and dealer both have to start at zero points
    gameStart= false,  // game doesnt start until you click play game, that then makes it false when you try to start it 
    gameOver = false,  //game over is set to false because the games not over until somebody loses, wins or draws plus it hasnt even started haha
    yourHand = [], 
    dealerHand = [], // player and dealers hands are empty variables because they start off with nothing. 
    points = 0;
    hasA = false;
  
    
 // deck is empty and im not sure why let jusytknow we have to implement the deck there !!!
//variables for the deck

 /*----- cached element references -----*/
 startGame = document.getElementById('start-game') /// start the game 
 let hitButton = document.getElementById('hit-button') // hit 
 let stayButton = document.getElementById('stay-button') // stay 
 // let playAgain = document.getElementById('play-again') // play again re-shuffle 
 const shuffledContainer = document.getElementById('shuffled-deck-container'); 
 console.log("right after declaration", shuffledContainer)
let cards = document.getElementById("shuffled-deck-container");
let deck = document.getElementById("shuffled-deck-container")
 //  hitButton.style.display = 'none';
//  stayButton.style.display = 'none';

 /*----- event listeners -----*/
startGame.addEventListener('click',function(){
gameStart = true,
gameOver = false,
youWin = false, 
dealerPoints = 0,
yourPoints = 0,
yourHand = [newCard(), newCard()],
dealerHand = [newCard(), newCard()];
})
 // when you run the game
 hitButton.addEventListener('click',function(){
     playerHand.push(newCard())
     checkForWinOrLoss()
 }) // adds a card
 stayButton.addEventListener('click',function(){
     gameOver = true // look over this woth Justin 
     checkForWinOrLoss()
 }) // when you click it stays with the cards you have and ends game for you now up to dealer
 document.querySelector('button').addEventListener('click', renderShuffledDeck);
//  playAgain.addEventListener('click',function() { // when you click start a new game this is what happens.



    // }) // when click it plays again
    
    gameInit();
    
    /*----- functions -----*/
    function gameInit() {
    
      buildMasterDeck();
    }

    // // // function get a new card from the top of the deck 
    //  function newCard() {
    //  return deck.shift(); 
    // }

    // function gamePoints(){

    // return yourPoints =+ cards 1 + cards 2;
    // } 

    //    if(cards === 'A'){ 
    //    let hasA = 11 if yourHand <= 21 
    //    }
    //      else {
    //      let hasA =
    //   }
          
    //     }
      
    //     }
    //   }

    // function keepScore();{
    //   yourPoints = gamePoints(yourHand)
    //   dealerPoints = gamePoints(dealerHand)

    // }

   // --------------------- //function get card to show up //
    // winner of the game 
    function winnerOfGame() {
        if ( yourPoints < 21) {
          yourHand.push(newCard())
           
        }
        if (dealerPoints < 21) {
         dealerHand.push(newCard())
        }
        else if ( playerPoints > 21){
          youWin = false;
          gameOver = true;
        }
        else if(dealerpoints > 21) {
        youWin= true;
        gameOver = true;
        }
        else if ( playerPoints > dealerPoints) {
        youWin = true;
        return gameOver;
        }
        else { 
        youWin = false;
        }
      }


    //funciton for shuffle
    function renderShuffledDeck() {
        // Create a copy of the masterDeck (leave masterDeck untouched!)
        const tempDeck = [...masterDeck];
        shuffledDeck = [];
        while (tempDeck.length) {
      // Get a random index for a card still in the tempDeck
      const rndIdx = Math.floor(Math.random() * tempDeck.length);
      // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
      shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
    }
    renderDeckInContainer(shuffledDeck, shuffledContainer);
  }
  
  function renderDeckInContainer(deck, container) {
    console.log(container)
    container.innerHTML = '';
    // Let's build the cards as a string of HTML
    // Use reduce when you want to 'reduce' the array into a single thing - in this case a string of HTML markup 
    const cardsHtml = deck.reduce(function(html, card) {
      return html + `<div class="card ${card.face}"></div>`;
    }, '');
    container.innerHTML = cardsHtml;
  }
  
  function buildMasterDeck() {
    const deck = [];
    // Use nested forEach to generate card objects
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        deck.push({
          // The 'face' property maps to the library's CSS classes for cards
          face: `${suit}${rank}`,
          // Setting the 'value' property for game of blackjack, not war
          value: Number(rank) || (rank === 'A' ? 11 : 10)
        });
      });
    });
    console.log(deck)
    return deck;
  }
  
  renderShuffledDeck();
  


// Psuedo Code //

// click 'game'
// play game takes you to a new page
// once the new screen pops up its gonna be a deck of cards 
// and gonna have you input your username befoe you start 
// once you input your user name youre eligible to play
// there will be a deck of cards in the middle of the screen 
// the dealer will then give you two cards and himself two cards
// youre on the left hes on the right 
// under the deck of cards you will keep track of how any games youve won or lost 
// user will always go first 
// user will have the option to hit or Stay 
// if user hits and numbers > 21 he will  bust and it will say you bust
// he then will have to click play again and it will automatically restart like speed poker 
// if user numbers < 21 he will have the option to keep hitting until he wants to stay 
// if he keeps hitting and bust he will have to click play again and it will automatically restart like speed poker 
// if user 2 numbers = 21 he will automatically win 
// if user stays he will wait for the dealers turn to go 
// the dealer would have set if statements setting the rules of when he hits or doesnt hit 
// if dealer has anything around 17 18 19 20 or 21 he stays. if not he hits 
// if dealer wins it will state you lose on the screen and will have to click play again and it will automatically restart like speed poker 