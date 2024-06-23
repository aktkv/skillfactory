
// Первый вариант
// var a = prompt('Введите число ');

// let allNumbers = [];
// for (i = 0; i<= a; i++){
//     allNumbers.push(i);
//   }

// Второй пример , после правок
const a = prompt("Введите число:");

const allNumbers = [];
for (i = 0; i <= a; i++) {
  allNumbers.push(i);
}
console.log(new Array(allNumbers));