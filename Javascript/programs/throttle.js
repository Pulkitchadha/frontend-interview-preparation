
function throttle(callback, delay) {
    let timerId;
    return (...args) => {
       if(!timerId) {
            timerId = setTimeout(() => {
                callback.apply(this, args);
                clearTimeout(timerId);
                timerId = null;
            }, delay);
       }
    }
}


function sendRequest(val) {
    console.log("Called", val);
}

var throttleSendRequest = throttle(sendRequest, 1);

throttleSendRequest('1');
throttleSendRequest('2');
throttleSendRequest('3');
throttleSendRequest(4);
throttleSendRequest(5);
throttleSendRequest(6);
throttleSendRequest(7);
throttleSendRequest(8);
throttleSendRequest(4);
throttleSendRequest(5);