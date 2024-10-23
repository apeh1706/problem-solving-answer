function getWeightedStrings(s, queries) {
    const weights = {};
    for (let i = 0; i < 26; i++) {
        weights[String.fromCharCode(97 + i)] = i + 1;
    }

    const weightedValues = new Set();
    let currentChar = null;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === currentChar) {
            count += 1;
        } else {
            currentChar = char;
            count = 1;
        }

        const weight = weights[char] * count;
        weightedValues.add(weight);
    }

    return queries.map(query => weightedValues.has(query) ? "Yes" : "No");
}

const s = "abbcccd";
const queries = [1, 3, 9, 8];
const output = getWeightedStrings(s, queries);
console.log(output);  
