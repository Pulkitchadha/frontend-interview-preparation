// same freq string or anagram
// input arguments = s1 & s2 string
// output boolean = true if anagram ,  false if not
// sample=
// anagram("aaz", "aza"); //true
// anagram("pulkit", "tiklup"); //true
// anagram(); // false
// anagram("aaz", "aaza");  // false boz length is diff.
// anagram(false, 1); // false
// anagram("Aaz", "aaZ"); // false or true

// Solution 1: O(n2)
function anagram(s1, s2) {
    if (typeof s1 != "string" || typeof s2 != "string") return false;
    if (s1.length != s2.length) return false;

    const arr1 = s1.split('');
    const arr2 = s2.split('');

    for (let i = 0; i < arr1.length; i++) {
        let exists = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                exists = true;
                arr2.splice(j, 1);
                break;
            }
        }
        if (!exists) return false;
    }
    return true;
}

// Solution 2: O(3n) = O(n)
function anagram(s1, s2) {
    if (typeof s1 != "string" || typeof s2 != "string") return false;
    if (s1.length !== s2.length) return false;

    const freqS1 = {};
    const freqS2 = {};

    for (const char of s1) {
        freqS1[char] = ++freqS1[char] || 1;
    }
    for (const char of s2) {
        freqS2[char] = ++freqS2[char] || 1;
    }

    for (const key in freqS1) {
        if (!freqS2.hasOwnProperty(key)) return false; // check the char existence
        if (freqS1[key] !== freqS2[key]) return false // check the char frequency
    }

    return true;
}

// Solution 3 : O(2n) = O(n)
function anagram(str1, str2) {
    if (typeof str1 != "string" || typeof str2 != "string") return false;
    if (str1.length !== str2.length) return false;

    const freq = {};

    for (const char of str1) {
        freq[char] = ++freq[char] || 1;
    }

    for (const char of str2) {
        if (!freq[char]) return false;
        else freq[char] = -1;
    }
    return true;
}

// anagram("aaz", "aza"); //true
// anagram("pulkit", "tiklup"); //true
// anagram("", ""); // false
// anagram("aaz", "aaza");  // false boz length is diff.
// anagram(false, 1); // false