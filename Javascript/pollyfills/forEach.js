
Array.prototype.myForEach = function(callback) {
    if(typeof callback !== "function") return;

    const arr = this;

    for(let i =0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


const arr = [1,2,3,4,5,6];
arr.myForEach((val,index) => {
    console.log(index,":", val);
});