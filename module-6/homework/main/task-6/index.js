// Функция, которая возвращает произведение , сумму и разницу входных параметров
const mul = (n, m) => {
    const substraction = n - m;
    const sum = n + m;
    const multiplication = n * m;

    return [multiplication, sum, substraction];
};

// Функция-обертка, которая вызывает функцию mul
const m = (a, b) => mul(a, b);

// Функция-обертка над console.log
const log = (param) => {
    console.log(param);
};

const result1 = m(10, 5);
const result2 = mul(10, 5);

log(result1); // [50, 15, 5]
log(result2); // [50, 15, 5]

