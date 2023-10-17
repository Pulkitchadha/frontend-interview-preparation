
// Solution 1: Time complexity: O(n), Space Complexity: O(n)
function removeDuplicatesFromString(str = "") {
    if (typeof str !== "string") return;
    var strArr = str.split('');
    var set = new Set(strArr);
    return Array.from(set).join('');
}


// Solution 2 : Time complexity: O(n2), Space Complexity: O(n)
function removeDuplicatesFromString(str = "") {
    if (typeof str !== "string") return;
    let result = "";

    for (const char of str) {
        const index = result.indexOf(char);
        if (index === -1) result += char;
    }
    return result;
}

// Solution 3: : Time complexity: O(n), Space Complexity: O(n)
function removeDuplicatesFromString(str) {
    if (typeof str !== "string") return;

    var freq = {};

    for (let char of str) {
        freq[char] = ++freq[char] || 1;
    }
    return Object.keys(freq).join('');
}

// Solution 4: : Time complexity: O(n), Space Complexity: O(n)
function removeDuplicatesFromString(str) {
    if (typeof str !== "string") return;

    var map = {};
    var result = "";

    for (let char of str) {
        if (!map[char]) {
            result += char;
            map[char] = true;;
        }
    }
    return result;
}

// Solution 5: Using Map, : Time complexity: O(n), Space Complexity: O(n)
function removeDuplicatesFromString(str) {
    if (typeof str !== "string") return;

    var map = new Map();
    var result = "";

    for (let char of str) {
        if (!map.has(char)) {
            result += char;
            map.set(char, 1);
        }
    }
    return result;
}

var str = "hello world"
console.log("Original String ", str);
console.log("After removing duplicates: ", removeDuplicatesFromString(str));