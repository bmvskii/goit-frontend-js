// const people = [];
//
// for (let i = 0; i < 42000000; i++) {
//     people.push({
//        name: `User ${i + 1}`,
//        salary: Math.round(Math.random() * 4000 + 3000),
//     });
// };
//
//
// let sum = 0;
// for (let i = 0; i < people.length; i++) {
//     sum += people[i].salary;
// }

// * / + -

//break, continue

// while
let counter = 0;

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

// const a = 100;
// const b = 435;
// let result = 0;
//
// console.log(a * b);

const originalStr = prompt("Введите строку");

const bannedWords = ["дурак", "дура", "путин", "коронавирус", 'омг', 'рофл'];
const pool = ['а', 'о', 'е', 'e', 'и', "э", 'у'];
const symbols = ['*', '#', '%', '&', '@', '$'];

let updatedStr = [];
const words = originalStr.split(' ');

for (let i = 0; i < words.length; i++) {
    let updatedWord = '';
    if (bannedWords.includes(words[i].toLowerCase())) {
        const bannedWord = words[i];

        for (let j = 0; j < bannedWord.length; j++) {
            if (pool.includes(bannedWord[j].toLowerCase())) {
                const index = Math.round(Math.random() * (symbols.length - 1));
                updatedWord += symbols[index];
            } else {
                updatedWord += bannedWord[j];
            }
        }
    } else {
        updatedWord += words[i];
    }

    updatedStr.push(updatedWord);
}

console.log("Оригинал:", originalStr);
console.log("С цензурой:", updatedStr.join(' '));

