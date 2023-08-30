export function sumEvenObj(obj) {
	let sumEven = 0;

	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			sumEven += sumEvenObj(obj[key]);
		} else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
			sumEven += obj[key];
		}
	}

	return sumEven;
}
