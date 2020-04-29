/*
4. Create a program that there is a 1 in 15 chance of winning 3 tickets, a 2 in 15 chance of
winning 2 tickets, and a 4 in 15 chance of winning 1 ticket. You may use if-else statements
but not switch statements in your solution.
*/
const button = document.querySelector('button');
let ticketArr = [3, 2, 2, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let allTickets = 0;

button.addEventListener("click", e => {
    e.preventDefault();

    let luck = Math.floor(Math.random() * ticketArr.length);
    allTickets += ticketArr[luck];
    document.querySelector('h4').textContent = `You got: ${ticketArr[luck]} ticket${addS(ticketArr[luck])}!`;
    document.getElementById('text').textContent = `You have ${allTickets} ticket${addS(allTickets)}!`;
})

function addS (value) {
    return value == 1 ? '' : 's';
}