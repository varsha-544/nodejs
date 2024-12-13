// Matrix multiplication function
function multiplyMatrices(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    // Check if multiplication is possible
    if (cols1 !== rows2) {
        throw new Error('Matrix multiplication is not possible');
    }

    // Result matrix
    const result = new Array(rows1).fill().map(() => new Array(cols2).fill(0));

    // Matrix multiplication logic
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

// Hardcoded matrices
const matrix1 = [
    [1, 2],
    [3, 4]
];

const matrix2 = [
    [5, 6],
    [7, 8]
];

// Call the multiplication function
const result = multiplyMatrices(matrix1, matrix2);

// Output the result
console.log('Result of Matrix Multiplication:');
result.forEach(row => {
    console.log(row.join(' '));
});
