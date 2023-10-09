Array.prototype.myFilter = function(callback) {
    if(typeof callback !== "function") return;

    const arr = this;
    const result = [];

    for(let i=0; i < arr.length;i++) {
        const isTrue = callback(arr[i],i,arr);
        if(isTrue) result.push(arr[i]);
    }

    return result;
}


const arr = [1,2,3,4,5,6,7,8];
const result = arr.myFilter(val => val % 2 === 0);
console.log(result); // [ 2, 4, 6, 8 ]