// Syntax : array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

var arr = [2,3,4,5,7];
var sum = arr.reduce((acc, value, index, arr) => acc+value, 0);
console.log("Sum:", sum);


// -------------------------------Polyfill of Reduce ---------------------------

Array.prototype.myReduce = function(callback, initialValue) {
    if(typeof callback !== "function") return;

    const arr = this;
    let result = initialValue;
    for(let i = 0; i <arr.length; i++) {
        result = callback(result, arr[i], i, arr);
    }

    return result;
}

var sum = arr.myReduce((acc, value, index, arr) => acc+value, 0);
console.log("Pollyfill Sum:", sum);

