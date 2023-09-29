function getSalary(salary) {
    return salary;
}

function addBonus(salary) {
    return salary + 500;
}

function deductTax (grossSalary) {
    return grossSalary - (grossSalary * 0.10)
}


pipe(
    getSalary,
    addBonus,
    deductTax
)(10000); // 9450

// Solution 1:
function pipe(...fns) {
    return (salary) => {
        let result = salary;

        for(const fn of fns) {
            result = fn(result);
        }
        return result;
    }
}

// Solution 2:
function pipe(...fns) {
    return (value) => {
        return fns.reduce((result, fn) => fn(result), value);
    }
}


// Q2: 
var obj = {
    a : {
      b : (a,b,c) => a+b+c,
      c : (a,b,c) => a+b-c,
    },
    d : (a,b,c) => a-b-c
  }
  
  
pipe(obj)(1,1,1);

function pipe(obj) {
    return (...args) => {
        for(let key in obj) {
            if(typeof obj[key] === "function") {
                obj[key] = obj[key](...args);
            } else if(typeof obj[key] === "object") {
                obj[key] = pipe(obj[key])(...args);
            }
        }
        return obj;
    }
}