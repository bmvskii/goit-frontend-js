// @@@@@@@@@@@@@@@@@@@@@@@@@ МАССИВЫ @@@@@@@@@@@@@@@@@@@@@@

// ----- Создание массива
const superheroes = ["Batman", "SpiDeRmAn", "Captain America"];

// ----- Доступ к элементам
// #### НАПОМИНАНИЕ! Индекс в массиве начинается с 0

// console.log(superheroes[0]);
// console.log(superheroes[1]);
// console.log(superheroes[2]);

// ----- Переопределение массива

// console.log("ДО ОБНОВЛЕНИЯ:");
// console.log(superheroes[0]);
// console.log(superheroes[1]);
//
// superheroes[0] = 'Robin';
// superheroes[1] = 'Shreder';
//
// console.log("ПОСЛЕ ОБНОВЛЕНИЯ:");
// console.log(superheroes[0]);
// console.log(superheroes[1]);

// ----- Длина массива

// console.log("Текущая длина массива: ", superheroes.length);
// console.log("Массив: ", superheroes);

// Увеличили длину массива
// superheroes.length = 6;
//
// console.log("Обновленная длина массива: ", superheroes.length);
// console.log("Обновленный массив: ", superheroes);
//
// console.log("Пустая ячейка:", superheroes[3]);

// Урезали длину массива
// superheroes.length = 2;
//
// console.log("Обновленная длина массива: ", superheroes.length);
// console.log("Обновленный массив: ", superheroes);

// #### ЛАЙФХАК!
// #### Чтобы очистить массив - присваиваем ему длину 0

// superheroes.length = 0;
// console.log("Очищенный массив: ", superheroes);

// ----- Перебор массива с помощью цикла for
// for (let index = 0; index < superheroes.length; index++) {
//     console.log(superheroes[index]);
// }

// Массив с пользователями
// const fans = [];
// const FANS_NUMBER = 55000;

// Заполнение данных с помощью массива
// for (let i = 0; i < FANS_NUMBER; i++) {
//     fans[i] = `Фанатский билет № ${i+1}`;
// }
//
// console.log("Фанатских билетов:", fans);

// ----- Перебор массива с помощью цикла for..of

// Перебор супергероев
// for (let superhero of superheroes) {
//
//     // SpIdErMaN
//     if (superhero.toLowerCase() === 'spiderman') {
//         superhero = superhero.toUpperCase();
//         break;
//     } else {
//         continue;
//     }
// }
//
// for (const superhero of superheroes) {
//     console.log(superhero);
// }

// ----- Многомерные массивы

const brands = [
    ["Mars", "Snickers", "Bounty"],
    ["Coca-Cola", "Pepsi", "Sprite"],
    ["Orbit", "Dirol", "Stimorol"],
    ["Adidas", "Nike", "Reebok"]
];

const matrix = [
    ["11", "12", "13"],
    ["21", "22", "23"],
    ["31", "32", "33"],
];

// Перебор элементов многомерного массива
for (let i = 0; i < brands.length; i++) {
    // Весь массив
    console.log(brands[i]);

    for (let j = 0; j < brands[i].length; j++) {
        // Конкретный элемент в массиве
        console.log(brands[i][j]);
    }
}





