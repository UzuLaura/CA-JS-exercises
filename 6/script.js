/*
6. Write a program that can determine whether a year entered by the user is a leap year (i.e.
    has 366 days). A year is a leap year if it is divisible by four, except that any year divisible by
    100 is a leap year only if it is also divisible by 400.
*/
    
const yearInput = document.getElementById('year');
const btn = document.querySelector('button');
const text = document.getElementById('write');

btn.addEventListener("click", () => {
    const year = Number(yearInput.value);
    if (year && year > 0) {
        if ((year % 100 == 0) && (year % 400 == 0)) {
            text.textContent = "Leap Year";
        } else if (year % 4 == 0) {
            text.textContent = "Leap Year";
        } else {
            text.textContent = "Not Leap Year";
        }    
    } else if (!year) {
        text.textContent = 'Please enter valid year!';
    } else {
        text.textContent = 'Please enter year that is more than 0!';
    }
})

