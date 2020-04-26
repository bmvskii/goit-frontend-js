const Arr2 = [true, 2, {}, ['a'], 222];

for (const item of Arr2) {
    console.log(`Элемент: ${item}`);
    console.log(`Тип: ${typeof item}`);
}