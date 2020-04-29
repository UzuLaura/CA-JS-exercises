/*
18. Parašykite funkciją, kuri konvertuos skaičių (sekundes) į valandas, minutes ir sekundes (grąžins stringą gražų: 1h 15min 30sec)
*/

const seconds = 2000;

function convertSeconds (sec) {
    let min = 0;
    let hours = 0;

    // Paskaiciuojam minutes ir sekundes
    if (sec >= 60) {
        min = Math.floor(sec / 60);
        sec = sec % 60;
    } 

    // Paskaiciuojam valandas
    if (min >= 60) {
        hours = Math.floor(min / 60);
        min = min % 60;
    }


    console.log(`${hours}h ${min}min ${sec}sec`);
}

convertSeconds(seconds)
