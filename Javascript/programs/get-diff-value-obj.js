var obj = {
    i: 0,
}

// Method 1: Proxy
proxyObj = new Proxy(obj, {
    get(target, key) {
        target[key] += 1;
        return target[key];
    },
})

// Method 2: Using Object.definePropery
var count = 0;

Object.defineProperty(obj, "i", {
  get() {
    return ++count;
  }
})


console.log(proxyObj.i);
console.log(proxyObj.i);
console.log(proxyObj.i);
// 1 2 3
