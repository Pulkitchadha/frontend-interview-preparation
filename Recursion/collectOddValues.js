// Solution 1: Using filter method.
function collectOddValues(arr) {
    return arr.filter(n => n % 2 !== 0);
}

collectOddValues([2, 5, 7, 8]);

// Solution 2: Iterative method
function collectOddValues(arr) {
    if (!Array.isArray(arr)) return null;
    if (!arr.length) return [];

    let tempArr = [];
    for (const num of arr) {
        if (num % 2 !== 0) tempArr.push(num);
    }
    return tempArr;
}

collectOddValues([2, 5, 7, 8]);

// Solution 3: Recursive method
function collectOddValues(arr) {
    let tempArr = [];

    function helper(arr) {
        if (arr.length === 0) return;

        if (arr[0] % 2 !== 0) {
            tempArr.push(arr[0]);
        }

        helper(arr.slice(1));
    }

    helper(arr);
    return tempArr;
}

collectOddValues([2, 5, 7, 8]);
