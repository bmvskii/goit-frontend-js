let string = "";
const array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length; i++) {
    string += `${array[i]}-`;
}

console.log(string); // 1-2-3-4-5-6-