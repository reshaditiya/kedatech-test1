import { sumEvenObj } from '../src/test3-sum-even-object';

describe('Test3: Sum Even Object', () => {
	it('should return the sum of even numbers in object', () => {
		const input1 = {
			outer: 2,
			obj: {
				inner: 2,
				otherObj: {
					superInner: 2,
					notANumber: true,
					alsoNotANumber: 'yup',
				},
			},
		};
		expect(sumEvenObj(input1)).toBe(6);

		const input2 = {
			a: 2,
			b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
			c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
			d: 1,
			e: { e: { e: 4 }, ee: 'car' },
		};
		expect(sumEvenObj(input2)).toBe(12);
	});
});
