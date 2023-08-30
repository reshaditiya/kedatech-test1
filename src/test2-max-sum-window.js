export function maxSumWIndow(nums, k) {
	if (k > nums.length) return undefined;

	let maxSum = 0;

	for (let i = 0; i <= nums.length - k; i++) {
		const currSum = nums.slice(i, i + k).reduce((acc, num) => acc + num, 0);
		maxSum = Math.max(maxSum, currSum);
	}

	return maxSum;
}
