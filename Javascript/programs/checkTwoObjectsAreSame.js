function isMatch(obj1, obj2) {
    for (var p in obj1) {
        if (typeof obj1[p] != "object" && obj1[p] != obj2[p]) {
            return false;
        } else if (typeof obj1[p] == "object" && typeof obj2[p] == "object") {
            console.log("found object", p)
            if (!isMatch(obj1[p], obj2[p])) {
                return false
            } else delete obj2[p]
        } else if ((typeof obj1[p] == "object" && typeof obj2[p] != "object") ||
            (typeof obj1[p] != "object" && typeof obj2[p] == "object")) {
            return false;
        }
        else
            delete obj2[p];
    }
    console.log("obj2-- ", obj2)

    if (Object.keys(obj2).length === 0 && obj2.constructor === Object)
        return true
    else return false;
}
console.log("Final is match: ", isMatch(obj1, obj2))