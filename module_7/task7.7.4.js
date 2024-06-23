// Создайте функцию setFullName, которая будет устанавливать свойство fullName у переданного ей объекта.
//  Используйте метод bind, чтобы создать новую функцию setPersonFullName, которая будет устанавливать fullName для объекта person из предыдущего примера. 
//  Вызовите setPersonFullName с параметром "John Smith" и убедитесь, что свойство fullName объекта person было изменено соответствующим образом.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: ''
};

function setFullName(newFullName) {
    this.fullName = newFullName;
}

const setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName); 