const array = [5, 3, 6, 2, 4];
let result = 0;

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    result += array[i];
}

console.log(result);