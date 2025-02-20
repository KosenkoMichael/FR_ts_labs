const tuple: [number, number, number] = [11, 22, 33];

const SumTuple = (tuple: [number, number, number]): number => {
    const [a, b, c] = tuple;
    return a + b + c;
};

const result = SumTuple(tuple);
console.log(`Сумма элементов кортежа: ${result}`);