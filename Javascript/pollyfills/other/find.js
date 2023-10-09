
Array.prototype.myFind = function(callback) {
    if(typeof callback !== "function") return;

    const arr = this;

    for(let i =0; i < arr.length;i++) {
        const isTrue = callback(arr[i],i, arr);

        if(isTrue) return arr[i];
    }
}


const arr = [1,4,6,7,10];
const result = arr.myFind(val => val > 5);
console.log(result); // 6