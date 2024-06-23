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