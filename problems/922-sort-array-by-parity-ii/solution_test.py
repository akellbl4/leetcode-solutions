from solution import Solution


def test_lists():
    solution = Solution()
		assert solution.sortArrayByParityII([4, 2, 5, 7])) == [4, 5, 2, 7]
		assert solution.sortArrayByParityII([3, 4]) == [4, 3]
