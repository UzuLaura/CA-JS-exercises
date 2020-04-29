/*
20. Sukurkite programą, kuri turės input'ą. Jį užpildžius - input'o informacija pridės į localstorage. Inputą bus galima pildyt daug kartų. Visi rezultatai atvaizduojami po input'u <ul> blocke.
*/

const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
let count = localStorage.count ? localStorage.getItem('count') : 0;

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const info = input.value;
    const index = `info${count}`;
    localStorage.setItem(index, info);
    count++;
    localStorage.setItem('count', count);
});

for (let i = 0; i < count; i++) {
    let inf = `info${i}`;
    let li = document.createElement("li")
    li.textContent = localStorage.getItem(inf);
    ul.append(li);
}