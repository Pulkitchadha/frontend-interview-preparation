String.prototype.mySplit = function(delimiter) {
    if(delimiter === "") return Array.from(this);
    var str = this;
    var result = [];

    function iterator(value) {
        if(!value.length) return;
        
        var index = value.indexOf(delimiter);
        if(index >= 0) {
            var str = value.slice(0, index);
            result.push(str);
            iterator(value.slice(index+ delimiter.length));
        } else {
            result.push(value);
        }
    }

    iterator(str);
    return result;
}

var str = "My name is pulkit";
str.mySplit(""); // ['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'p', 'u', 'l', 'k', 'i', 't']
str.mySplit(" "); // ['My', 'name', 'is', 'pulkit']
str.mySplit("is"); // ['My name ', ' pulkit']