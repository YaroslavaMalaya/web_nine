// second task
function getFactorial(n) {
    if (isNaN(n) || n === null) {
        return 'not a number';
    }
    n = parseInt(n);
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    } else {
      return n * getFactorial(n - 1);
    }
}

console.log(getFactorial(5));
console.log(getFactorial(-5));
console.log(getFactorial());

function multiply(x) {
    return function(y) {
        if (y === undefined) {
            return x;
        } else {
            return multiply(x * y);
        }
    };
}

console.log(multiply(2)(3)(10)());
console.log(multiply(2)(0)(10)());
console.log(multiply(3)());

module.exports = {
    getFactorial,
    multiply
};