/*
8. Write a program that asks the user for two whole number Celsius values, and then prints a
Celsius/Fahrenheit conversion chart for all whole number Celsius values between (and
including) the two values entered.
F = (C * 9/5) + 32;
*/

//Not Working Properly, unfinished!!!

const firstInput = document.getElementById('first');
const secondInput = document.getElementById('second');
const btn = document.querySelector('button');

btn.addEventListener('click', e => {
    e.preventDefault();
    
    const first = convertToF(Number(firstInput.value));
    const second = convertToF(Number(secondInput.value));
    const table = document.querySelector('#list tbody');
    table.innerHTML = "";
    let celsius = Number(firstInput.value);

    if (first < second) {
        for (let a = Math.round(first); a < Math.round(second); a++) {
            const tr = table.insertRow();
            const td1 = tr.insertCell();  
            const td2 = tr.insertCell();
            td1.textContent = celsius + "C";
            td2.textContent = a + "F";
            celsius += 1;   
        }
    } else {
        for (let a = Math.round(first); a > Math.round(second); a--) {
            const tr = table.insertRow();
            const td1 = tr.insertCell();  
            const td2 = tr.insertCell();
            td1.textContent = celsius + "C";
            td2.textContent = a + "F";  
            celsius -= 1;                      
        }
    }
})

function convertToF (degrees) {
    if (Number.isInteger(degrees)) {
        return (degrees * 9/5) + 32;
    } else {
        alert('Please enter a valid number!')
    }
}

