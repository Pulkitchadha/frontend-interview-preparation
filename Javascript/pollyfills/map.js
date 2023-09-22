

Array.prototype.myMap = function(callback) {
    if(typeof callback !== "function") return;
    const arr = this;
    const result = [];

    for(let i=0;i < arr.length; i++) {
        result.push(callback(arr[i],i, arr));
    }

    return result;
}



const arr = [1,2,3,4,5,10];
const result = arr.myMap(val => val * 2);
console.log(result);// [ 2, 4, 6, 8, 10, 20 ]

