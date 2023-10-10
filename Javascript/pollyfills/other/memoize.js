
function memoize(callback) {
    var cache = new Map();
    return (...args) => {
        var key = JSON.stringify(args);

        if(cache.has(key)) {
            console.log("Returned from cache");
            return cache.get(key);
        } else {
            var result = callback.apply(this, args);
            cache.set(key, result);
            return result;
        }
    }
}


function addNumbers(a,b,c) {
    return a+b+c;
}

var memoizedAddNum = memoize(addNumbers);
memoizedAddNum(1,2,3);
memoizedAddNum(1,2,3); 
memoizedAddNum(1,2,3); // return 6 from cache