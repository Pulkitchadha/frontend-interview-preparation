//  Syntax : string.repeat(count)

var str = "ha";

console.log(str.repeat(1));

String.prototype.myRepeat = function(count) {
  if(count < 0) return this.toString();
  if(count === Infinity) return;
  var str = this;
  var result = "";

  for(let i =0;i < count; i ++) {
    result+= str;
  }

  return result;
}

console.log(str.myRepeat(5));