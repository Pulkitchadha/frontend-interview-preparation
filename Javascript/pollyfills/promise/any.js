Promise.myAny = function(promises) {
    return new Promise((resolve, reject) => {
        var errors = [];
        
        for(var p of promises) {
            p.then((val) => {               
                resolve(val);
            }).catch((err) => {
               errors.push(err);
               if(errors.length === promises.length) reject(errors); 
            });
        }
    });
}


var p1 = Promise.reject(5);
var p2 = Promise.resolve(10);
var p3 = Promise.reject(15);
var promises = [p1,p2,p3];

Promise.myAny(promises).then((data) => {
    console.log("Result", data);  // 10
}).catch(err => {
    console.log("All rejected", err);
});