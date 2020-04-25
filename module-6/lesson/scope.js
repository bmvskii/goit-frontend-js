// @@@@@@@@@@@@@@@@@@@@@@@ ОБЛАСТЬ ВИДИМОСТИ @@@@@@@@@@@@@@@@@@@@

someFunct();

const funct = function() {
    
};

// ---- ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ

// const global = 'global';
//
// if (true) {
//     const blockA = 'block A';
//
// //     // Видим глобальную + локальную A
//     console.log(global); // 'global'
//     console.log(blockA); // block A
// //
// //     /*
// //      * Переменные blockB и blockC не найдены в доступных областях видимости.
// //      * Будет ошибка обращения к переменной.
// //      */
// //     console.log(blockB); // ReferenceError: blockB is not defined
// //     console.log(blockC); // ReferenceError: blockC is not defined
//
//     if (true) {
//         const blockB = 'block B';
//
//         // Видим глобальную + внешнюю A + локальную B
//         console.log(global); // global
//         console.log(blockA); // block A
//         console.log(blockB); // block B
// //
// //         /*
// //          * Переменная blockC не найдена в доступных областях видимости.
// //          * Будет ошибка обращения к переменной.
// //          */
// //         console.log(blockC); // ReferenceError: blockC is not defined
//     }
// }
//
// if (true) {
//     const blockC = 'block C';
//
//     // Видим глобальную + локальную C
//     console.log(global); // global
//     console.log(blockC); // block C
//
//     /*
//      * Переменные blockA и blockB не найдены в доступных областях видимости.
//      * Будет ошибка обращения к переменной.
//      */
//     console.log(blockA); // ReferenceError: blockA is not defined
//     console.log(blockB); // ReferenceError: blockB is not defined
// }
//
// // Видим только глобальную
// console.log(global); // global
//
// /*
//  * Переменные blockA, blockB и blockC не найдены в доступных областях видимости.
//  * Будет ошибка обращения к переменной.
//  */
// console.log(blockA); // ReferenceError: blockA is not defined
// console.log(blockB); // ReferenceError: blockB is not defined
// console.log(blockC); // ReferenceError: blockC is not defined
//
// const getSum = function(array) {
//     // use array
// };

// ---- ОБЛАСТЬ ВИДИМОСТИ (Scope)

// const value = 50;
//
// const add = function(num) {
//     // const value = 10;
//     const innerValue = 5;
//
//     return num + value + innerValue;
// };
//
// // value объявлен глобально и поэтому доступен
// console.log(value); // 50
//
// console.log(add(20)); // 35
//
// // Ошибка, переменная innerValue не объявлена в этой области
// // видимости, она доступна только внутри фукции add
// console.log(innerValue);

// let value = 5;
//
// const a = function() {
//     let value = 10; // 1 создаем переменную c таким же названием , как и у глобальной
//     const result = b(value);  //2 вызываем функцию b() и передаем value;
//     // 6 присваеваем result 60
//     return result + value; // 7 возвращение 60 + 10
// };
//
// const b = function(number) {
//     c(); // 3 вызываем с()
//     return number + value; // 5 10 + 50
// };
//
// const c = function (number) {
//     value = 50; // 4 переопределяем значение
// };
//
// console.log("Глобальное:", value); // 5
// console.log(a()); // вызов функции

// Создаем глобальную переменную
// let string = "Name";
// console.log("1:", string); // Name
//
// if (true) {
//     // Обновляем строку "My Name"
//     string = "My " + string;
//     console.log("2:", string); // My Name
//
//     if (true) {
//         string = 'Your';
//         console.log("3:", string); // Your
//     }
// }
//
// console.log("4:",string); // Your

// ---- HOISTING
function someFunct() {

}