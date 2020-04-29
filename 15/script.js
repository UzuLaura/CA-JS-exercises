/*
15. Meilės žinutė. Sukurkite funkciją, kuri priims du parametrus - A ir B, kurie bus žmonių vardai. Funkcija turės grąžinti pirmų raidžių kombinaciją su pliusu. T.y. jei paduosi "Petras" ir "Ieva", grąžins "P+I".
*/

const loveMessage = document.querySelector('form[name=love]');
const h2 = document.querySelector('h2');

loveMessage.addEventListener('submit', e => {
    e.preventDefault();

    if (isNaN(e.target.elements.first.value)
        && isNaN(e.target.elements.second.value)
        && e.target.elements.first.value.match(/[a-z]/i)
        && e.target.elements.second.value.match(/[a-z]/i)) {
        const first = e.target.elements.first.value.trim().split('');
        const second = e.target.elements.second.value.trim().split('');
        h2.textContent = first[0] + '+' + second[0];
    } else {
        h2.textContent = 'Please enter valid name!';
    }
})

