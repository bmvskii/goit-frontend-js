// @@@@@@@@@ ЦИКЛЫ

// const from = 5;
// const to = 10;

// 1 - ФАЗА СОЗДАНИЯ СЧЕТЧИКА
// 2 - ПРОВЕРКА УСЛОВИЯ
// 3 - ЕСЛИ УСЛОВИЕ ВОЗВРАЩАЕТ TRUE, то
// а) ВЫПОЛНЯЕМ ТЕЛО ЦИКЛА
// б) УВЕЛИЧИВАЕМ СЧЕТЧИК
// ЕСЛИ УСЛОВИЕ ВОЗВРАЩАЕТ FALSE - выходим из цикла
//
// ---- Цикл for
// for (let index = from; index <= to; index++) {
//     console.log('Индекс больше, чем количество повторов', index <= to);
//     console.log("Индекс:", index); // 9
// };
//
// ---- Цикл while

// let counter = 0;

// while (counter < 100) {
//     if (counter < 10) {
//         console.log(`${counter} меньше 10`);
//     }
//
//     if (counter == 10) {
//         console.log(`${counter} равняется 10`);
//     }
//
//     if (counter > 10 && counter <= 20) {
//         console.log(`${counter} больше 10 и меньше 20`);
//     }
//
//     if (counter > 20) {
//         break;
//     }
//
//     counter++;
// }

// while (counter <= to) {
//     console.log("Счетчик:", counter);
//     counter++;
// };

// ---- Цикл do..while
// **** Больше примеров смотреть в файле example.js

// let counter = 0;
// do...while
//  do {
//     if (counter < 10) {
//         console.log(`${counter} меньше 10`);
//     }
//
//     if (counter == 10) {
//         console.log(`${counter} равняется 10`);
//     }
//
//     if (counter > 10 && counter <= 20) {
//         console.log(`${counter} больше 10 и меньше 20`);
//     }
//
//     if (counter > 20) {
//         break;
//     }
//
//     counter++;
// } while (counter < 100);

// do {
//     console.log("Счетчик:", counter);
//     counter++;
// } while (counter <= to);


// --- Сравнение перебора через for и for...of
// const array = ["A", "B", "C", "D", "E", "F"];
//
// for (let i = 0; i < array.length; i++) {
//     console.log("FOR:", array[i]);
// }
//
// for (letter of array) {
//     console.log("FOR OF:", letter);
// }