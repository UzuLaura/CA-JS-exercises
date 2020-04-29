/*
21. Parašykite funkciją, kuri atvirkščiai kapitalizuos/sumažins raides pateiktam žodžiui.
pvz: "Petras" pakeis į "pETRAS"
*/

let name = 'lAuRa15';

function shuffle (word) {
    let wordArr = word.split('');
    let newArr = [];
    wordArr.map(element => {
        element == element.toUpperCase() ? 
            newArr.push(element.toLowerCase()) : 
            newArr.push(element.toUpperCase());
    });
    let newWord = newArr.join('');
    return newWord;
}

console.log(shuffle(name));