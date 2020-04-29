/*
10. Sukurkite funkciją, į kurią būtų paduotas vienas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš mažų L raidžių ASCII būdų).

t.y. jei kviesite funkciją fn(4), tai turėtų atspaudinti tokį rezultatą:
L
L
L
L L L L
*/

const btn = document.querySelector('button');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    result.innerHTML = '';
    const num = document.getElementById('number').value;
    for (let i = 1; i < num; i++) {
        result.innerHTML += `L <br>`;
    }
    result.innerHTML += `L`.repeat(num);
})
