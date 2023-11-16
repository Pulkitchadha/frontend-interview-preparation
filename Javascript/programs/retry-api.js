
/*
 * We have a function `getUser` that calls a service and uses a node-style callback. If the user drives
 * through a tunnel and the service call fails, we want to try again to see if the connection has been
 * restored.
 *
 * Write a utility function that allows us to provide `getUser` and a number indicating an amount of
 * retries (e.g. if `3` is provided, the service should be called a maximum of 4 times).
 *
 * Example usage:
 * tryService(getUser, 3, (error, data) => {
 *   //
 * })
 */
 
// Solution 1:
async function tryService (callServiceFn, maxRetries, callback) {
    const initRetry = 0;
    try {
        const result = await callServiceFn();
        callback(null, result);
    } catch(err) {
        if(initRetry <= maxRetries) {
            const result = await callServiceFn();
            callback(null, result);
        } else {
            callback(err, null);
        }
    } finally {
        initRetry++;
    }
}

// Solution 2:
async function tryService (callServiceFn, maxRetries = 0, callback) {
    if(maxRetries <= 0) return callback(new Error("Retry Limit exahausted"), null);
    try {
        const result = await callServiceFn();
        callback(null, result);
    } catch(err) {
        tryService (callServiceFn, maxRetries - 1, callback);
    }
}