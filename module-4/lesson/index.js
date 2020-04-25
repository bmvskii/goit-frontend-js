// @@@@@@@@@ ЦИКЛЫ

const from = 5;
const to = 10;

// 1 - ФАЗА СОЗДАНИЯ СЧЕТЧИКА
// 2 - ПРОВЕРКА УСЛОВИЯ
// 3 - ЕСЛИ УСЛОВИЕ ВОЗВРАЩАЕТ TRUE, то
// а) ВЫПОЛНЯЕМ ТЕЛО ЦИКЛА
// б) УВЕЛИЧИВАЕМ СЧЕТЧИК
// ЕСЛИ УСЛОВИЕ ВОЗВРАЩАЕТ FALSE - выходим из цикла
//
// for (let index = from; index <= to; index++) {
//     console.log('Индекс больше, чем количество повторов', index <= to);
//     console.log("Индекс:", index); // 9
// };
//
//
// let counter = 0;
// while (counter <= to) {
//     console.log("Счетчик:", counter);
//     counter++;
// };

// let isStrongPassword = false;
// do {
//     const pswd = prompt("Введите пароль:");
//     const digits = '0123456789';
//     const symbols = '!@#$%^&*()_+';
//
//     let hasDigits = false;
//     let hasSymbols = false;
//
//     for (let i = 0; i < pswd.length; i++) {
//         if (digits.includes(pswd[i])) {
//             hasDigits = true;
//         }
//         if (symbols.includes(pswd[i])) {
//             hasSymbols = true;
//         }
//     }
//
//     if (pswd.length < 8) {
//         console.log("Длина пароля должна быть больше 8 символов");
//         continue;
//     };
//
//     if (!hasSymbols) {
//         console.log("В пароле отстутствуют символы");
//         continue;
//     }
//
//     if (!hasDigits) {
//         console.log("В пароле отстутствуют цифры");
//         continue;
//     }
//
//     isStrongPassword = true;
//
// } while (!isStrongPassword);
//
// alert("Пароль успешно установлен!");

const array = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < array.length; i++) {
    console.log("FOR:", array[i]);
}

for (letter of array) {
    console.log("FOR OF:", letter);
}