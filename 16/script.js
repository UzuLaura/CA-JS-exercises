/*
16. Visi turi meilužių. Sukurkite funkciją, į kurią padavus array su daug vardų ir pavardžių - atfiltruotų tik tuos, kurių vardas Petras.
pvz. ["Petras Slekys", "Jonas Kazlauskas", "Petras Petrulis"] grąžins ["Petras Slekys", "Petras Petrulis"]. Jeigu array tik vienas žmogus, tegul tuo pačiu pa'alert'ina "Tu ištikimas/a!"
*/

const arr = ["Petras Slekys", "Jonas PETRAS Jonaitis", "Jonas Petrulis"];
console.log(arr.filter(val => val.toLowerCase().includes('petras')));
