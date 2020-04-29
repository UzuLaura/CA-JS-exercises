/* 
3. Certain company gives all employees a Christmas bonus of 50 pounds. In addition, it gives
people it has employed for 10 years or more an extra 50 pounds (making a total of 100
pounds), and people it has employed for 20 years or more an extra 100 pounds (making a
total of 150 pounds). Write a program that prompts an employee for his or her number of
years of employment and then outputs the amount of Christmas bonus, as in the following
example input/output:
a. How many years have you been with the company?
[ 16 ]  input 😊
You will receive a Christmas bonus of 100 pounds
*/

const yearsInput = document.getElementById('years');
const button = document.querySelector('button');
const displayBonus = document.querySelector('p');
let bonus = 50;

button.addEventListener("click", fn);

function fn() {
    const years = Number(yearsInput.value);
    let calculatedBonus = bonus;
    let info = document.getElementById('result');

    if (years && years <= 100 && years >= 0) {
        if (years >= 20) {
            calculatedBonus = bonus + 100;
        } else if (years >= 10) {
            calculatedBonus = bonus + 50;
        }
        return info.textContent = `You will receive a Christmas bonus of ${calculatedBonus} pounds.`;    
    } else {
        return info.textContent = `Please enter valid years!`;    
    }
}

