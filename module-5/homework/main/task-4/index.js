const matrix = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
];

for (let i = 0; i < matrix.length; i += 1) {
    console.log(`Подмассив # ${i+1}`);
    for (let j = 0; j < matrix[i].length; j += 1) {
        console.log(matrix[i][j]);
    }
}