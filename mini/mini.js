// 1) Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais.Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
//   Pvz.Paduodu: [1, 2, 4, 5]; Grąžina: 3

const numberArr = [150, 102, 113];
function findMissingNum(arr) {
  const newArr = arr.sort((a, b) => (a - b));
  let missingNumArr = [];
  for (let a = newArr[0]; a <= newArr[newArr.length-1]; a++) {
    if (!newArr.includes(a)) {
      missingNumArr.push(a)
    } 
  }
  missingNumArr = missingNumArr.sort((a, b) => (a - b));
  return missingNumArr[0];
} 

console.log(findMissingNum(numberArr));

// 2) Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
//   pvz.Paduodu: "Petras", grąžina "s".

const name = "Petras";
function lastChar (string) {
  return string[string.length-1];
}

console.log(lastChar(name));

// 3) Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
//   pvz: [-1, -100, -5, 10, 0, 11] -> "-1"

const numArr = [-1, -100, -5, 10, 0, 11];
function largestNegative (arr) {
  const newArr = arr.filter(number => number < 0).sort((a, b) => (b - a));
  return newArr[0];
}

console.log(largestNegative(numArr))

// 4) Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
//   T.y. "Petras" -> "sartep"

function reverseString (string) {
  const arr = string.toLowerCase().split('');
  return arr.reverse().join('');  
}

console.log(reverseString(name));

// 5) Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių(nuo 1 - 10)), kiek parametre nurodyta.
//   T.y. "3" => [1, 6, 3].

const parameter = "3";

function generateArr (parameter) {
  let arr = [];
  for (i = 0; i < parameter; i++) {
    arr.push(Math.floor(Math.random() * 10 + 1));
  }
  return arr;
}

console.log(generateArr(parameter));