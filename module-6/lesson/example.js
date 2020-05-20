// @@@@@@@@ Пример 1 - Программа, которая запрашивает у пользователя пароль
// и проверяет его на различные правила

// const isValidPassword = function (password) {
//     if (password.length === 0) {
//         console.log("Пароль пустой. Введите пароль");
//         return false;
//     }
//
//     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const digits = '0123456789';
//     const symbols = '!@#$%^&*()_+';
//
//     let hasDigits = false;
//     let hasSymbols = false;
//     let hasUppercasedLetter = false;
//
//     for (let i = 0; i < password.length; i++) {
//         if (digits.includes(password[i])) {
//             hasDigits = true;
//         }
//         if (symbols.includes(password[i])) {
//             hasSymbols = true;
//         }
//         if (letters.includes(password[i])) {
//             hasUppercasedLetter = true;
//         }
//     }
//
//     if (password.length < 8) {
//         console.log("Длина пароля должна быть больше 8 символов");
//         return false;
//     };
//
//     if (!hasUppercasedLetter) {
//         console.log("Нет букв в вверхнем регистре");
//         return false;
//     }
//
//     if (!hasSymbols) {
//         console.log("В пароле отстутствуют символы");
//         return false;
//     }
//
//     if (!hasDigits) {
//         console.log("В пароле отстутствуют цифры");
//         return false;
//     }
//
//     return true;
// }
//
// const runCaptcha = function (_attempts = 5) {
//     const maxCapchaAttemps = _attempts;
//     let attempts = 0;
//     let isHuman = false;
//
//     while (attempts < maxCapchaAttemps && !isHuman) {
//         console.log(`У вас есть ${maxCapchaAttemps - attempts} попыток`);
//
//         const TEST = "(8 + 10) / 2";
//         const EXPECTED_RESULT = '9';
//         const testResult = prompt(TEST);
//
//         if (testResult === EXPECTED_RESULT) {
//             isHuman = true;
//         } else {
//             console.log("Вы робот");
//             attempts++;
//         }
//     }
//
//     if (isHuman) {
//         return 'CAPCHA_PASSED';
//     }
//
//     return 'CAPCHA_GET_PASSWORD_AGAIN';
// };
//
// const isPasswordsEqual = function(originalPassword) {
//     const password = prompt("Введите еще раз пароль:");
//
//     if (password !== originalPassword) {
//         console.log("Пароли не совпадают");
//         return false;
//     }
//
//     return true;
// }
//
// const showAttempts = function() {
//     console.log("ПОПЫТКА № ", tries);
//     tries++;
// }
//
// let isStrongPassword = false;
// let tries = 1;
//
// let hasCaptchaErrors = false;
//
// do {
//     showAttempts();
//
//     const CAPTCHA_ATTEMPS = 3;
//     const pswd = prompt("Введите пароль:");
//     const isValid = isValidPassword(pswd);
//     const isEqual = isValid && isPasswordsEqual(pswd);
//
//     if (!isValid || !isEqual) {
//         continue;
//     }
//
//     const captcha = runCaptcha(CAPTCHA_ATTEMPS);
//     if (captcha === 'CAPCHA_GET_PASSWORD_AGAIN') {
//         location.reload();
//         hasCaptchaErrors = true;
//     }
//
//     isStrongPassword = true;
//
// } while (!isStrongPassword);
//
// if (isStrongPassword && !hasCaptchaErrors) {
//     alert("Пароль успешно установлен!");
// }

// @@@@@@ ПРИМЕР 2 - Программа , которая регистрирует людей из разных стран и опредляет количество больных коронавирусом

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
    }

    return people;
};

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
    }
};

const showGlobalStatics = function(statistics) {
    console.log("Всего больных:", totalIllPeople);
    console.log("Всего здоровых:", totalHealthyPeople);

    for (let i = 0; i < statistics.length; i++) {
        showStatistics(statistics[i]);
    }
};

const showStatistics = function(statistics) {
    for (let i = 0; i < statistics.length; i++) {
        console.log(`${statistics[i].name} - Количество больных ${statistics[i].totalIllPeople}`);
    }
};

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
