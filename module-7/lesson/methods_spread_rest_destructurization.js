// @@@@@@@@@@ ПЕРЕБОР ОБЪЕКТА @@@@@@@@@

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//     hasFreeFood: true,
//     freeRooms: [1, 54, 156],
// };

// ----- Перебор ключей объекта hotel
// for (const key in hotel) {
//     console.log('Key: ', key);
// }

// ----- Перебор значений объекта
// for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
// }

// const keys = Object.keys(hotel);
// const values = Object.values(hotel);
// const entries = Object.entries(hotel);
//
// console.log("KEYS:", keys);
// console.log("VALUES:", values);
// console.log("ENTRIES:", entries);
//
// for (entry of entries) {
//     console.log(`KEY ${entry[0]} VALUE ${entry[1]}`)
// }

// ---- Задача: посчитать максимальное количество товаров
// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//     strawberry: 2,
// };

// let hasStrawberry = false;
// for (const key in goods) {
//     if (key === 'strawberry') {
//         hasStrawberry = true;
//     }
// }
//
// console.log(hasStrawberry);

// for ... in
// for ... of + Object.values/keys/entries

// const values = Object.values(goods);
// const maxAmount = Math.max(...values);

// const hasStrawberry = Object.keys(goods).includes('strawberry');
// console.log(hasStrawberry);

// console.log(maxAmount);

// @@@@@@@@@@ ES6 (Spread, rest, destructurization)  @@@@@@@@@@@@

// !!!!!! Больше материалов в конспекте или по доп. ссылкам в группе !!!!!

// ***** Spread - распыление
// ---- Преобразование массива в значения
// const numbers = [10, 15, 1, -10, 20, 30, 150];

// const maxNumber = Math.max(...numbers);
// const minNumber = Math.min(...numbers);

// for (let i = 0; i < numbers.length; i++) {
//     if (maxNumber < numbers[i]) {
//         maxNumber = numbers[i];
//     }

// }

// console.log(maxNumber);
// console.log(minNumber);

// ---- Копирование массивов и объектов
// const arr1 = ['Value1', 'Value2', 'Value3'];
// const arr2 = ['Value4', 'Value5', 'Value6'];
//
// const arr3 = [...arr1, ...arr2, "Value7", "Value8"];
// console.log(arr3);

// ---- Копирование объектов

// const object1 = {
//     a: 1,
//     b: 2,
// };

// const object2 = {
//     c: 3,
//     d: 4,
// }

// ---- Способ #1
// const object3 = Object.assign({}, object1, object2);

// ---- Способ #2
// const object3 = {
//     ...object1,
//     ...object2,
//     d: 150,
// }

// console.log(object3);

// ***** Rest - сбор

// const getMaterials = (material1, material2, material3, ...materials) => {
//     console.log(materials);
// };
//
// getMaterials("Кирпич", "Обои", "Лак", "Цемент", "Песок", "Щебень", "Клей");

// ------ Destructization - деструктуризация

// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63,
//         science: 85
//     }
// };

// Без деструктуризации
// function displaySummary(student) {
//     console.log('Hello, ' + student.name);
//     console.log('Your Maths score is ' + (student.scores.maths || 0));
//     console.log('Your English score is ' + (student.scores.english || 0));
//     console.log('Your Science score is ' + (student.scores.science || 0));
// }

// С деструктуризацией
// function displaySummary({name, scores: { maths = 0, english = 0, science = 0 }}) {
//     console.log('Hello, ' + name);
//     console.log('Your Maths score is ' + maths);
//     console.log('Your English score is ' + english);
//     console.log('Your Science score is ' + science);
// }

// displaySummary(student);




