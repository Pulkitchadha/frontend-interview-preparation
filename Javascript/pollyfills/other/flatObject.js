function isObject(val) {
    return val && typeof val === "object" && !Array.isArray(val);
  }
  
function flatten(obj) {
    if(!obj) return "Empty input";
    if(typeof obj !== "object" || Array.isArray(obj)) return "Invalid input";
  
    let result = {};
    for(let key in obj) {
        if(isObject(obj[key])) {
            const temp = flatten(obj[key]);

            for(let i in temp) {
                result[key + "." + i] = temp[i];
            }
        } else if(Array.isArray(obj[key])) {
            for(let i = 0; i < obj[key].length; i++) {
                result[key + ".[" + i + "]"] = flatten(obj[key][i]);
            }
        } else {
            result[key] = obj[key];
        }
    }
    return result;
}
  
  
  var obj = {
      key1: 'a',
      key2: null,
      key3: {
          key31: 'b',
          key32: null,
          key33: {
              key331: 'e',
              key332: null,
          },
          key34: null,
      },
      key4: [{
          key41: 'c',
          key42: null,
          key43 : 'd',
      }, {
          key411: 'c',
          key412: null,
          key413 : 'd',
          key414: {
              key4141: 'f',
              key4142: null,
          }
      }]
  };
  var obj1 = { a:1, b: { c: 2}};
  
  // flatten(obj1); // simple
  flatten(obj); // complex
  // flatten(); // empty input
  // flatten(true); // invalid input like "pulkit", 5, null, array