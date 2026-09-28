let randomNumber = Math.floor(Math.random() * 100)

let guessedNumber = Number(prompt('Guess a number between 0 and 100: '))

while (guessedNumber !== randomNumber) {
  if (guessedNumber > randomNumber) {
    alert('too high')
  } else {
    alert('too low')
  }
  guessedNumber = Number(prompt('Guess a number between 0 and 100: '))
}

alert(`correct, the number was ${randomNumber}`)
