// Есть массив объектов, представляющих собой пользователей, каждый из которых имеет свойство age (возраст). 
// Создайте новый массив, содержащий только тех пользователей, чей возраст больше или равен 18.
// Затем создайте новый массив, содержащий только свойства name (имя) каждого пользователя.


let users = [
    { name: 'Алина', age: 22 },
    { name: 'Дмитрий', age: 17 },
    { name: 'Владимир', age: 29 },
    { name: 'Кира', age: 15 }
];

let adultUsers = users.filter(user => user.age >= 18);

let userNames = adultUsers.map(user => user.name);

console.log(adultUsers); 
console.log(userNames);