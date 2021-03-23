import { isAnagram } from "./solution";

describe("242. Valid Anagram", () => {
	it("should be VALID anagram", () => {
		expect(isAnagram("anagram", "anagram")).toBe(true);
		expect(isAnagram("anagram", "maanagr")).toBe(true);
	});
	it("should be INVALID anagram", () => {
		expect(isAnagram("anagram", "anagrxm")).toBe(false);
		expect(isAnagram("anagram", "maanayr")).toBe(false);
	});
});
