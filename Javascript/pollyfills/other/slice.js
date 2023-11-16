// Syntax: string.slice(start, end)


var str = "pulkit chadha";

str.slice(true,false);


String.prototype.mySlice = function(start = 0, end) {
  if(typeof start !== "string" || typeof end !== "string") return "";
  const str = this;
  const len = end || str.length;
  let result = ""

  for(let i = start;i < len; i++) {
    result+= str[i];
  }
  

  return result;  
}

str.mySlice(0,6); // simple
str.mySlice(5) // complex
str.mySlice(); // empty input
str.mySlice(true, false); // invalid input