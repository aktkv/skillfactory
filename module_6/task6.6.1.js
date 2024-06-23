

// Первый пример
// function palindrome(str) {
//     str = str.toLowerCase().replace(" ", ''),
//         strReverse = str.split('').reverse().join(''); 
//     if (strReverse == str) {
//         return 'Слово ' + str + ' является палиндромом';
//     } else {
//         return 'Слово ' + str + ' не является палиндромом';
//     }
// }

// console.log(palindrome('шалаш'))
// console.log(palindrome('А роза упала на лапу Азора')) // ?? не корреткно удаляется пробел, что фраза считается не палиндромом. Что пропущено ?
// console.log(palindrome('дерево'))

// Второй пример , после правок
function palindrome(str) {
    str = str.toLowerCase().replaceAll(" ", ''),
        strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) return 'Слово ' + str + ' является палиндромом';
    return 'Слово ' + str + ' не является палиндромом';
}

console.log(palindrome('шалаш'))
console.log(palindrome('А роза упала на лапу Азора')) 
console.log(palindrome('дерево'))