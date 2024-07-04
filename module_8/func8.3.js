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

// const errorPromise = new Promise((resolve, reject) => {
//     reject(new Error("Возникла ошибка!"));
// });

// errorPromise
//     .then((result) => {
//         console.log("Результат:", result);
//     })
//     .catch((error) => {
//         console.log("Произошла ошибка:", error.message);
//     });

// let p = new Promise((resolve, reject) => {
//     let number = 14;

//     if (number % 2 === 0) {
//         resolve("Число чётное");
//     } else {
//         reject("Число нечетное");
//     }
// });

// p.then((res) => console.log(res)).catch((err) => console.log(err));

// function checkAvailability(product) {
//     return new Promise((resolve, reject) => {
//         resolve(`Продукт ${product} доступен`);
//     });
// }

// const promises = [
//     checkAvailability('мука'),
//     checkAvailability('яйца'),
//     checkAvailability('колбаса')
// ];

// Promise.all(promises)
//     .then(results => {
//         console.log(results.join('. '));
//         console.log('Можно готовить пиццу!');
//     })
//     .catch(error => {
//         console.log('Не все продукты доступны. ' + error);
//         console.log('Вечер испорчен, нельзя готовить пиццу :(');
//     });

// function checkAvailability(product) {
//     const random = Math.random();
//     return new Promise((resolve, reject) => {
//       if (random > 0.5) {
//         resolve(`Продукт ${product} доступен`);
//       } else {
//         reject(`Продукт ${product} не доступен`);
//       }
//     });
//   }
  
//   const promises = [
//     checkAvailability("мука"),
//     checkAvailability("яйца"),
//     checkAvailability("колбаса")
//   ];
  
//   Promise.all(promises)
//     .then((results) => {
//       console.log(results.join(". "));
//       console.log("Можно готовить пиццу!");
//     })
//     .catch((error) => {
//       console.log("Не все продукты доступны. " + error);
//       console.log("Вечер испорчен, нельзя готовить пиццу :(");
//     });
  

// const firstPromise = new Promise((resolve) =>
//     setTimeout(() => resolve(42), 5000)
// );
// const secondPromise = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Ошибка"), 2000)
// );
// const thirdPromise = new Promise((resolve) =>
//     setTimeout(() => resolve("Успех"), 1000)
// );

// Promise.all([firstPromise, secondPromise, thirdPromise])
//     .then(([firstPromise, secondPromise, thirdPromise]) => {
//         console.log(firstPromise);
//         console.log(secondPromise);
//         console.log(thirdPromise);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// function runToIceCream(runner) {
//     const randomDelay = Math.random() * 5000 + 6000; // Случайная задержка от 1 до 6 секунд
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`${runner} — победитель!`);
//         }, randomDelay);
//     });
// }

// const you = runToIceCream('Вы');
// const friend1 = runToIceCream('Друг 1');
// const friend2 = runToIceCream('Друг 2');

// Promise.race([you, friend1, friend2])
//     .then(winner => {
//         console.log(winner);
//     })
//     .catch(error => {
//         console.error('Что-то пошло не так: ' + error);
//     });

// const pr1 = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Я пришёл с ошибкой!"), 2000)
// );
// const pr2 = new Promise((resolve, reject) =>
//     setTimeout(() => reject("Я тоже принёс ошибку!"), 1000)
// );
// const pr3 = new Promise((resolve) => setTimeout(() => resolve("Успех"), 3000));

// Promise.race([pr1, pr2, pr3])
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.error(error);
//     });


// Упражнение 8.3.10
// Напишите код, который применяет promise.all() на трёх промисах с таймаутами. Каждый таймаут отдаёт число.

// Если все промисы успешны, то в консоль выведите их сумму. Если нет, то сообщение об ошибке.

// Логику, по которой промис будет завершаться успешно/неуспешно, можете придумать сами. Использовать рандомные числа, проверку на чётность и так далее.

// function getRandomNum() {
//     return Math.floor(Math.random() * 10) + 1;
// }

// function getPromise() {
//     return new Promise((resolve, reject) => {
//         const randomNum = getRandomNum();
//         if (randomNum % 2 === 0) {
//             resolve(randomNum);
//         } else {
//             reject(new Error(`Ошибка! ${randomNum} - нечётное!`));
//         }
//     });
// }

// const promise1 = getPromise();
// const promise2 = getPromise();
// const promise3 = getPromise();

// Promise.all([promise1, promise2, promise3])
//     .then((res) => {
//         let result = res.reduce((sum, element) => (sum += element), 0);
//         console.log(result);
//     })
//     .catch((err) => console.log(err.message));

// const obj = {
//     "Подводная Братва": [
//       {
//         type: "Акула",
//         name: "Ленни"
//       },
//       {
//         type: "Губан-чистильщик",
//         name: "Оскар"
//       },
//       {
//         type: "Скалярия",
//         name: "Энджи"
//       },
//       {
//         type: "Рыба-ёж",
//         name: "Сайкс"
//       }
//     ]
//   };
  
  
  
//     const jsonString = JSON.stringify(obj);
//       console.log(jsonString);

fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
  .then((response) => {
    return response.json();
  })
  .then((data) => data.forEach(post => {
  console.log(post);
}));