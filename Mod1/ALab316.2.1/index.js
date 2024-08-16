const app = document.getElementById('app');
// const gameBox = document.createElement('table');

const randomNum = Math.trunc(Math.random()* 100+1);
console.log(randomNum);


let guess
console.log(guess);
let output = '';

window.alert('Welcome! Please guess a number between 1-100');

do{
    guess == parseInt(window.prompt('Pick a number between 1-100'))
    if(randomNum === guess){
        output = 'You are such a smart cookie';
    }else{
        output = `Sorry you random number is ${randomNum} guess again`;
    }
    window.alert(output)
} while (randomNum !== guess);