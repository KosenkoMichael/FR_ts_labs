function ClosureExample() {
    let counter = 0;
    return () => {
        counter++;
        return counter;
    };
}

const counter = ClosureExample();
console.log(counter());
console.log(counter());
console.log(counter());