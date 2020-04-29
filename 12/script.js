/*
12. Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
Pvz.: Petras, Jonas, Mantas, Antanas
*/

const nameInput = document.querySelector('input[type=text]');
const p = document.createElement('p');

nameInput.addEventListener('blur', () => {
    const text = nameInput.value;
    const textNode = document.createTextNode(text + ', ');
    p.appendChild(textNode);
    document.getElementById('text').appendChild(p);
})