function swap(arr,i,j) {
    [arr[i],arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr) {
    if(!Array.isArray(arr)) return;
    if(!arr.length) return arr;
    
    for(let i = 0;i < arr.length;i++) {
        var index = i;
        
        for(let j=i; j<arr.length;j++) {
            if(arr[index] > arr[j]) {
                index = j;
            }
        }
        swap(arr, i, index);
    }
    return arr;
}


var arr = [1,10,2,3,5,4,20,15];
selectionSort(arr);