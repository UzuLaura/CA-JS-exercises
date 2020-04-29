// 1. Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.

const btn = document.querySelector('button');
const input = document.getElementById('age');
let ticketPrice = 6;
let childrenDiscount = 0.5;
let seniorDiscount = 0.33;
let p = document.querySelector('p');
p.textContent = `Standartinė bilieto kaina: ${ticketPrice.toFixed(2)}eur.`;

btn.addEventListener('click', e => {
    e.preventDefault();

    let price = ticketPrice;
    const age = input.value;
    
    if (isNaN(age) || age.trim() == '') {
        if (age.trim() == '') {
            p.textContent = `Įveskite amžių.`; 
        } else {
            p.textContent = `Įveskite teisingą amžių.`; 
        }
    } else {
        if (age >= 0 && age <= 130) {
            if (age < 16) {
                price = ticketPrice * childrenDiscount;
            } else if (age > 60) {
                price = ticketPrice * seniorDiscount;
            }
            p.textContent = `Jūsų bilieto kaina: ${price.toFixed(2)}eur.`;
        }
    }
})