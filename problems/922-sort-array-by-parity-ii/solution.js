/**
 * @param {number[]} nums
 * @return {number[]}
 */
export function sortArrayByParityII(nums) {
	let j = 1;
	const l = nums.length;
	for (let i = 0; i < l; i += 2) {
		const curr = nums[i];
		if (curr % 2) {
			while (nums[j] % 2) {
				j += 2;
			}
			nums[i] = nums[j];
			nums[j] = curr;
		}
	}
	return nums;
}
