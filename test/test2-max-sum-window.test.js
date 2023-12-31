import { maxSumWIndow } from '../src/test2-max-sum-window';

describe('Test2: Max Sum Window', () => {
	it('should return the max sub array', () => {
		expect(maxSumWIndow([100, 200, 300, 400], 2)).toBe(700);
	});

	it('should return the max sub array', () => {
		expect(maxSumWIndow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
	});

	it('should return the max sub array', () => {
		expect(maxSumWIndow([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
	});
});
