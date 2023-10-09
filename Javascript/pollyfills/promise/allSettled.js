Promise.myAllSettled = function(promises) {
    return new Promise((resolve, reject) => {       
        var results = [];
        
        for(var p of promises) {
            p.then((val) => {
                results.push({ status: "fullfilled", value: val });
                
                if(results.length === promises.length) {
                    resolve(results);
                }
            }).catch((err) => {
               results.push({ status: "rejected", value: err }); 
                if(results.length === promises.length) {
                    resolve(results);
                }
            });
        }
    });
}


var p1 = Promise.reject(5);
var p2 = Promise.resolve(10);
var p3 = Promise.reject(15);
var promises = [p1,p2,p3];

Promise.myAllSettled(promises).then((data) => { // 5
    console.log("Result", data);
}).catch(err => {
    console.log("rejected", err);
});