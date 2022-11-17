// Multi Pointer Pattern
// Find element pair having sum zero
// Input = arr of number or string
// Output = array []
// yes,we can get the output from input by finding the pair.
// Samples:
// sumZero([-3,-2,-1, 0, 1, 2, 3]) // [-3,3]
// sumZero([-1,0,2 ]) // undefined or false
// sumZero(false) // undefined
// sumZero()

// Solution 1 : O(n2)
function sumZero(arr) {
    if (!Array.isArray(arr)) return;
    if (!arr.length) return;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return false;
}

// Solution 2: O(n)
function sumZero(arr) {
    if (!Array.isArray(arr)) return false;
    if (!arr.length) return false;
    // check array is sorted if not sort the array

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const sum = arr[start] + arr[end];

        if (sum === 0) {
            return [arr[start], arr[end]];
        } else if (sum > 0) {
            end--;
        } else {
            start++;
        }
    }
    return false;
}

// sumZero([-3,-2,-1, 0, 1, 2, 3]) // [-3,3]
// sumZero([-1,0,2 ]) // undefined or false
// sumZero(false) // undefined
// sumZero()