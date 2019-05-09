import 'jasmine';
const assert = require('assert');
// Testing by means of jasmine module
describe('Testing of the build in data structures methods', () => {
    // Shared variables for testing
    let firstArray: number[];
    let secondArray: number[];
    // Testing block for Array methods
    describe('Testing of the Array methods', () => {
        // All tests for Array methods will use
        // the same variables with the same values
        beforeEach(() => {
            firstArray = new Array(1, 2, 3);
            secondArray = new Array(4, 5, 6);
        });
        // Test for concat() method
        it('concat method test should check length of two concated arrays', () => {
            const length: number = firstArray.concat(secondArray).length;
            expect(length).toBe(6);
        });
        // Test for every() method
        it('every method test should check each element in the array is not 2', () => {
            const equalTwo: boolean = firstArray.every(element => element === 2);
            expect(equalTwo).not.toBe(true);
        });
        // Test for filter() method
        it('filter method test should check if in the array one element with value 5', () => {
            const filltered: number[] = secondArray.filter(element => element === 5);
            expect(filltered.length).toEqual(1);
        });
        // Test for forEach() method
        it('forEach method test should check if the values in the array assigned to variable', () => {
            let n: number;
            firstArray.forEach((element) => {
                n = element;
            });
            expect(n).toBeDefined();
        });
        // Test for indexOf() method
        it('indexOf method test should check if returned 1 for value 5 in the array', () => {
            const index: number = secondArray.indexOf(5);
            expect(index).toBe(1);
        });
        // Test for join() method
        it('join method test should check if returned type is string', () => {
            const joined: string = secondArray.join(' ');
            expect(typeof joined).toBe('string');
        });

    });
    // Testing block for Set methods
    describe('Testing of the Set methods', () => {
        // All tests for Set methods will use
        // the same variable with the same values
        let testedSet: Set<number>;
        beforeEach(() => {
            firstArray = new Array(1, 2, 3);
            secondArray = new Array(4, 5, 6);
            // Form set for testing from the previously used arrays
            testedSet = new Set(firstArray.concat(secondArray));
        });
        // Test delete() method
        it('delete method test should check if returned length 5 of the array after deleting element 6', () => {
            testedSet.delete(5);
            expect(testedSet.size).toEqual(5);
        });
        // Test for entry() method
        it('entry method test should check if returned array [1, 1] of two values for 1 one element', () => {
            const valuesArray = testedSet.entries().next().value;
            expect(valuesArray).toEqual([1, 1]);
        });
        // Test for value() method
        it('value method test should check if returned value 3 from the set', () => {
            const iterator: IterableIterator<number> = testedSet.values();
            let response: number;
            for (let i = 0; i < 3; i++) {
                response = iterator.next().value;
            }
            expect(response).toEqual(3);
        });
    });
    // Testing block for the Map methods
    describe('Testing of the Map methods', () => {
        // All tests for Map methods will use
        // the same variable with the same values
        let testedMap: Map<string, number>;
        beforeEach(() => {
            // Initializing map object for testing
            testedMap = new Map([
                ['first', 1],
                ['second', 2],
                ['third', 3]
            ]);
        });
        // Test for entries() method
        it('entry method test should check if any returned value of iterator is an array type', () => {
            const iterator: IterableIterator<[string, number]> = testedMap.entries();
            expect(Array.isArray(iterator.next().value)).toBe(true);
        });
        // Test keys() method
        it('keys method should check if the second element key is second', () => {
            const iterator: IterableIterator<string> = testedMap.keys();
            iterator.next();
            expect(iterator.next().value).toEqual('second');
        });
    });
});