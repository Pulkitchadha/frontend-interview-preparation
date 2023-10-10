
function sum(...args) {
    if(args.length === 5) return args.reduce((total, num) => total+ num, 0);
    
    return (...args2) => {
        const arr = [...args,...args2];

        if(arr.length === 5) {
            return arr.reduce((total, num) => total+ num, 0);
        } else {
            return sum(...arr);
        }
    }
}


console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1)(2)(3)(4)(5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1, 2)(3, 4, 5));
console.log(sum(1)(2, 3, 4, 5));