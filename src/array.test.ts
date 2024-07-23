import '@testing-library/react';
import isNumber from './array';


describe('check if array is number', () => {
    test('Return true when given an array of numbers', () => {
        const input = [1, 2, 3, 4, 5];
        const result = isNumber(input);
        expect(result).toBe(true);
    });
});