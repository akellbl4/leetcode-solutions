/**
 * @param {string} s
 * @return {number}
 */
export function maxLengthBetweenEqualCharacters(s) {
  let substring = 0;
  let thereIs = false;
  let lastIndex;
  let firstIndex;
  const half = Math.ceil(s.length / 2);

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    lastIndex = s.lastIndexOf(char);
    firstIndex = s.indexOf(char);

    if (char == s[lastIndex] && firstIndex != lastIndex) {
      thereIs = true;
    }
    if (substring < lastIndex - firstIndex - 1) {
      substring = lastIndex - firstIndex - 1;
    }
    if (i === half && substring > half) {
      return substring;
    }
  }

  if (thereIs == false) return -1;
  return substring;
}
