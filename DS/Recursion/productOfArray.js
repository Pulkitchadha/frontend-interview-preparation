// solution 1: Using reduce method
function productOfArray(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((total, num) => total * num, 1);
}

productOfArray([1, 2, 3]);

// solution 1: Iterative method
function productOfArray(arr) {
    if (!Array.isArray(arr)) return null;

    let total = 1;
    for (const num of arr) {
        total * = num;
    }
    return total;
}

productOfArray([1, 2, 3]);

// solution 2: Recursive method
function productOfArray(arr) {
    if (!Array.isArray(arr)) return null;
    let result = 1;

    function helper(tempArr) {
        if (tempArr.length === 0) return;

        result *= tempArr[0];

        helper(tempArr.slice(1));
    }
    helper(arr);
    return result;
}

productOfArray([1, 2, 3]);