const operation = (m, n, o = m + n) => m * n * o;
const result = operation(2, 3);

// 2 * 3 * (2+3) = 30
console.log(result);