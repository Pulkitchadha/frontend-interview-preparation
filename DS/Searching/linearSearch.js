
// Method 1:
function linearSearch(arr = [], item) {
    if(!Array.isArray(arr)) return -1;
    if(!arr.length || !item) return -1;

    for(let i=0; i< arr.length;i++) {
        if(arr[i] === item) {
            return i;
        }
    }
    return -1;
}

var arr = [1,5,10,3, 6, 2, 15];

linearSearch(arr, 15);

// Time complexity : O(n) - Iterating n number of times.
// Space complexity : O(1) - Using constant space.


// Method 2: Using indexOf
function linearSearch(arr, item) {
    return arr.indexOf(item);
}


var arr = [1,5,10,3, 6, 2, 15];

linearSearch(arr, 10);

// Time complexity : O(n) - Iterating n number of times.
// Space complexity : O(1) - Using constant space.