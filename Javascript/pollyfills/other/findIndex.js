Array.prototype.myFindIndex = function(callback) {
    const arr = this;

    for(let i =0;i < arr.length;i++){
        const isTrue = callback(arr[i], i);
        if(isTrue) return i;
    }
    return -1;
}


var arr = [1,3,6,8,15];

const val1 = arr.myFindIndex(val => val === 8); // 3
const val2 = arr.myFindIndex(val => val === 20); // -1

console.log({val1, val2, arr});
