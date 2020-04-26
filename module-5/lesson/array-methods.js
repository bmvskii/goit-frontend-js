// ----- Метод split
{
    const message = 'Welcome to Ukraine!';

// Разбивает строку по разделителю, в данном случае это пробел
    console.log(message.split(' '));

// Вызов split с пустой строкой разобьёт по буквам
    console.log(message.split(''));
}

// ----- Метод join
{

    const terminator = ['I', 'will', 'be', 'back!'];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
    console.log(terminator.join('    '));
    console.log(terminator.join(','));
    console.log(terminator.join('-'));

}
{
    const phrase = "I will be back";

    const words = phrase.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toUpperCase();
    }

    const updatedPhrase = words.join(' ');

    console.log("ORIGINAL:", phrase);
    console.log("UPD:", updatedPhrase);
}

// ----- Метод indexOf
// {
// const fruits = ['Apple', 'Banana', 'Pineapple', 'Mango'];
//
// // console.log(fruits.indexOf('Mango'));
// // console.log(fruits.indexOf('Strawberry'));
//
// const searchedFruit = 'Apple';
//
// if (fruits.indexOf(searchedFruit) === -1) {
//     console.log("Фрукта на складе нет!");
// } else {
//     console.log("В наличии");
// }
//
// }

// ----- Метод includes
{
    // ----- Множественные условия
    const fruits = [
        'Apple',
        'Banana',
        'Pineapple',
        'Mango',
        "Strawberry",
        "Kiwi",
        "Grapes",
        "Berry",
        "Coconut",
        "Lemon",
        "Pear"
    ];

    const vegetables = [
        "Cucumber",
        "Potato",
        "Tomato",
    ];

    // ##### НЕУДОБНО!!
    // if (object === 'Apple' || object === 'Kiwi' || object === ||) {
    //     console.log("Это фрукт!");
    // }
    //
    // if (object === 'Cucumber' || object === 'Potato') {
    //     console.log("Это овощь!");
    // }

    // const object = "Apple";
    //
    // // ##### УДОБНО
    // if (fruits.includes(object)) {
    //     console.log("Это фрукт!");
    // }
    //
    // if (vegetables.includes(object)) {
    //     console.log("Это овощь!");
    // }
}

// ----- Метод push
// ----- Метод pop
// {
//
// // Создаем пустой массив
//     const plates = [];
//
// // Добавляем элементы в конец массива
//     console.log("СТАВИМ ПОСУДУ В МОЙКУ");
//     plates.push("Тарелка 1");
//     console.log(plates);
//
//     plates.push("Блюдо 2");
//     console.log(plates);
//
//     plates.push("Кастрюля");
//     console.log(plates);
//
// // Удаляем элементы из конца массива
//     console.log("НАЧИНАЕМ МЫТЬ");
//
//     console.log(plates.pop());
//     console.log(plates);
//
//     console.log(plates.pop());
//     console.log(plates);
//
//     console.log(plates.pop());
//     console.log(plates);
// }

// ----- Метод shift
// ----- Метод unshift
{
    const queue = [];

    queue.unshift("Вася");
    queue.unshift("Петя");
    queue.unshift("Дима");

    console.log("СИТУАЦИЯ НА КАССЕ");
    console.log(queue);

    const queueLenght = queue.length;
    for (let i = 0; i < queueLenght; i++) {
        console.log(queue.shift());
        console.log("ОЧЕРЕДЬ:", queue);
    }
}

// ----- Метод slice
// {
//     const fruits = ['Apple', 'Pineapple', 'Mango', 'Kiwi', "Orange"];
//
// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
//     console.log(fruits.slice(0, 3));
//
// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
//     console.log(fruits.slice(2));
//
// // Вернет копию исходного массива
//     console.log(fruits.slice());
//
// // Вернет новый массив состоящих из последних двух элементом исходного
//     console.log(fruits.slice(-3));
// }

// ----- Метод splice
{

// ##### УДАЛЕНИЕ
    {

// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
//         const scores = [1, 2, 3, 4, 5];

        // console.log("Оригинальный массив оценок:", scores);
// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
//         const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента.
//         console.log("Обновленный массив оценок:", scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента.
//         console.log("Удаленные оценки:", deletedScores); // [1, 2, 3]
    }

// ##### ВСТАВКА В МАССИВ
    {

// Предположим, что у вас есть массив с названиями цветов в виде строк.
//         const colors = ['red', 'green', 'blue'];
// //
// // Следующая операция помещает один новый элемент перед вторым элементом.
//         colors.splice(2, 0, 'purple');
// //
// // Теперь массив цветов содержит четыре элемента
// // с новым элементом, вставленным во вторую позицию.
//         console.log(colors);
// //
// // Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
//         colors.splice(1, 0, 'yellow', 'pink')
//
//         console.log(colors);
    }

// ##### ЗАМЕНА
//     {
// // Предположим, у вас есть массив языков программирования из четырех элементов.
//         const languages = ['C', 'C++', 'Java', 'JavaScript'];
// //
// // // Следующая операция заменяет второй элемент на новый.
//         languages.splice(1, 1, 'Python');
// //
// // // В массиве языков теперь все еще четыре элемента,
// // // но второй элемент теперь «Python» вместо «C++».
//         console.log(languages);
// //
// // // Вы можете заменить один элемент на несколько элементов,
// // // передав больше аргументов
//         languages.splice(2, 1, 'C#', 'Swift', 'Go');
//         console.log(languages);
//     }
}


// ----- Метод concat
{
// const oldFruitStorage = ['Kiwi', 'Orange', 'Pineapple'];
// const newFruitsStorage = ['Banana', 'Apple'];
//
// const mergedStorage = oldFruitStorage.concat(newFruitsStorage);
//
// console.log("OLD:",oldFruitStorage);
// console.log("NEW:",newFruitsStorage);
// console.log("MERGED:",mergedStorage);
}


// Присвоение по значению
{
    let string1 = "String1";
    let string2 = string1;
    let string3 = string1;

    string2 += ' 2';
    string3 += ' 3';

    console.log("STR1:", string1);
    console.log("STR2:", string2);
    console.log("STR3:", string3);
}

// Присвоение по ссылке
{
    // 0 - Banana 1 - Apple 2 - Kiwi
    let storage1 = ["Banana", "Apple", "Kiwi"];
    let storage2 = storage1;
    let storage3 = storage1;

    console.log("STORAGE 1:", storage1);
    console.log("STORAGE 2:", storage2);
    console.log("STORAGE 3:", storage3);

    // 0 - Apple 1 - Kiwi
    storage2.splice(0, 1);
    console.log("STORAGE 1:", storage1);
    console.log("STORAGE 2:", storage2);
    console.log("STORAGE 3:", storage3);

    // 0 - Apple
    storage3.splice(1, 1);
    console.log("STORAGE 1:", storage1);
    console.log("STORAGE 2:", storage2);
    console.log("STORAGE 3:", storage3);
}