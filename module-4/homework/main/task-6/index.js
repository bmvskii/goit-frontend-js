const array = [-10, 20, 30, -5, 7, 48, 99, 105, 0];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sum += array[i];
    }
}

console.log(sum);