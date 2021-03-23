import { maxLengthBetweenEqualCharacters } from "./solution";

test("1624. Largest Substring Between Two Equal Characters", () => {
  expect(maxLengthBetweenEqualCharacters("aa")).toBe(0);
  expect(maxLengthBetweenEqualCharacters("abca")).toBe(2);
  expect(maxLengthBetweenEqualCharacters("cbzxy")).toBe(-1);
  expect(maxLengthBetweenEqualCharacters("cabbac")).toBe(4);
});
