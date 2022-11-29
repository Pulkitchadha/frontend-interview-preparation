// Frequency Counter Method
// check if both the number have same digit.
// Inputs = n1 number, n2 number
// Outputs = true if same free, false if not same
// Simple Ex = sameFrequency(121, 211) // true
// Complex Ex = sameFrequency(121, 1212) // false
// Empty input = sameFrequency() // false
// Invalid input = sameFrequeny(false, "test") // false


// Solution 1 : O(n2), SC : O(2n) = O(n)
function sameFrequency(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") return false;
    const arr1 = n1.toString().split(''); // convert number to array.
    const arr2 = n2.toString().split(''); // convert number to array.

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr2.splice(index, 1);
        } else {
            return false;
        }
    }
    return true;
}

// Solution 2 : O(3n) = O(n), SC: O(1)
function sameFrequency(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") return false;

    let str1 = n1.toString();
    let str2 = n2.toString();

    if (str1.length !== str2.length) return false;

    let freq1 = {};
    let freq2 = {};

    for (const char of str1) {
        freq1[char] = ++freq1[char] || 1;
    }

    for (const char of str2) {
        freq2[char] = ++freq2[char] || 1;
    }

    for (const char in freq1) {
        if (!freq2.hasOwnProperty(char)) return false; // checking the existence of number
        if (freq2[char] !== freq1[char]) return false; // checking the frequency
    }

    return true;
}

sameFreq(121, 211);

[1, 2, 1], [2, 1, 1]