// Check duplicacy in arguments
// Inputs = n. of integers.
// output = boolean, true if duplicate, false if no duplicate
// Simplet ex = areThereDuplicates(1, 2, 3) // false
// Complex ex = areThereDuplicates(1,2,3,4,2,1) // true
// Empty input = areThereDuplicates() // false
// Invalid input = areThereDuplicates([1,2,3], { a: 1, b:2 }) // false

// Solution 1: Naive solution using 2 loops , O(n2) & SC : O(1)
function areThereDuplicates(...params) {
    if (!params.length) return false;
    const allNumbers = params.some(item => typeof item !== "number" || typeof item !== "string");
    if (!allNumbers) return false;

    for (let i = 0; i < params.length; i++) {
        for (let j = i + 1; j < params.length; j++) {
            if (params[i] === params[j]) {
                return true;
            }
        }
    }
    return false;
}

// Solution 2: Frequency counter method, O(n) & SC: O(n)
function areThereDuplicates(...params) {
    if (!params.length) return false;

    const freq = {};
    for (const item of params) {
        if (!freq[item]) freq[item] = 1;
        else return true;
    }
    return false;
}

// Solution 3: Multi pointer method, O(n) & SC: O(n)
function areThereDuplicates(...params) {
    if (!params.length) return false;

    params.sort((a, b) => a - b); // not work for string
    let i = 0;
    let j = 1;

    while (j < params.length) {
        if (params[i] === params[j]) return true;
        i++;
        j++;
    }
    return false;
}

// Solution 3: Multi pointer method, O(n) & SC: O(1)
function areThereDuplicates(...params) {
    return params.length !== [...new Set(params)].length;
}

i
[1, 2, 3]
j
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true