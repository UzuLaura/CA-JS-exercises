// 2. Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę.

const form = document.getElementById('militaryForm');
const p = document.getElementById('result');
const ageAlert = 'Įveskite amžių';
const crimeAlert = 'Pažymėkite teistumą';

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const age = Number(e.target.elements.age.value);
    const crime = e.target.elements.crime.value;

    if (!crime) {
        if (!age) {
            alert(ageAlert);
        } else {
            alert(crimeAlert);
        }
    } else {
        if (!age) {
            alert(ageAlert);
        } else if (age >= 18 && age <= 30) {
            if (crime == 'yes') {
                p.textContent = 'Nereikia';
            } else {
                p.textContent = 'Reikia';
            }
        } else {
            p.textContent = 'Nereikia';
        }
    }

})

