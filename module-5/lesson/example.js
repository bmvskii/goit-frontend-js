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

const ukraineRegions = ["Киевская", "Харьковская", "Днепропетровская", "Львовская", "Херсонская", "Сумская", "Черниговская", "Житомирская"];
const russianRegions = ["Томская", "Белгородская", "Московская", "Ленинградская"];
const polandRegions  = ["Краков", "Варшава", "Вроцлав"];
const georgiaRegions = ["Регион А", "Регион Б", "Тбилиси"];

let totalIllPeople = 0;
let totalHealthyPeople = 0;

const registratePeopleInSystem = function (regions, amount = 10000) {
    const people = [];

    for (let i = 0; i < amount; i++) {
        const personRegion = regions[Math.round(Math.random() * (regions.length - 1))];
        const isHealthy = Boolean(Math.round(Math.random()));

        people.push({
            name: `Person #${i+1}`,
            region: personRegion,
            isHealthy
        });
    };

    return people;
}
const createRegionsStatistic = function (regions) {
    let regionStat = [];

    for (let i = 0; i < regions.length; i++) {
        regionStat.push({
            name: regions[i],
            totalIllPeople: 0,
        });
    }

    return regionStat;
};
const checkPeopleOnIllnesses = function(people, _stats) {
    for (let i = 0; i < people.length; i++) {
        if (!people[i].isHealthy) {
            totalIllPeople++;

            for (let j = 0; j < _stats.length; j++) {
                if (_stats[j].name === people[i].region) {
                    _stats[j].totalIllPeople++;
                    break;
                }
            }
        } else {
            totalHealthyPeople++;
        }
    };
}
const showGlobalStatics = function(statistics) {
    console.log("Всего больных:", totalIllPeople);
    console.log("Всего здоровых:", totalHealthyPeople);
    for (let i = 0; i < statistics.length; i++) {
        showStatistics(statistics[i]);
    }
}
const showStatistics = function(statistics) {
    for (let i = 0; i < statistics.length; i++) {
        console.log(`${statistics[i].name} - Количество больных ${statistics[i].totalIllPeople}`);
    }
}

const ukrainianPeople = registratePeopleInSystem(ukraineRegions,20000);
const russianPeople = registratePeopleInSystem(russianRegions,100000);
const polandPeople = registratePeopleInSystem(polandRegions, 5000);
const georgianPeople = registratePeopleInSystem(georgiaRegions, 50000);

const ukrainianStats = createRegionsStatistic(ukraineRegions);
const russianStats = createRegionsStatistic(russianRegions);
const polandStats = createRegionsStatistic(polandRegions);
const georgianStats = createRegionsStatistic(georgiaRegions);

checkPeopleOnIllnesses(ukrainianPeople, ukrainianStats);
checkPeopleOnIllnesses(russianPeople, russianStats);
checkPeopleOnIllnesses(polandPeople, polandStats);
checkPeopleOnIllnesses(georgianPeople, georgianStats);


showGlobalStatics([ukrainianStats, polandStats, russianStats, georgianStats]);


// const getAverage = function() {
//     // let sum = 0;
//     for (const argument of arguments) {
//         console.log(argument);
//     }
//     // return sum / arguments.length;
// };
//
// console.log(getAverage(1, 2 , 3, 4, 5, 1, 23, 453, 35634, 5466, 24, 234, 234,23, 2131, 435, 54645, 6757, 45645 , 6456, 45,654, 645))

