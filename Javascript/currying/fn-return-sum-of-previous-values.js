// Solution 1:
function curryFn() {
    var total = 0;

    return (num) => {
        if(!num) return total;
        else {
            total+= num;
        }
    }
}

// Solution 2:
function curryFn() {
    var total = 0;
    return (num = 0) => {
        total+=num;
        return total;
    }
}

var sum = curryFn();

sum(1);
sum(2);
sum(3);
sum(4);
sum(5);
sum();