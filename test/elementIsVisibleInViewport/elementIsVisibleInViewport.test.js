const expect = require('expect');
const elementIsVisibleInViewport = require('./elementIsVisibleInViewport.js');

test('elementIsVisibleInViewport is a Function', () => {
  expect(elementIsVisibleInViewport).toBeInstanceOf(Function);
});
