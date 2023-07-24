function swap(arr,i,j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function bubbleSort(arr) {
    if(!Array.isArray(arr)) return;
    if(!arr.length) return;
    
    for(let i =0;i < arr.length;i++) {
        let isSwapped = false;
        for(let j = 0; j < arr.length;j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                isSwapped = true;
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}

var arr = [1,10,2,3,5,4,20,15];
bubbleSort(arr);

// Time complexity = O(n2)
// Space complexity = O(1)


// Method 2: Recursion
function swap(arr,i,j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

function bubbleSortRecursive(arr, n = arr.length - 1) {
    if(n === 1) return arr;

    for(var i = 0; i <n; i++) {
        if(arr[i] > arr[i+1]) {
            swap(arr, i, i+1);
        }
    }
  
    return bubbleSortRecursive(arr, n-1);
}

var arr = [1,10,2,3,5,4,20,15];
bubbleSortRecursive(arr);

// Time complexity: O(n2)
// Space Complexity : O(n)