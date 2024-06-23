function helloAlina() {
    console.log('Привет, студент Алина!')
}

helloAlina()

function helloNitita() {
    console.log('Привет, студент Никита!')
}

helloNitita()


function helloUser(name, age) {
    // let name = 'test'
    // const age = 33
    console.log('Привет, студент ' + name + '! Возраст:' + age + '.')
}

helloUser('Екатерина', 22)


// Возвращаемые выражения

function sum(a, b) {
    const result = a + b
    return result
}

const resultSum1 = sum(2,44)
const resultSum2 = sum(44,2)
const resultSum3 = sum(0,2)

console.log(resultSum1, resultSum2,resultSum3);


// Реализуйте функцию sqrt, которая будет принимать на вход число и возвращать его квадратный корень.

function sqrt(number) {
    return Math.sqrt(number);
}

const resultSqrt = sqrt(3)

console.log(resultSqrt);


// Напишите функцию passwordCheck, которая будет проверять пароль на равенство какому-либо ключевому слову (ключевое слово выберите сами). В случае, если пароль будет соответствовать, вернётся значение true. В противном случае вернётся значение false и в консоль будет выведен текст «Неверный пароль! Повторите ввод».

function passwordCheck(pass) {
    if (pass === 'qwerty123') {
        return true;
    } else {
        console.log('Неверный пароль! Повторите ввод');
        return false;
    }
}

passwordCheck("quesry") // false
passwordCheck("'qwerty123'") // true
