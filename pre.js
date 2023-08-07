'use strict'

let score;
let highscore;
let secretNumber;


let resetGame= ()=>{
score =20;
highscore= 0;

secretNumber= Math.floor(Math.random() * 20)+1;
console.log(secretNumber);

const guessInput= document.querySelector('.guess');
const messageDisplay= document.querySelector('.message')
const numberDisplay = document.querySelector('.number');
const scoreDisplay = document.querySelector('.score');

if(guessInput)
guessInput.value='';

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

document.querySelector('.again').addEventListener('click' , resetGame)

