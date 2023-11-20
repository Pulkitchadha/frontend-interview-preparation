// Syntax : array.forEach(function(currentValue, index, arr), thisValue)

Array.prototype.myForEach = function(callback, context) {
    if(typeof callback !== "function") return;

    const arr = this;

    for(let i = 0; i < arr.length; i++) {
        callback.call(context, arr[i], i, arr);
    }
}


const arr = [1,2,3,4,5,6];
arr.myForEach((val,index) => {
    console.log(index,":", val);
});