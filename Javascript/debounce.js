function debounce(callback, delay) {
    let timerId;
    return (...args) => {
        timerId && clearTimeout(timerId);
        timerId = setTimeout(() => callback.apply(this, args), delay);
    }
}


function search(val) {
    console.log("Called", val);
}

const debounceSearch = debounce(search, 300);

debounceSearch("1");
debounceSearch("2");
debounceSearch("3");
debounceSearch("4");
debounceSearch("5");
debounceSearch("6");



// Method 2: Leading & Trailing
function debounce(callback, delay, options = {}) {
    let { trailing = true, leading = true } = options;
    let timerId;
    return (...args) => {

        timerId && clearTimeout(timerId);
        
        if(!timerId && trailing) {
            callback.apply(this, args);
        }

        timerId = setTimeout(() => {
            if(leading) {
                callback.apply(this, args)
            }
            timerId = null
        } , delay);
    }
}


function search(val) {
    console.log("Called", val);
}

const debounceSearch = debounce(search, 300);

debounceSearch("1");
debounceSearch("2");
debounceSearch("3");
debounceSearch("4");
debounceSearch("5");
debounceSearch("6");
