
JSON.myStringify = function (value) {
    if(["undefined", "function"].includes(typeof value)) {
        return undefined;
    } else if(["number", "boolean"].includes(typeof value)) {
        return value.toString();
    } if(typeof value === "string") {
         return '"' + value.replace(/"/g, '\\"') + '"';
    } else if(value === null) {
        return 'null'
    } else if(value.toString() === "NaN") {
        return 'null';
    } else if(value instanceof Date) {
        return value.toISOString();
    } else if(Array.isArray(value)) {
        return "[" + value.reduce((acc, item) => {
            acc.push(JSON.myStringify(item));
            return acc;
        }, []).join(',') + "]";
    }
    return "{" + Object.keys(value).reduce((acc, key) => {
        return [...acc, JSON.myStringify(key) + ':' + JSON.myStringify(value[key])];
    }, []).join(',') + "}";
}


JSON.myStringify(undefined); // undefined
JSON.myStringify(function() { }); // undefined
JSON.myStringify(NaN); // undefined
JSON.myStringify(Symbol('1')); // undefined
JSON.myStringify(1);
JSON.myStringify('text');
JSON.myStringify(false);
JSON.myStringify(null);
JSON.myStringify(new Date());
JSON.myStringify(["a", 1, "b", { c: 5}]);
JSON.myStringify({ a: 1, b: "2", c: '3'});


// Solution 2: 
function stringify(data) {
    if (data === undefined)
      return undefined
    if (data === null)
      return 'null'
    if (data.toString() === "NaN")
      return 'null'
    if (data === Infinity)
      return 'null'
    if (data.constructor === String)
      return '"' + data.replace(/"/g, '\\"') + '"'
    if (data.constructor === Number)
      return String(data)
    if (data.constructor === Boolean)
      return data ? 'true' : 'false'
    if (data.constructor === Array)
      return '[' + data.reduce((acc, v) => {
        if (v === undefined || v === NaN || v === Infinity)
          return [...acc, 'null']
        else
          return [...acc, stringify(v)]
      }, []).join(',') + ']'
    if (data.constructor === Object)
      return '{' + Object.keys(data).reduce((acc, k) => {
        if (data[k] === undefined)
          return acc
        else
          return [...acc, stringify(k) + ':' + stringify(data[k])]
      }, []).join(',') + '}'
  
      return '{}'
  }