// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные числа, отсортированные в порядке возрастания.

function uniqueSortedNumbers(arr) {
    const uniqueNumbers = new Set(arr);
    const sortedUniqueNumbers = [...uniqueNumbers].sort((a, b) => a - b);
    return sortedUniqueNumbers;
}

const numbers = [8, 3, 9, 7, 3, 5, 1, 9]

console.log(uniqueSortedNumbers(numbers));