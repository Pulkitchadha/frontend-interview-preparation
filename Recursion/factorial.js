// Solution 1: Iterative method
function factorial(num) {
    if (typeof num !== "number") return null;
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

factorial(3);

// Solution 2: Recursive method
function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

factorial(3);

// Solution 3 : Memoized solution method