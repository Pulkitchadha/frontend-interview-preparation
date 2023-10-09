
var p = new Promise((resolve, reject) => {
    resolve(10);
});

p.then(value => console.log("Success", value));
p.catch(err => console.log("err", err));
p.finally(() => console.log("finally called"));


Promise.resolve(5).then(val => console.log("Resolved", val));
Promise.reject(15).then(err => console.log("Rejected", err));


// Pollyfill
class MyPromise {
    constructor(executor) {
        this.state = "pending"; // pending, fullfilled, reject
        this.onThen = null;
        this.onCatch = null;
        this.onFinally = null;

        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);

        executor(this.resolver, this.rejector);
    }

    resolver(val) {
        this.onThen && this.onThen(val);
        this.onFinally?.();
    }

    rejector(err) {
        this.onCatch && this.onCatch(err);
        this.onFinally?.();
    }

    then(callback) {
        this.onThen = callback;
        return this;
    }

    catch(callback) {
        this.onCatch = callback;
        return this;
    }

    finally(callback) {
        this.onFinally = callback;
    }
}

MyPromise.resolve = function (val) {
    return new MyPromise((resolve, reject) => {
        resolve(val);
    })
}

MyPromise.reject = function (err) {
     return new MyPromise((resolve, reject) => {
         reject(err);
     });
}

function callback(resolve, reject) {
    setTimeout(() => reject(10), 2000);  
}
var p = new MyPromise(callback);

p.then(value => console.log("Success", value));
p.catch(err => console.log("err", err));
p.finally(() => console.log("finally called"));


MyPromise.resolve(5).then(val => console.log("Resolved", val));
MyPromise.reject(15).then(err => console.log("Rejected", err));

// Pollyfill with state
class MyPromise {
    constructor(executor) {
        this.state = "Pending"; // Pending, Fullfilled, Rejected
        this.onThen = null;
        this.onCatch = null;
        this.onFinally = null;

        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);

        executor(this.resolver, this.rejector);
    }

    resolver(val) {
        if(this.state === "Pending") {
            this.onThen && this.onThen(val);
            this.onFinally?.();
        }
        this.state = "Fullfilled";
    }

    rejector(err) {
        if(this.state === "Pending") {
            this.onCatch && this.onCatch(err);
            this.onFinally?.();
        }
        this.state = "Rejected";
    }

    then(callback) {
        this.onThen = callback;
        return this;
    }

    catch(callback) {
        this.onCatch = callback;
        return this;
    }

    finally(callback) {
        this.onFinally = callback;
    }
}

MyPromise.resolve = function (val) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => resolve(val), 2000);
    })
}

MyPromise.reject = function (err) {
     return new MyPromise((resolve, reject) => {
         setTimeout(() => reject(err), 2000);
     });
}

function callback(resolve, reject) {
    setTimeout(() => resolve(10), 2000);  
}
var p = new MyPromise(callback);

p.then(value => console.log("Success", value));
p.catch(err => console.log("Error", err));
p.finally(() => console.log("finally called"));


MyPromise.resolve(5).then(val => console.log("Resolved", val));
MyPromise.reject(15).catch(err => console.log("Rejected", err));