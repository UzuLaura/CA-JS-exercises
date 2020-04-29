/*
11. Sukurkite tokią pačią funkciją, bet kad spausdintų I raidę. Vartotojas gali įrašyti tik nelyginį teigiamą skaičių, kitaip išmeta klaidą.
pvz.:
I I I I I
    I
    I
    I
I I I I I
*/

const numberInput = document.getElementById('height');
const btn = document.querySelector('button');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
    result.innerHTML = '';
    const number = Number(numberInput.value);
    if (number <= 0 || number/2 == 0) {
        alert("Įrašykite nelyginį teigiamą skaičių");
    } else {
        let p = document.createElement('p');
        for(i = 1; i < number; i++) {
            let p = document.createElement('p');
            result.append(p);
            p.textContent ="I";    
            p.style.textAlign = "center";
        }
        result.prepend(p);
        result.append(p);
        p.textContent = "I".repeat(number);
        p.style.textAlign = "center";
    }
})