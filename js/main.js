
let suits = ['s', 'c', 'd', 'h'];
let ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
let values = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A:[1,11]};
const masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let shuffledDeck,
    startGame = true, // the game doesnt start till you hit start game button 
    yourPoints = 0,
    dealerPoints = 0, // user and dealer both have to start at zero points
    gameStart= false,
    gameDraw = false,  // game doesnt start until you click play game, that then makes it false when you try to start it 
    gameOver = false,  //game over is set to false because the games not over until somebody loses, wins or draws plus it hasnt even started haha
    points = 0,
    yourHandArr = [],
    wins = 0,
    loses = 0,
    dealerHandArr= [],
    hasA = false,
    windowWidth = window.screen.width,
    windowHeight= window.screen.height;
  
let gameSettings = {
  you: {
    div: "#box",
    boxSize: ".flex-row div",
    points:0,
  },

  dealer: { 
    div: "#box2",
    boxSize: ".flex-row div",
    points:0,

  },

  suits: ['s', 'c', 'd', 'h'],

  ranks:['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'],
};

let youTwo = gameSettings['you'];
let dealerTwo = gameSettings['dealer'];
    
 // deck is empty and im not sure why let jusytknow we have to implement the deck there !!!
//variables for the deck

 /*----- cached element references -----*/
startGame = document.getElementById('start-game').addEventListener('click', gameStarting) /// start the game 
 let hitButton = document.getElementById('hit-button').addEventListener('click', hitBtn) // hit 
 let stayButton = document.getElementById('stay-button') // stay 
 let Cards = document.getElementById("shuffled-deck-container");
 const shuffledContainer = document.getElementById('shuffled-deck-container'); 
 let yourHand = document.getElementById('.yourcard')
 let dealerHand = document.getElementById('.dealercard')
 let winner = document.getElementById('.winner')

 /*----- event listeners -----*/
 stayButton.addEventListener('click',function(){
   checkForWinOrLoss() }) 
   document.querySelector('button').addEventListener('click', renderShuffledDeck);
   
   //playAgain.addEventListener('click',function() { 
     //};// when you click start a new game this is what happens.
     // }) // when click it plays again
     
     gameInit();
     
     /*----- functions -----*/
     
     function gameInit() {
       buildMasterDeck();
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
      
      function hitBtn(){
        if(gameOver === false ){
          yourHandArr.push(newCard())
          console.log(yourHandArr)
         showCard(ranks, youTwo)}
      }

      function gameStarting(){
         gameStart = true, 
         gameDraw = false,
         gameOver = false,
         youWin = false, 
         dealerPoints = 0,
         yourPoints = 0,
         yourHand = [newCard(), newCard()],
         dealerHand = [newCard(), newCard()];
         };// when you run the game
        
         function newCard() {
    return shuffledDeck.shift(); 
    }
         
    function pointsUpdate(ranks, activePlayer) {
    if (ranks === 'A') {
      if (activePlayer['points'] + gameSettings['values'][ranks][1]<=21) {
        activePlayer['points'] += gameSettings['values'][ranks][1];
      } else {
        activePlayer["ranks"] += gameSettings['values'][ranks][0] 
       }
       } else {
        activePlayer['points'] += gameSettings['values'][ranks];
      }

      console.log(activePlayer["points"]);
      }
    

      // if (yourHandArr[ranks] < 21 || dealerHandarr[ranks] < 21)
      //  { return total += total +  }// how to add all cards even when you hit 
      
      //  if(cards === 'A'){  
      //    let hasA = 11 
      //  }
      //  else if ( {
      //    let hasA = 1;
      //  }
      //  return yourPoints =+ cards 1 + cards 2;
      
       
       
       function scoresUpdate() {
        yourPoints = gamePoints()
        dealerPoints = gamePoints();
       }

       function keepScore() {
       yourPoints = gamePoints(yourHand)
      dealerPoints = gamePoints(dealerHand)

   }

      // function deal() {
        //   yourHand = Cards[0];
        //   yourHandArr.push(Cards[0]);
        //   document.getElementById('player-bottom-card').src = 
        
        
        // // // function get a new card from the top of the deck 

  function showCard(ranks, activePlayer ) { 
    if(activePlayer['points']<= 21) {
     let cardImage = document.createElement('img');
        cardImage.src = `images/${card}`.png;
        cardImage.style = `width:${widthSize()}; height:${heightSize()}`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
      }

  //  }
  //  function widthSize() {
  //  if(cardBoardWidth > 1000){
  //     let newCardBoardWidth = cardBoard.screen.width* 0.1;

  //     return newCardBoardWidth;

  //  }
  //  else {
  //    return cardBoard.screen.width * 0.18;
  //  }
  // }

  //  function heightSize(){
  //  if(cardBoardWidth > 700){
  //     let newCardBoardHeight = cardBoard.screen.height* 0.18;

  //     return newCardBoardHeight;

  //  }
  //  else {
  //    return cardBoard.screen.height * 0.15;
  //  }
  // }
  //  function gamePoints(){

  //     if (yourHand < 21 || dealerHand < 21)
  //     { return total += total + yourHand }// how to add all cards even when you hit 
      
  //     if(cards === 'A'){  
  //       let hasA = 11 
  //     }
  //     else if ( {
  //       let hasA = 1;
  //     }
  //     return yourPoints =+ cards 1 + cards 2;
      
       
       
  //     function scoresUpdate() {
  //      yourPoints = gamePoints()
  //      dealerPoints = gamePoints();
  //     }

  //     function keepScore();{
  //     yourPoints = gamePoints(yourHand)
  //     dealerPoints = gamePoints(dealerHand)

  //  }

 // --------------------- //function get card to show up //
  // winner of the game 
  // function winnerOfGame() {
  //   scoresUpdate();
    
  //     if (yourHand === 21 || dealerHand === 21 ) {
  //       return youWin = true;
  //      }
  //     }
  //     if (dealerPoints <= 16) {
  //      dealerHand.push(newCard())
  //     }
  //     else if ( playerPoints > 21){
  //       youWin = false;
  //       gameOver = true;
  //     }
  //     else if(dealerpoints > 21) {
  //     youWin= true;
  //     gameOver = true;
  //     }
  //     else if ( playerPoints > dealerPoints) {
  //     youWin = true;
  //     return gameOver;
  //     }
  //     else if ( playerPoints == 21 && dealerPoints == 21) {
  //       youWin = false;
  //       gameOver = false;
  //       gameDraw = true ;
  //     }
  //     youWin = false;
  //     }
    

    }


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
// if dealer wins it will state you lose on the screen and will have to click play again and it will automatically restart like speed