

var obj = { a: 1, b:2, c: { d: 1}};
var copy = {...obj};

copy.c.d = 5;

console.log({ obj, copy});

// Solution 1:

var copy2 = JSON.parse(JSON.stringify(obj));

copy2.c.d = 5;

console.log({ obj, copy2 });


// Solution 2:

function deepClone(val) {
    if(Array.isArray(val)) {
        return val.map(i => deepClone(i));
    } else if(typeof val === "object") {
        const result = {};

        for(let key in val) {
            result[key] = deepClone(val[key]);
        }
        return result;
    } else {
        return val;
    }
}

var copy = deepClone(obj);

copy.c.d = 5;

console.log({ obj, copy });