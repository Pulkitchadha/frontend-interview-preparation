fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
  console.log(resp);
}).catch((error) => {
  console.error(error);
}); 

function fetchWithTimeout(url, timeout) {
  const abortController = new AbortController();
  return new Promise((resolve, reject) => {
    setTimeout(() => abortController.abort(), timeout);
    fetch(url, { signal: abortController.signal }).then(resolve).catch(reject);
  });
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then((resp) => {
  console.log(resp);
}).catch((error) => {
  console.error(error);
});