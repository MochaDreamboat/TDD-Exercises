const sum = require('./sum');

const capitalize = require('./capitalize');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const caesarCipher = require('./caesarcipher.js');

test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});

// Capitalize tests
test('Capitalize first letter of string', () => {
    expect(capitalize('jerold')).toBe('Jerold');
});

test('Capitalize first instance of string character after non-alphabetic characters', () => {
    expect(capitalize(' 30j2f Hello')).toBe(' 30J2f Hello');
});

test('Rejects non-strings', ()=> {
    expect(capitalize(21)).toBe('Please input valid string.');
});

// reverseString tests
test('Reverse the string', () => {
    expect(reverseString('the quick brown fox jumps over the lazy dog')).toBe('god yzal eht revo spmuj xof nworb kciuq eht');
});

test('Reverse the string', ()=> {
    expect(reverseString('hello')).toBe('olleh');
});


// Calculator tests
test('The sum of 1 + 2 should equal 3.', () => {
    expect(calculator.add(1,2)).toBe(3)
});

test('0 - 1 should be -1.', () => {
    expect(calculator.subtract(0,1)).toBe(-1)
});

test('23 * 2 should equal 46.', () => {
    expect(calculator.multiply(23,2)).toBe(46)
});

test('4 divided by 3 should be 1.5', () => {
    expect(calculator.divide(4,3)).toBe(1.3333333333333333)
});

test('Reject dividing by zero', () => {
    expect(calculator.divide(1,0)).toBe('Wait that\'s illegal. Please don\'t do that!')
});

// Cipher test
test('expect encrypted message with -1 shift', () =>{
    expect(caesarCipher('attack at dawn', -1)).toBe('buubdl bu ebxo');
});

test('expect encryped message with 5 shift', () => {
    expect(caesarCipher('attack at dawn', -5)).toBe('fyyfhp fy ifbs');
});

// Analyze array test
test('Return object with appropriate statistics of inputted array.', () => {
    expect(analyzeArray([1,2,3,4,5])).toBe({average: 3, min: 1, max: 5, length: 5});
});

