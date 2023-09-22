
// Method 1:
function binarySearch(arr = [], item) {
    if(!Array.isArray(arr)) return -1;
    if(!arr.length || !item) return -1;

    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        const mid = Math.ceil((left+right)/2);

        if(arr[mid] === item) {
            return mid;
        } else if(arr[mid] < item) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

var arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];

binarySearch(arr, 2);

// Time complexity : O(logn) - Iterating logn number of times.
// Space complexity : O(1) - Using constant space.


// Method 2: Recursion
function binarySearchRec(arr = [], item, left =0,right = arr.length -1) {
    if(!arr.length || !item) return -1;

    const mid = Math.ceil((left+right)/2);

    if(arr[mid] === item) {
        return mid;
    }

    if(arr[mid] < item) {
        return binarySearchRec(arr, item, mid+1, right);
    } else {
        return binarySearchRec(arr,item, left, mid - 1);
    }
}

var arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 10];

binarySearchRec(arr, 8); // 9

// Time complexity : O(logn) - Iterating logn number of times.
// Space complexity : O(1) - Using constant space.


// Search in a sorted rotated array

function findPivot(arr = []) {
    for(let i=0;i < arr.length;i ++) {
        if(arr[i] > arr[i+1]) {
            return i;
        }
    }
    return -1;
}


function binarySearchPivot(arr = [], item) {
    if(!Array.isArray(arr) || !item) return -1;

    const pivot = findPivot(arr);

    // Array is not rotated.
    if(pivot === -1) {
        return binarySearchRec(arr,item, 0, arr.length - 1);
    }

    // Check item with pivot index
    if(arr[pivot] === item) {
        return pivot;
    }

    // If item is greater than first element, check on left half
    if(arr[0] < item) {
        return binarySearchRec(arr, item, 0, pivot - 1);
    }

    // else iterate on right half
    return binarySearchRec(arr, item, pivot + 1, arr.length - 1);
}

var arr = [3, 4, 5, 1, 2];

binarySearchPivot(arr, 4);