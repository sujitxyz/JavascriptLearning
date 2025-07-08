let randomNUmber = Math.floor(Math.random() * 100 + 1)
  
 
const UserInput = document.querySelector(".guessField")
const submit = document.querySelector("#subt")
const guessSlot = document.querySelector(".guesses")
let remaining = document.querySelector(".lastResult")
const lowOrhigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')

let prevGuess = []
let numOfGuess = 1
let gameStart = true

if(gameStart){
 submit.addEventListener("click", (e)=>{
   e.preventDefault()
 const guess = parseInt( UserInput.value)
 validateGuess(guess)
 console.log(guess)
 })
}

function validateGuess(guess){
 if(isNaN(guess)){
   alert("Please enter a number between 1 to 100")
 }else if(guess < 1){
   alert("Please enter a number between 1 to 100")
 } else if(guess > 100){
   alert("Please enter a number between 1 to 100")
 }else {
   prevGuess.push(guess)
   if(numOfGuess === 11){
    displayGuess(guess)
    displayMessage(`Game Over and Random Number was ${randomNUmber}`)
    endGame()
   }else{
     displayGuess(guess)
     checkGuess(guess)
   }
 }
}

function checkGuess(guess){
  if(guess === randomNUmber){
    displayMessage("You guess it right")
    endGame()
  } else if (guess < randomNUmber){
   displayMessage("You guess it too low")
  } else if (guess > randomNUmber){
   displayMessage("You guess it too high")
  }
}
function displayGuess(guess){
 UserInput.value = ""
 guessSlot.innerHTML += `${guess} `
 numOfGuess++
 remaining.innerHTML = `${12 - numOfGuess}`
}
function displayMessage(message){
lowOrhigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
 UserInput.value = ""
 UserInput.setAttribute("disabled", '')
 p.classList.add('button')
 p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
 startOver.appendChild(p)
 gameStart = false
 startGame()
}
function startGame(){
 const newButton = document.querySelector("#newGame")
 newButton.addEventListener("click", (e)=>{
 
 randomNUmber = Math.floor(Math.random() * 100 + 1)
   prevGuess = []
   numOfGuess = 1
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${12 - numOfGuess}`
   UserInput.removeAttribute("disabled")
   startOver.removeChild(p)
  gameStart = true


 })
}