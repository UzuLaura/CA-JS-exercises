/*
9. Write a program which prints a triangle of stars of a height given by the user, as in the
following example input/output:
a. Enter the number of lines for the triangle:
[ 7 ]
*
**
***
****
*****
******
*******
*/
const numberInput = document.getElementById('height');
const btn = document.querySelector('button');
const triangle = document.querySelector('#triangle');

btn.addEventListener('click', () => {
    triangle.innerHTML = '';
    const number = Number(numberInput.value);
    if (number <= 0 || !Number.isInteger(number)) {
        alert('Please enter a valid number that is greater than 0 and has no decimal points!');
    } else {
        for(i = 0; i <= numberInput.value; i++) {
            let result = "*".repeat(i);
            let p = document.createElement('p');
            p.style.margin = 0;
            p.textContent = result;
            triangle.append(p);    
        }
    }
})

