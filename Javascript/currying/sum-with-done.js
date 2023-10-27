function sum(a) {
    function repeat(b) {
        if (b != undefined) a += b;
        return repeat;
    }
    repeat.done = () => {
        return a;
    }
    return repeat
}

sum(1)(2)()()(3).done(); // 6