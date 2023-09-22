// Object.freeze makes the object immutable i.e we can not add/update/delete any key. But it doesn't work for nested objects.

function deepFreeze(obj) {
    for(let key in obj) {
      if(typeof obj[key] === "object") {
        deepFreeze(obj[key]);
      } else {
        Object.freeze(obj);
      }
    }
    return Object.freeze(obj);
  }
  
  var obj = {
    a: 1,
    b: 2,
    c : {
      d: 10,
      e: 20
    }
  }
  
  
  var copy = deepFreeze(obj);
  
  
  copy.a = 11;
  copy.c.d = 12;
  copy.c.f = 30;
  
  console.log(copy); // not mutated