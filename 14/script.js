/*
14. Sukurkite HTML (o NE JS) formą su input, kuriame vartotojas įrašys vardą. Kai jis submit'ins formą, naudodami addEventListener (su preventDefault) - paleiskite funkciją. Ši funkciją turės sukurti h2 elementą su tuo vardu ir jį appendint į document.body.
*/

const formInput = document.querySelector('input');
const btn = document.querySelector('button');
let regex = RegExp(/^[ą-žĄ-Ža-zA-Z ]+$/);

btn.addEventListener('click', event => {
    event.preventDefault();

    if (formInput.value.trim() != '' && regex.test(formInput.value)) {
        const create = document.createElement('h2');
        create.append(formInput.value);
        document.getElementById('result').appendChild(create);    
    } else {
        alert('Enter name with latin letters only!');
    }

})

