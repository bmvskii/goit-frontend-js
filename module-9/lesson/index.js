// @@@@@@@@@ Cобытия DOM @@@@@@@@@

// document.addEventListener("DOMContentLoaded", () => {
//     const button = document.querySelector('button');
//     const paragraph = document.querySelector('p');
//
//     const buttons = document.querySelectorAll('button');
//     const submitButton = document.querySelector('.submit-4');
//
//
//     console.log(button.textContent);
//     console.log(paragraph.textContent);
//
//     console.log(submitButton);
//     console.log(document.body.textContent);

    // ---- 1 способ создания и добавления элемента в html

    // 1 - document.createElement
    // 2 - вешаем классы, аттрибуты, добавляем текст
    // 3 - appendChild, append, prepend, before, after, insertBefore, replaceWith

    // ---- 2 способ

    // ---- ПРИМЕР
    // Данные о списке прилетают с сервера
    // Нужно отобразить их на странице
    // const list = ['List item 1', 'List item 2', 'List item 3', '4', '5', '10', '15'];

    // ---- 1 способ
    // const listWrapper = document.createElement('ul');
    // for (listItem of list) {
    //     const li = document.createElement('li');
    //     li.textContent = listItem;
    //     listWrapper.append(li);
    // }
    //
    // document.body.append(listWrapper);

//     let listItemsString = '';
//     for (li of list) {
//         listItemsString += `<li>${li}</li>`;
//     }
//     document.body.innerHTML += `<ul>${listItemsString}</ul>`
// });

// ---- click
// document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('.for-number > input');
//     const button = document.querySelector('.generate-random-number');
//
//     const generateRandomNumber = (from = 1, to = 1000) => {
//         return Math.round(Math.random() * to + from);
//     };
//
//     const handleButtonClick = () => {
//         input.value = generateRandomNumber();
//         button.removeEventListener('click', handleButtonClick);
//     };
//
//     button.addEventListener('click', handleButtonClick);
// });

// ---- focus + submit

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('.form');
//     const input = form.querySelector('input');
//     const label = form.querySelector('.input-label');
//     const button = form.querySelector('.submit-button');
//     const errorText = label.querySelector('.errorText');
//
//     const isInputValid = () => {
//         return input.value.length !== 0;
//     }

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //
    //     const { target, currentTarget } = event;
    //
    //     if (!isInputValid()) {
    //         label.classList.add('input-has-error');
    //         errorText.textContent = 'Поле ввода пустое. Заполните';
    //     } else {
    //         // REQUEST ON SERVER
    //     }
    // };
    //
    // const focusHandler = () => {
    //     label.classList.remove('input-has-error');
    //     errorText.textContent = '';
    // };
    //
    // input.addEventListener('focus', focusHandler);
    // button.addEventListener('click', submitHandler);

    // document.addEventListener('click', (event) => {
    //     const { target, currentTarget } = event;
    //
    //     console.log("TARGET:", target);
    //     console.log("CURRENT TARGET:", currentTarget);
    //
    //     if (target === button) {
    //         alert("Я нажал на button");
    //     }
    //
    //     if (target === input) {
    //         alert("Я нажал на input");
    //     }
    //
    //     if (target === document.querySelector('.decorative-round')) {
    //         alert("Я нажал на кружок");
    //     }
    // });
// });


// ---- addEventListener, removeEventListener

// ---- addEventListener и this

// const user = {
//     name: 'Mango',
//     showName() {
//         console.log(this);
//         // this будет ссылаться на button если использовать showName как callback
//         console.log(`My name is: ${this.name}`);
//         // тут undefined так как поля name у button нет
//     },
// };

/*
 * Представим что у нас есть кнопка с классом js-btn
 * Выберем ее и повесим на нее слушатель клика
 */
// const btn = document.querySelector('.js-btn');
//
// user.showName(); //работает
// btn.addEventListener('click', user.showName); // не работает
// btn.addEventListener('click', user.showName.bind(user)); // работает


// ---- event

// -- type

// -- target

// -- currentTarget

// ---- event.preventDefault()

// document.addEventListener('DOMContentLoaded', () => {
//     const link = document.querySelector('a');
//
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//     });
// });

// ---- submit

// ---- keydown

// ---- keypress

// ---- keyup

// ----
