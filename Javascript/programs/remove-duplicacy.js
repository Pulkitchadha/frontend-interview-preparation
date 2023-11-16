// Solution 1: Using hashing, O(n), Space Complexity : O(2n) = O(n)
function removeDuplicacy(arr = []) {
    if(!Array.isArray(arr)) return;
    let map = {};
    let result = [];

    for(const item of arr) {
        if(!map[item.a]) {
            result.push(item);
            map[item.a] = true;
        } 
    }

    return result;
}

// Solution 2: 
function removeDuplicacy(arr = []) {
    if(!Array.isArray(arr)) return ;

    const values = arr.map(i => i.a);

    return arr.filter((item,index) => !values.includes(item.a, index+1));
    
}


var arr = [{ a: 1}, {a: 1}, {a: 2}, {a: 3}];
removeDuplicacy(arr);


