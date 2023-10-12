const { getFactorial, multiply } = require('./functions');
const assert = require('chai').assert;

describe('getFactorial', function() {
    it('should return the factorial of a number', function() {
    assert.equal(getFactorial(5), 120);
    assert.equal(getFactorial('5'), 120);
    });

    it('should return "not a number" for non-numeric input', function() {
    assert.equal(getFactorial('something'), 'not a number');
    });

    it('should handle negative numbers', function() {
    assert.equal(getFactorial(-5), 'Factorial is not defined for negative numbers');
    });
});

describe('multiply', function() {
    it('should return the correct result when currying', function() {
    assert.equal(multiply(2)(3)(10)(), 60);
    assert.equal(multiply(-1)(677)(568)(2)(), -769072);
    });

    it('should return the number if called with a single argument', function() {
    assert.equal(multiply(3)(), 3);
    });

    it('should handle zero correctly', function() {
    assert.equal(multiply(0)(5)(10)(), 0);
    });
});
