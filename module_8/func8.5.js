// Упражнение 8.5.2.
// Напишите таймаут, который будет отсчитывать в консоли с 10 до нуля и начинаться заново.

// const timeout = (sec = 10) => {
//     if (sec >= 0) {
//         console.log(sec);
//         setTimeout(() => {
//             timeout(sec - 1);
//         }, 1000);
//     } else {
//         console.log("Время вышло!");
//         timeout();
//     }
// };

// timeout();

// Упражнение 8.5.3.
// Создайте интервал, который будет выводить в консоль числа. Начинать с 0 и каждый раз прибавлять единицу. Также напишите логику обнуления интервала, если число становится больше 50.

// function interval(count = 0) {
//     const intervalId = setInterval(() => {
//         if (count > 50) {
//             console.log("Отсчёт окончен!");
//             clearInterval(intervalId);
//             return;
//         }
//         console.log(count);
//         count++;
//     }, 1000);
// }

// interval();

// Упражнение 8.5.4.
// Напишите секундомер с функцией обнуления, если прошло больше минуты.

// const timeout = (sec = 10) => {
//     if (sec >= 0) {
//         console.log(sec);
//         setTimeout(() => {
//             timeout(sec - 1);
//         }, 1000);
//     } else {
//         console.log("Время вышло!");
//     }

// };

// timeout();

// Упражнение 8.5.5.
// Задача со звёздочкой. Если есть желание и навыки, создайте анимацию с помощью setTimeout по аналогии с примером из юнита. Поменяйте её визуал, цвета и размеры. Можете сделать её не горизонтальной, а вертикальной.


// const countdownTimer = setInterval(() => {
//     // Получаем текущую дату и время
//     const now = new Date().getTime();
//     // Cколько времени осталось до окончания таймера
//     const distance = countdownDate.getTime() - now;
//     // Вычисляем дни, часы, минуты и секунды
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//     const countdownElement = document.querySelector(".countdown");
//     countdownElement.innerHTML = `${days}д ${hours}ч ${minutes}м ${seconds}с`;
  
//     // Если таймер истек, остановить его
//     if (distance < 0) {
//       clearInterval(countdownTimer);
//       countdownElement.innerHTML = "Время истекло!";
//     }
//   }, 1000);
  


// таймаут
// setTimeout(() => {
//     console.log("Выполнение таймаута на строке 2, новая макрозадача");
//     let p = Promise.resolve("Выполняется промис на строке 3, микрозадача");
//     p.then((res) => console.log(res));
//   }, 1000);
//   // второй таймаут
//   setTimeout(
//     () => console.log("Выполнение таймаута на строке 8, новая макрозадача"),
//     2000
//   );
//   // консоль
//   console.log("Выполнение вывода в консоль на строке 13, синхронный код");
//   // промис
//   let pr = Promise.resolve().then(() =>
//     console.log("Выполнение промиса на строке 15, первая микрозадача")
//   );
//   // консоль
//   console.log("Выполнение вывода в консоль на строке 19, синхронный код");
//   // промис
//   pr.then(() =>
//     console.log("Выполнение промиса на строке 21, вторая микрозадача")
//   );

// Упражнение 8.6.1.
// Поработайте с последним примером. Допишите код так, чтобы у последнего таймаута на строке 8 тоже появились микрозадачи. Можете пользоваться промисами по аналогии.

// setTimeout(() => {
//     console.log("Выполнение таймаута на строке 8, новая макрозадача");
//     let p = Promise.reject("Выполнилась микрозадача таймаута с 8 строки.");
//     p.catch((err) => console.log(err));
// }, 2000);

// console.log("Начало кода");

// setTimeout(function () {
//     console.log("Таймаут 1");
//     Promise.resolve().then(function () {
//         console.log("Микрозадача 1");
//     });
// }, 0);

// setTimeout(function () {
//     console.log("Таймаут 2");
//     Promise.resolve()
//         .then(() => console.log("Микрозадача 1"))
//         .then(() => console.log("Микрозадача 2"));
// }, 0);

// Promise.resolve().then(function () {
//     console.log("Микрозадача 1");
// });

// console.log("Конец кода");

// Упражнение 8.6.4
// Напишите код, который включает два таймаута. У первого — 2 микротаски. У второго — одна. Можете использовать внутри любую логику, например, выводить что-то в консоль.

setTimeout(() => {
    console.log("Первый таймаут");
    Promise.resolve().then(() =>
        console.log("Первая микротаска первого таймаута")
    );
    Promise.resolve().then(() =>
        console.log("Вторая микротаска первого таймаута")
    );
});

setTimeout(() => {
    console.log("Второй таймаут");
    Promise.reject().catch(() =>
        console.log("Первая микротаска второго таймаута")
    );
});