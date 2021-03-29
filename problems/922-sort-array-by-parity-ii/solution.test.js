import { sortArrayByParityII } from './solution';

test('922. Sort Array By Parity II', () => {
	expect(sortArrayByParityII([3, 4])).toEqual([4, 3]);
	expect(sortArrayByParityII([4, 2, 5, 7])).toEqual([4, 5, 2, 7]);
}, 1000);
