// solution 1
function power(num, exp) {
    return num ** exp;
}

power(2, 2);

// solution 2;
function power(num, exp) {
    let total = 1;
    for (let i = 0; i < exp; i++) {
        total * = num;
    }
    return total;
}

power(2, 2);

// solution 3;
function power(num, exp) {
    if (exp === 1) return num;
    return num * power(num, exp - 1);
}

power(2, 2);