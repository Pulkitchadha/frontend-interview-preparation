function cacheApi(timeout = 0) {
    const cache = {};
    return async (url) => {
      if(!url) return;
      const now = Date.now();
  
      if(cache[url] && cache[url].expireTime <= now) return cache[url].data;
      
      try {
         const response = await fetch(url);
         const data = await response.json();
         cache[url] = {
           data,
           expireTime: now + timeout,
         }
        return cache[url].data;
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  var call = cacheApi(2000);
  var url = "https://jsonplaceholder.typicode.com/todos/1";
  
  call(url).then(data => console.log("1", data));
  call(url).then(data => console.log("2", data));
  setTimeout(() => call(url).then(data => console.log("3", data)), 3000);