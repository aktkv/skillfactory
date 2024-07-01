// Упражнение 8.3.1.

// Напишите промис. Получайте в нём рандомное число от 1 до 20. Если число чётное — используйте resolve. Если нечётное — reject. Можете писать код в последнем примере codepen.

// const promise = new Promise((resolve, reject) => {
//     const randomNum = Math.floor(Math.random() * 20) + 1;
//     if (randomNum % 2 === 0) {
//         resolve(`${randomNum} - чётное`);
//     } else {
//         reject(`${randomNum} - нечётное`);
//     }
//   });
  
//   promise.then((res) => console.log(res)).catch((err) => console.log(err));


// Упражнение 8.3.2
// Напишите промис, который всегда возвращает ошибку. Обработайте эту ситуацию через catch.

const errorPromise = new Promise((resolve, reject) => {
    reject(new Error("Возникла ошибка!"));
});

errorPromise
    .then((result) => {
        console.log("Результат:", result);
    })
    .catch((error) => {
        console.log("Произошла ошибка:", error.message);
    });

// let p = new Promise((resolve, reject) => {
//     let number = 14;

//     if (number % 2 === 0) {
//         resolve("Число чётное");
//     } else {
//         reject("Число нечетное");
//     }
// });

// p.then((res) => console.log(res)).catch((err) => console.log(err));
