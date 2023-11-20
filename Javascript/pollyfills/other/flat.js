// Syntax : array.flat(depth)
// flat or flatten: 
// Time complexity : ?
// Space complexity : O(n)


// Solution 1: Iterative
function flatten(arr) {
    if(!Array.isArray(arr)) return;
    const result = [];

    function helper(items) {
        if(!arr.length) return [];

        for(const item of items) {
            if(Array.isArray(item)) {
                helper(item);
            } else {
                result.push(item);
            }
        }
    }
    helper(arr);
    return result;
}

// Solution 2: Recursive with depth
function flatten(arr, depth) {
    if(!Array.isArray(arr)) return [];
    const result = [];

    for(const value of arr) {
        if(Array.isArray(value) && depth > 0) {
            result.push(...flat(value, depth - 1))
        } else {
            result.push(value);
        }
    }
    return result;
}

// flatten(); // []
// flatten(1); // []
// flatten([]); // []
// flatten([1,2,3,[4,5,[6,7],8],9]); // [1,2,3,4,5,6,7,8,9]
// flatten([1,[2,[]], 3]) // [1,2,3]
// flatten([1,2,3,[4,5,[6,7],8],9], 2); // [1,2,3,4,5,6,7,8,9]
// flatten([1,2,3,[4,5,[6,7],8],9], 1) // [1,2,3,4,5,[6,7],8,9]