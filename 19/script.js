/*
19. Parašykite funkciją, kuri paims array ir grąžins ilgiausią itemą iš to array :)
pvz. ["aa", "bbb", "c"] grąžins "bbb"
*/

const array = ["aa", "bbb", "c", 12354, "5555"];

function longestItem (arr) {
    arr.sort((a, b) => b.toString.length - a.toString.length);
    return arr[0];
}
console.log(longestItem(array));

