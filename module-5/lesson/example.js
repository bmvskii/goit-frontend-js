// @@@@@ ПРИМЕР Программа, которая цензирурует слова в предложениях @@@@@@

// Обрабатывает строки. Если есть слова из запретного списка, то она их заполняет рандомно символами.

// const originalStr = prompt("Введите строку");
//
// const bannedWords = ["дурак", "дура", "путин", "коронавирус", 'омг', 'рофл'];
// const pool = ['а', 'о', 'е', 'e', 'и', "э", 'у'];
// const symbols = ['*', '#', '%', '&', '@', '$'];
//
// let updatedStr = [];
// const words = originalStr.split(' ');
//
// for (let i = 0; i < words.length; i++) {
//     let updatedWord = '';
//     if (bannedWords.includes(words[i].toLowerCase())) {
//         const bannedWord = words[i];
//
//         for (let j = 0; j < bannedWord.length; j++) {
//             if (pool.includes(bannedWord[j].toLowerCase())) {
//                 const index = Math.round(Math.random() * (symbols.length - 1));
//                 updatedWord += symbols[index];
//             } else {
//                 updatedWord += bannedWord[j];
//             }
//         }
//     } else {
//         updatedWord += words[i];
//     }
//
//     updatedStr.push(updatedWord);
// }
//
// console.log("Оригинал:", originalStr);
// console.log("С цензурой:", updatedStr.join(' '));
