
function myFunction(){
var randomImages = ["Images/dice1.png", "Images/dice2.png", "Images/dice3.png", "Images/dice4.png", "Images/dice5.png", "Images/dice6.png", ];


var randomNumber1 = Math.floor(Math.random() * randomImages.length);
var randomNumber2 = Math.floor(Math.random() * randomImages.length);

document.querySelector(".img1").src = randomImages[randomNumber1];
document.querySelector(".img2").src = randomImages[randomNumber2];





  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🙆🏾‍♂️ Player 1 wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "💪 Player 2 wins!";
  }
  else if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").innerHTML = "✍🏿 Draw!";
  }
}
