/*
7. Create a program so that it repeatedly asks the user to guess the number until the user
guesses correctly. The program should be able to reproduce the following type of
input/output:
a. Guess the number between 1 and 5:
[ 4 ]
No, guess again:
[ 1 ]
No, guess again:
[ 3 ]
Correct - well done!
*/

const numberInput = document.querySelector('input[type=number]');
const btn = document.querySelector('button');
const text = document.getElementById('firstText');
const text2 = document.getElementById('secondText');
const text3 = document.getElementById('thirdText');

btn.addEventListener("click", e => {
    e.preventDefault();
    
    const rand = Math.floor(Math.random() * 5) + 1;
    const number = Number(numberInput.value);
    text2.textContent = '';
    text3.textContent = '';
    
    if (number <= 5 && number >= 0 && number) {
        text.textContent = `Your guess is ${number}!`;
        text2.textContent = `Correct number is ${rand}!`;
        if (rand == number) {
            text3.textContent = `Your guess is right!`;
        } else {
            text3.textContent = `Try again!`;
        }    
    } else {
        text.textContent = `Please enter valid number between 1 and 5!`;
    }
    console.log(number, rand);
})
