
// @@@@@@@ ПРИМЕР ВВОД И ОБРАБОТКА ПАРОЛЯ

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