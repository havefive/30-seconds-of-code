const expect = require('expect');
const initial = require('./initial.js');

test('initial is a Function', () => {
  expect(initial).toBeInstanceOf(Function);
});
test('Returns all the elements of an array except the last one', () => {
  expect(initial([1, 2, 3])).toEqual([1, 2]);
});
