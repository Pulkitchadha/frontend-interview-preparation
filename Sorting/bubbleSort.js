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