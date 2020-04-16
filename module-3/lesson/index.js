// @@@@@@@@@@@@@@@@@@@@@ УСЛОВИЯ

// ----- If - else
// ----- If - else if

// если что-то true , то выполнить 1 сценарий
// в противном случае, выполнить 2 сценарий
//
// const month = prompt("Какой сегодня месяц?");
//
// if (month === 'март') {
//     // сделать действие 1
//     alert("1 месяц карантина!!!");
// } else if (month === 'апрель') {
//     // сделать действие 2
//     alert('2 месяц карантина!!! Ужасно!!!');
// } else if (month === 'май') {
//     // сделать действие 3
//     alert('3 месяц карантина!!! Хочу гулять!!!');
// } else if (month === 'июнь') {
//     // сделать действие 4
//     alert('4 месяц карантина!!! Скоро Украина будет здорова!!!');
// } else {
//     alert("Все круто! Карантина нет!!!");
// }

// ----- Тернарный оператор
//
// const number = prompt("Введите число:");
//
// if (number > 100) {
//     alert("Число больше, чем 100");
// } else {
//     alert("Число меньше, чем 100");
// }

// const result = number > 100 ? "Число больше, чем 100" : "Число меньше, чем 100";
// alert(result);

// (условие, которое вернет true или false) ? (сценарий выполнения, если true) : (сценарий выполнения, если false);

// ----- Switch
//
// const firstNumber = parseInt(prompt("Первое число:"));
// const secondNumber = parseInt(prompt("Второе число:"));
// const operation = prompt("Операция (+, -, *, /):");
//
// switch (operation) {
//     case '+': {
//         alert(`Результат: ${firstNumber + secondNumber}`);
//         break;
//     }
//     case '-': {
//         alert(`Результат: ${firstNumber - secondNumber}`);
//         break;
//     }
//     case '*': {
//         alert(`Результат: ${firstNumber * secondNumber}`);
//         break;
//     }
//     case '/': {
//         alert(`Результат: ${firstNumber / secondNumber}`);
//         break;
//     }
//     default: {
//         alert("Операция не поддерживается");
//         break;
//     }
// }


// 3
// const result = 5 % 2;
//
// if (result === 0) {
//     console.log(`${result} грн`);
// } else {
//     console.log(`${result} eвро`);
// }
//
// // 4
// const MaximAge = 55;
// if (MaximAge >= 0 && MaximAge <= 16) {
//     // вывести дети
// } else if (MaximAge >= 17 && MaximAge <= 60) {
//     // вывести взрослые
// } else if (MaximAge >= 61 && MaximAge <= 100) {
//     // вывести пенсионеры
// }

//5
const firstTry = Math.round(Math.random());
const secondTry = Math.round(Math.random());

if (firstTry === secondTry) {
    console.log("ФАРТ");
}
