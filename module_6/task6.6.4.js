
// Первый пример
// const h1 = document.createElement('h1')
// h1.innerHTML = 'не понимать такие задания, как правильно выполнять ?'

// document.body.appendChild(h1)

// const str = [
//     ['x', 'o', 'x'],
//     ['o', 'x', 'o'],
//     ['x', 'o', 'x']
// ];

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i].join(' '));
// }


// Второй пример , после правок
const zeros = () => {
    for (let i=0; i <= 9; i++) {
        if (i%2) console.log('o')
        console.log('x')
    }
}
console.log(zeros());