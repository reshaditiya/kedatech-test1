import { quicksortDesc } from '../src/test1-quicksort-desc';

describe('Test1: Quicksort Desc', () => {
	it('should sort the array descendingly', () => {
		const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
		const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
		const sortedArray = quicksortDesc(inputArray);
		expect(sortedArray).toEqual(expectedOutput);
	});
});
