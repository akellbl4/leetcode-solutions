/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isAnagram(s, t) {
	if (s.length !== t.length) {
		return false;
	}

	const sm = createMap(s);
	const tm = createMap(t);

	return compareMaps(sm, tm);
}

function createMap(str) {
	const sl = str.length;
	const m = {};

	for (let i = 0; i < sl; i++) {
		const s = str[i];

		if (m[s]) {
			m[s] += 1;
			continue;
		}
		m[s] = 1;
	}
	return m;
}

function compareMaps(m1, m2) {
	for (let i in m1) {
		if (m1[i] !== m2[i]) {
			return false;
		}
	}
	return true;
}
