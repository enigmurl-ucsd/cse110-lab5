// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

test('postive phone 1', () => {
    expect(isPhoneNumber('100-200-3000')).toBe(true);
});
test('postive phone 2', () => {
    expect(isPhoneNumber('(000) 200-3000')).toBe(true);
});
test('negative phone 1', () => {
    expect(isPhoneNumber('dog')).toBe(false);
});
test('negative phone 2', () => {
    expect(isPhoneNumber('hello')).toBe(false);
});

test('postive email 1', () => {
    expect(isEmail('user@mail.com')).toBe(true);
});
test('postive email 2', () => {
    expect(isEmail('hello@google.com')).toBe(true);
});
test('negative email 1', () => {
    expect(isEmail('dog')).toBe(false);
});
test('negative email 2', () => {
    expect(isEmail('hello')).toBe(false);
});

test('postive password 1', () => {
    expect(isStrongPassword('a_A123123asdf')).toBe(true);
});
test('postive password 2', () => {
    expect(isStrongPassword('b_123123_asAA')).toBe(true);
});
test('negative password 1', () => {
    expect(isStrongPassword('dog')).toBe(false);
});
test('negative password 2', () => {
    expect(isStrongPassword('1hello')).toBe(false);
});


test('postive date 1', () => {
    expect(isDate('00/00/0000')).toBe(true);
});
test('postive date 2', () => {
    expect(isDate('12/24/2000')).toBe(true);
});
test('negative date 1', () => {
    expect(isDate('dog')).toBe(false);
});
test('negative date 2', () => {
    expect(isDate('1hello')).toBe(false);
});

test('postive hex color 1', () => {
    expect(isHexColor('FFFF0a')).toBe(true);
});
test('postive hex color 2', () => {
    expect(isHexColor('#AAbb01')).toBe(true);
});
test('negative hex color 1', () => {
    expect(isHexColor('dog')).toBe(false);
});
test('negative hex color 2', () => {
    expect(isHexColor('1hello')).toBe(false);
});
