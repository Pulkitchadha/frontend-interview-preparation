// Solution 1:
function createSetTimout() {
    var timerId = 0;
    var timerMap = {}

    function mySetTimeout(callback, delay = 0) {
        var id = timerId++;
        timerMap[id] = true;
        
        var start = Date.now();
            
        function iterator() {
            if(!timerMap[id]) return;

            if(Date.now() > start + delay) {
                callback();
            } else {
                requestIdleCallback(iterator);
            }
        }
        requestIdleCallback(iterator);
        return timerId;
    }

    function myClearTimout(id) {
        delete timerId[id];
    }

    return {
        mySetTimeout,
        myClearTimout,
    }
}

var { mySetTimeout, myClearTimout } = createSetTimout();

var timerId = mySetTimeout(() => console.log("Timer is called"), 1000);
// myClearTimout(timerId);


// Solution 2:
function createSetTimout() {
    function mySetTimeout(callback, delay = 0) {
        var isCalled = false;
        
        var start = Date.now();
            
        function iterator() {
            if(isCalled) return;

            if(Date.now() > start + delay) {
                callback();
                isCalled = true;
            } else {
                requestIdleCallback(iterator);
            }
        }
        requestIdleCallback(iterator);
        return timerId;
    }
    return {
        mySetTimeout,
    }
}

var { mySetTimeout } = createSetTimout();

mySetTimeout(() => console.log("Timer is called"), 1000);
