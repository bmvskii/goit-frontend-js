// Функция, которая возвращает произведение , сумму и разницу входных параметров
const mul = (n, m) => {
  const substraction = n - m;
  const sum = n + m;
  const multiplication = n * m;

  return [multiplication, sum, substraction];
};

// НЕОБЯЗАТЕЛЬНАЯ ВСПОМОГАТЕЛЬНАЯ ФУНКЦИЯ
// которая сравнивает 2 массива на равенство
const isArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

const result = mul(10, 5);
const arrayWithResult = [50, 15, 5];

// result должен равняться arrayWithResult
console.log(isArraysEqual(result, arrayWithResult)); // true