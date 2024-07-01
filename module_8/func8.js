// Упражнение* 8.2.1
// Это задание со звёздочкой.

// Попробуйте сделать так, чтобы между выводом строчки «Наливаем тесто…» и «Пока постоим и подождём» была пауза в 2 секунды. Используйте setTimeout. Ориентируйтесь на код в примере.


function pancakeBaker() {
  console.log("Тесто готово, давайте жарить!");

  setTimeout(() => {
    console.log("Наливаем тесто для одного блинчика.");
  }, 2000);

  setTimeout(() => {
    console.log("Перевернём блин на другую сторону и подождём ещё.");
  }, 2000);

  setTimeout(() => {
    console.log("Блинчик готов!");
  }, 5000);


  console.log('Пока постоим и подождём.')
}

pancakeBaker();


// Упражнение 8.2.4
// Добавьте в последний пример по аналогии четвёртую функцию, которая бы вызывалась первее всех и уходила из стека позднее всех. Эта функция должна вызывать третью функцию.

const firstFunction = (num) => {
  console.log(`Первая функция работает, аргумент равен ${num}`);
};

const secondFunction = (num) => {
  console.log("Вторая функция работает");
  return firstFunction(num);
};

const thirdFunction = (num) => {
  console.log("Третья функция работает");
  return secondFunction(num);
};

const fourthFunction = (num) => {
  console.log("Четвертая функция работает");
  return thirdFunction(num);
};

fourthFunction(3);

// Упражнение 8.2.6

const foo1 = (a) => {
  console.log("1");
  let b = a * a
  console.log(b)
}

const foo2 = (b) => {
  console.log("2");
  let c = b * 2
  foo1(c)
}

const foo3 = (d) => {
  console.log("3");
  let f = d + 4
  foo2(f)
}

foo3(4)

// Упражнение 2.8

// Напишите функцию, которая принимает аргументом число n. Если это число равно 0, то функция пишет в консоль: «Функция завершена!»

// Если нет, то вычитает из числа n единицу, снова вызывает саму себя и передаёт аргументом новое число n.

const counter = (n) => {
  if (n === 0) {
      console.log("Функция завершена!");
  } else {
      counter(n - 1);
  }
};

counter(5)

