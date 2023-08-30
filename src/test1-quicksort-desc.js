export function quicksortDesc(arr) {
	if (arr.length <= 1) return arr;

	const midIdx = Math.floor(arr.length / 2);
	const pivot = arr[midIdx];

	const left = arr.filter((x) => x > pivot);
	const mid = arr.filter((x) => x === pivot);
	const right = arr.filter((x) => x < pivot);

	return [...quicksortDesc(left), ...mid, ...quicksortDesc(right)];
}
