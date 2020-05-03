// Объявляем функцию addN , которая возвращает новую функцию
const addN = (n) => {
  return function (m) {
      return n + m;
  }
};

// Создаем функцию с n = 10
const newFunction = addN(10);

console.log(newFunction(15)); // 25
console.log(newFunction(20)); // 30
console.log(newFunction(30)); // 40
