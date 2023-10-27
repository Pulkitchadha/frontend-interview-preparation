function sum(a) {
    return function repeat(b) {
        if (b != undefined) {
            a += b;
            return repeat;
        } else return a;
    }
}

sum(1)(2)(3)(); // 6