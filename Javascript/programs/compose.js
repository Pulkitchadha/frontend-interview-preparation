

function getSalary(val) {
    return val.salary;
}

function addBonus(val) {
    return val + 1000;
}

function deductTax(val) {
    return val - val * 0.1;
}

const user = { name : "pulkit", salary : 1000 };

// Solution 1:
function compose(...fns) {
    return (value) => {
        const inputFns = fns.reverse(); // reverse the order of fn.
        let result = value;

        for(const fn of inputFns) {
            result = fn(result);
        }
        return result;
    }
}

// Solution 2:
function compose(...fns) {
    return (value) => {
        return fns.reduceRight((result, fn) => fn(result), value);
    }
}

compose(
    deductTax,
    addBonus,
    getSalary,
)(user);