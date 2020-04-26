const stack = [];

stack.unshift(2, 3, 4);
stack.push(5, 6, 7);

// Удаляем 3 последних элемента и присваиваем их массиву lastNumbers
const lastNumbers = stack.splice(-3);

console.log(lastNumbers); // [5, 6, 7]
console.log(stack); // [2, 3, 4]