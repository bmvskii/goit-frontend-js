// @@@@@@@@@@@@@@@@@@@@@@@@@ ФУНКЦИИ @@@@@@@@@@@@@@@@@@@@@@

// ---- ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

// const название_фунционального_выражения = function(аргумент1, аргумент2, ...) {
//              ТЕЛО ФУНКЦИИ
//              ОПЕРАТОР return
//              БЕЗ НЕГО функция вернет undefined
// };

// const array = [1, 2, 3, 4, 5];
// const array1 = [1, 3, 5, 7, 8];
// const array2 = [-0, 12, 4, 6, 8];
//
// const getSum = function(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// };

// str - параметр
// const removeWhitespace = function(str) {
//     // return str.toUpperCase();
//     // return;
// };

// const upperString = removeWhitespace("Sadasd", "asdasd", "Asdsadsa");

// const getAverage = function(array) {
//     let sum = getSum(array);
//     return sum / array.length;
// };

// const filter = function(array, mode) {
//     const filteredArray = [];
//
//     for (let i = 0; i < array.length; i++) {
//         if (mode === '-') {
//             if (array[i] < 0) {
//                 filteredArray.push(array[i]);
//             }
//         } else if (mode === '+') {
//             if (array[i] > 0) {
//                 filteredArray.push(array[i]);
//             }
//         } else if (mode === '') {
//
//         }
//     }
//
//     return filteredArray;
// };
//
// console.log(filter([1, -5, 2, -4, 3, -3, 0], '-'));
// console.log(filter([1, -5, 2, -4, 3, -3, 0], '+'));


// --- Functional expression
// --- Функции для калькулятора
// const add = (a, b) => a + b;
// const substract = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;

//
// console.log(add(5, 10));
// console.log(substract(10, 5));
// console.log(divide(100, 5));
// console.log(multiply(2, 7));

// ??? ЗАДАЧА
// ---- Решение

// const phrase = `Привет, Ребята. \
// Сегодня мы с вами пройдем офигенную тему под названием 'Функции'.
// С помощью ФУНКЦИЙ, вы сможете сделать ваш код компактней, гибче и МОЩНЕЕ`;
//
// const makeSentenceUppercased = function (sentence) {
//     let _sentence = '';
//     for (let i = 0; i < sentence.length; i++) {
//         _sentence += sentence[i].toUpperCase();
//     }
//     return _sentence;
// };
//
// const makeSentenceLowercased = function(sentence) {
//     let _sentence = '';
//     for (let i = 0; i < sentence.length; i++) {
//         _sentence += sentence[i].toLowerCase();
//     }
//     return _sentence;
// };
//
// const makeSentenceRandomcased = function(sentence) {
//     let _sentence = '';
//     for (let i = 0; i < sentence.length; i++) {
//         if (i % 2 === 0 ) {
//             _sentence += sentence[i].toUpperCase();
//         } else {
//             _sentence += sentence[i].toLowerCase();
//         }
//     }
//     return _sentence;
// };
//
// const transformSentence = function(_phrase) {
//     const splittedPhrase = _phrase.split('.');
//     const updatedSentences = [];
//
//     for (let i = 0; i < splittedPhrase.length; i++) {
//         if (i === 0) {
//             updatedSentences.push(makeSentenceLowercased(splittedPhrase[i]));
//         } else if (i === 1) {
//             updatedSentences.push(makeSentenceUppercased(splittedPhrase[i]));
//         } else if (i === 2) {
//             updatedSentences.push(makeSentenceRandomcased(splittedPhrase[i]));
//         }
//     }
//     return updatedSentences.join('.');
// };
//
// const result = transformSentence(phrase);
//
// console.log("ORIGINAL:", phrase);
// console.log("TRANSFORMED:", result);

// ---- ПОРЯДОК ВЫПОЛНЕНИЯ КОДА

