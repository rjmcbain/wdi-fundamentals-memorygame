//var cards = ['queen', 'queen', 'king', 'king'];

var myArray = [
{
rank: "Queen",
suit: "Hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "Queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "King",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];


var checkForMatch = function () {

  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again.");

  }
};


var flipCard = function (cardId) {


 console.log("User flipped " + (cards[cardId].rank));

 
  cardsInPlay.push(cards[cardId].rank);


  if (cardsInPlay.length === 2) {
   
    checkForMatch();
    console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
  
};



flipCard(0);

flipCard(2);

