const randomNum = Math.floor(Math.random() * 100) + 1;

function guessNumber(randomNum) {
  let guess;
  let attempts = 0;

  do {
    guess = parseInt(prompt('Guess a number between 1 and 100:'));
    attempts++;

    if (isNaN(guess)) {
      alert('Please enter a valid number.');
      continue;
    }

    if (guess < randomNum) {
      alert('Number is higher than your guess.');
    } else if (guess > randomNum) {
      alert('Number is lower than your guess.');
    }
  } while (guess !== randomNum && attempts < 10);

  if (guess === randomNum) {
    alert(`You guessed it in ${attempts} attempts!`);
  } else {
    alert(`Sorry, you ran out of attempts. The number was ${randomNum}`);
  }
}

guessNumber(randomNum);