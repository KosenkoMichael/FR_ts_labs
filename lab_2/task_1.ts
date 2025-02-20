// ONE-DIMENSION
const FindMaxNumber = (numbers: number[]): number => {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...numbers);
};
const numbers: number[] = [1.11, 2.22, 3.33, 4.44];
const maxNumber = FindMaxNumber(numbers);

console.log(`MaxNumber in array is -> : ${maxNumber}`);

// TWO-DIMENSION
const HasNegativeNumber = (matrix: number[][]): boolean => {
    for (const row of matrix) {
        for (const num of row) {
            if (num < 0) {
                return true;
            }
        }
    }
    return false;
};

const MatrixWithNegative: number[][] = [
    [1, 2, 3],
    [4, -5, 6],
    [7, 8, 9],
];

const MatrixWithoutNegative: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const MustBeTrue = HasNegativeNumber(MatrixWithNegative);
console.log(`HasNegativeNumber -> ${MustBeTrue}`);

const MustBeFalse = HasNegativeNumber(MatrixWithoutNegative);
console.log(`HasNegativeNumber -> ${MustBeFalse}`);