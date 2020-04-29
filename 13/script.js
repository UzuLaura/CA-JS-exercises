/*
13. Sukurkite funkciją, kuri priims du paramterus ir grąžins tą parametrą, kuris yra arčiausiai skaičiaus 100.
Pvz.: fn(101, 81) grąžins 101.
*/

const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const btn = document.querySelector('button');
const p = document.querySelector('span');

btn.addEventListener('click', () => {
    const first = firstInput.value;
    const second = secondInput.value;
    if (isNaN(first) || isNaN(second) || first.trim() == '' || second.trim() == '') {
        alert('Please enter valid numbers!');
    } else {
        if (Math.abs(100 - first) < Math.abs(100 - second)) {
            p.textContent = first;
        } else if (Math.abs(100 - first) > Math.abs(100 - second)) {
            p.textContent = second;
        } else {
            p.textContent = "both";
        }
    }
})
