// @@@@@@@@@@@@ Строка, число и логический тип

const string1 = 'String 1';
const string2 = "String 2";
const string3 = `String 3`;
const string4 = String(true);
const string5 = String(123123);

const wrongString = `String';`;

const integer = 1234556;
const float = 12312.5435;
// NOT A NUMBER
const nanType = NaN;
const constuctedFromNumber = Number(123213);
const constuctedFromString = Number('aasdasdasds');
const constuctedFromBoolean = Number(true);

//
const boolTrue = true; // 1
const boolTrue = false; // 0
const booleanFromString = Boolean('');
const booleanFromNumber = Boolean(123);

// Truthy and Falsy

// Falsy
const falsy1 = '';
const falsy2 = 0;
const falsy3 = false;
const falsy4 = null;
const falsy5 = undefined;
const falsy6 = NaN;

// Все остальное приводится к True

const temperature = 20;
const isSunnyWeatherToday = temperature > 20;
const areLessonsDone = true;

// И погода хорошая, и уроки сделаны
const shouldIGoOutside = isSunnyWeatherToday && areLessonsDone;

// Я счастлив если есть тортики, или фрукты
const hasFruitsInFrigde = false;
const hasCakesInFrigde = true;

const amIHappy = hasCakesInFrigde || hasFruitsInFrigde;

// Логический оператор НЕ
const oppositeToFalse = !false;
const oppositeToTrue = !true;