// const functionC = function() {
//     console.log("НАЧАЛО ВЫПОЛНЕНИЯ ФУНКЦИИ C"); // 5 вывод
//     console.log("КОНЕЦ ВЫПОЛНЕНИЯ ФУНКЦИИ C"); // 6 вывод
//     // return;
// };
//
// const functionB = function() {
//     console.log("НАЧАЛО ВЫПОЛНЕНИЯ ФУНКЦИИ B"); // 3 вывод
//     functionC(); // 4 вывод
//     // functionC - return undefined
//     console.log("КОНЕЦ ВЫПОЛНЕНИЯ ФУНКЦИИ B"); // 7 Вывод
//     // return;
// };
//
// const functionA = function() {
//     console.log("НАЧАЛО ВЫПОЛНЕНИЯ ФУНКЦИИ А"); // 1 вывод
//     functionB(); // 2 вызов функции
//     // functionB - return undefined
//     console.log("КОНЕЦ ВЫПОЛНЕНИЯ ФУНКЦИИ A"); // 8 вывод
// };

// ---- ВЫЗОВ ФУНКЦИИ
// functionA();

// ---- ПАРАМЕТРЫ ПО УМОЛЧАНИЮ
// const generateArray = function(from = 0, to = 100) {
//     const array = [];
//     for (let i = from; i < to; i++) {
//         array.push(i);
//     }
//     return array;
// };

// ---- ПЛОХО
// const func = function(arg1 = 'Hello', arg2, arg3 ) {
//
// };

// ---- ХОРОШО
// const func = function(arg1, arg2, arg3 = 'Hello' ) {
//
// };

/*
const array = generateArray(); - вызов
const array1 = generateArray(80);
const array2 = generateArray(150, 170);

console.log(array);
console.log(array1);
console.log(array2);*/

// ---- ПАРАМЕТР arguments

// const add = function() {
//     let sum = 0;
//
//     for (const argument of arguments) {
//         sum += argument;
//     }
//
//     return sum;
// };
// const sum = add(1,2,3,4,5,6,7,8,9,10,123123,123123,435345345,45645,4564565464);
// console.log(sum);

// ---- Function declaration
//
// const getPersonGroup = function(age) {
//     if (age < 10) {
//         return 'Ребенок';
//     } else if (age < 18) {
//         return 'Подросток';
//     } else if (age < 60) {
//         return "Взрослый";
//     } else {
//         return "Пенсионер";
//     }
// };
// const showText = function (name, group) {
//     console.log(`${name}, вы относитесь к группе ${group}`);
// };
// const getUserAge = function () {
//     const age = Number.parseInt(prompt("Введите ваш возраст:"));
//     return age;
// };
// const getUserName = function () {
//     const name = prompt("Введите ваше имя:");
//     return name;
// };
// const run = function () {
//     const name = getUserName();
//     const age = getUserAge();
//
//     const group = getPersonGroup(age);
//
//     showText(name, group);
// };
//
// run();

// getSum([1, 24, 5]);
//
// function getSum(array) {
//     let sum = 0;
//
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//
//     console.log(sum);
// }

// ---- Старый вариант
const add1 = function(a, b, c) {
    const average = a + b + c / 3;
    return average;
}

// ---- Новый вариант
const add2 = (a, b, c) => {
    const average = a + b + c / 3;
    return average;
};

// ---- Старый вариант
const hello1 = function() {
    console.log("Hello1");
}

// ---- Новый вариант
const hello2 = () => console.log("Hello1");

// ---- Старый вариант
const showNumber1= function(number) {
    console.log(number);
};

// ---- Новый вариант
const showNumber2 = number => console.log(number);

// ---- Старый вариант
const avg1 = function() {
    let sum = 0;
    for (arg of arguments) {
        sum += arg;
    }
    return sum / arguments.length;
}

// ---- Новый вариант
const avg2 = (...args) => {
    let sum = 0;
    for (arg of args) {
        sum += arg;
    }
    return sum / args.length;
}









