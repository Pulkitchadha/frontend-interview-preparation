Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        var results = [];
        
        for(var p of promises) {
            p.then((val) => {
                results.push(val);
                
                if(results.length === promises.length) {
                    resolve(results);
                }
            }).catch((err) => {
               reject(err); 
            });
        }
    });
}


var p1 = Promise.resolve(5);
var p2 = Promise.resolve(10);
var p3 = Promise.resolve(15);
var promises = [p1,p2,p3];

Promise.myAll(promises).then((data) => {
    console.log("Result", data); // [5,10,15]
});