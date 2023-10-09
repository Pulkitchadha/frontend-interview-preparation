// Syntax : array.flat(depth)
// flat or flatten: 
// Time complexity : ?
// Space complexity : O(n)

function flat(arr) {
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

console.log(flat([[1],[2],[3]])); // [1,2,3] - simple example
console.log(flat([[1],[2],[[[[[[5]]]]]], 6])); // [1,2,5,6] - complex example
console.log(flat([])); // undefined - empty inputs
console.log(flat("pulkit")); // undefined - invalid inputs