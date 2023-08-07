 
 "use strict";

 let secretNumber;
 let score;
 let highscore;
 
 function resetGame() {
   secretNumber = Math.floor(Math.random() * 20) + 1;
   console.log("the secret number is " + secretNumber);
 
   score = 20;
   highscore = 0;
 
   const guessInput = document.querySelector('.guess');
   const messageDisplay = document.querySelector('.message');
   const numberDisplay = document.querySelector('.number');
   const scoreDisplay = document.querySelector('.score');
 
   if (guessInput) {
     guessInput.value = '';
   }
   if (messageDisplay) {
     messageDisplay.textContent = 'Start guessing...';
   }
   if (numberDisplay) {
     numberDisplay.textContent = '?';
   }
   if (scoreDisplay) {
     scoreDisplay.textContent = score;
   }
 
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
 }
 
 document.querySelector('.again').addEventListener('click', resetGame);
 

 const displayMessage = function (message) 
 {
    document.querySelector('.message').textContent = message;

 };

          document.querySelector(".check").addEventListener("click", function() 
       { 
       const Guess= document.querySelector(".Guess").value;
       let number= parseInt(Guess);
       document.querySelector(".number").innerHTML=number;
       console.log(number, typeof number);
       

       if (!Guess) {
      
        displayMessage('⛔️ No number!');

         } 
         else if (Guess == secretNumber) {
            
            displayMessage('🎉 Correct Number!');
            document.querySelector('.number').textContent = secretNumber;
        
            document.querySelector('body').style.backgroundColor = "#8F00FF";
            document.querySelector('.number').style.width = '30rem';
        
            if (score > highscore) {
              highscore = score;
              document.querySelector('.highscore').textContent = highscore;
            }

          } else if (Guess !== secretNumber) {
            if (score > 1) {
          
              displayMessage(Guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
              score--;
              document.querySelector('.score').textContent = score;
            } else {
              
              displayMessage('💥 You lost the game!');
              document.querySelector('.score').textContent = 0;
            }
          }
});



        