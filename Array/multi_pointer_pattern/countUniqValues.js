// Multi Pointer Patter
//  Uniq values
// Input = Arr of number
// Output = number
// countUniqueValues([-1,1]) // 2
// countUniqueValues([-1,-1,0,0, 1, 2,2,2]) // 4
// countUniqueValues() // 0
// countUniqueValues("test") // 0


// Solution 1: O(n)
function countUniqValues(arr) {
    if (!Array.isArray(arr)) return 0;
    if (!arr.length) return 0;

    return [...new Set(arr)].length;
}

// Solution 2: O(n)
function countUniqValues(arr) {
    if (!Array.isArray(arr)) return 0;
    if (!arr.length) return 0;

    const freq = {};

    for (const num of arr) {
        freq[num] = ++freq[num] || 1;
    }

    return Object.keys(freq).length;
}

// Solution 3 : O(n)
function countUniqValues(arr) {
    if (!Array.isArray(arr)) return false;
    if (!arr.length) return false;
    // Check array is sorted if not sort the array

    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

// Solution 4 : O(n)
function countUniqueValues(arr = []) {
    if (!Array.isArray(arr)) return 0;
    if (arr.length === 0) return 0;

    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}


// countUniqValues([-1,1]) // 2
// countUniqValues([-1,-1,0,0, 1, 2,2,2]) // 4
// countUniqValues() // 0
// countUniqValues("test") // 0