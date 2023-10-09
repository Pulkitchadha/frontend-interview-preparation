Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {       
        for(var p of promises) {
            // Case 1: Giving wrong result
            p.then(resolve).catch(reject);

            // Case 2: Giving right result
            Promise.resolve(p)
            .then(resolve, reject) 
            .catch(reject); 
        }
    });
}


var p1 = Promise.reject(5);
var p2 = Promise.resolve(10);
var p3 = Promise.reject(15);
var promises = [p1,p2,p3];

Promise.myRace(promises).then((data) => { 
    console.log("Result", data);
}).catch(err => {
    console.log("rejected", err); // 5
});