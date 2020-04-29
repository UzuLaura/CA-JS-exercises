/*
17. Sukurkite funkciją, į kurią paduosim array su skaičiais. Funkcija turi grąžinti sort'intus skaičius, nuo didžiausio, bet visi neigiami skaičiai turi būti išimti.
t.y. [-100, -5, 0, 11, 5] grąžins [11, 5, 0] 
*/

const array = [-100, -5, 0, 11, 5];

function sortAndRemove (arr) {
    arr = arr.filter(num => num >= 0).sort((a,b) => b - a);
    return arr;
}

console.log(sortAndRemove(array));