function makePalindromeMax(s, left, right, k) {
    if (left > right) {
        return s;
    }

    if (k < 0) {
        return "-1"; 
    }

    if (s[left] !== s[right]) {
        let maxDigit = Math.max(s[left], s[right]);

        s = replaceAt(s, left, maxDigit);
        s = replaceAt(s, right, maxDigit);

        return makePalindromeMax(s, left + 1, right - 1, k - 1);
    } else {
        if (k > 0 && s[left] !== '9') {
            s = replaceAt(s, left, '9');
            s = replaceAt(s, right, '9');
            return makePalindromeMax(s, left + 1, right - 1, k - 2);
        }

        return makePalindromeMax(s, left + 1, right - 1, k);
    }
}

function replaceAt(s, index, char) {
    return s.substring(0, index) + char + s.substring(index + 1);
}

function highestPalindrome(s, k) {
    let result = makePalindromeMax(s, 0, s.length - 1, k);

    return result;
}

console.log(highestPalindrome("3943", 1)); // Output: 3993
console.log(highestPalindrome("932239", 2)); // Output: 992299
