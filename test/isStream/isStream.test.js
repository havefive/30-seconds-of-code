const expect = require('expect');
const isStream = require('./isStream.js');
const fs = require('fs');
const Stream = require('stream');

test('isStream is a Function', () => {
  expect(isStream).toBeInstanceOf(Function);
});
test('isStream returns true for read streams', () => {
  expect(isStream(fs.createReadStream('isStream.js'))).toBeTruthy();
});
test('isStream returns true for write streams', () => {
  expect(isStream(fs.createWriteStream('isStream.js'))).toBeTruthy();
});
test('isStream returns true for duplex streams', () => {
  expect(isStream(new Stream.Duplex())).toBeTruthy();
});
test('isStream returns false for non-streams', () => {
  expect(isStream({})).toBeFalsy();
});
