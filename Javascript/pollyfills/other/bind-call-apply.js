const user = { firstName: "pulkit", lastName: "chadha"};

function printUser(city, state){
    return `${this.firstName} ${this.lastName} - ${city}, ${state}`
}

// ------------------------------ Bind Method ----------------------------
const newPrint = printUser.bind(user,"New delhi", "delhi");
const newPrint2 = printUser.bind(user,"New delhi");

console.log("Bind 1:", newPrint());
console.log("Bind 2:", newPrint2("U.P"));

// -------------------------------Polyfill of bind ---------------------------
Function.prototype.myBind = function(context, ...args) {
    return (...args2) => {
        return this.apply(context, args.concat(args2));
    }
}

var newPrint3 = printUser.myBind(user, "Noida", "U.P");
console.log("Pollyfill: Bind", newPrint3())

// ------------------------------ Call Method ----------------------------
console.log("Call: ", printUser.call(user, "New delhi", "delhi"));

// -------------------------------Polyfill of Call ---------------------------

Function.prototype.myCall = function(context, ...args) {
    return this.apply(context, args);
}

console.log("Pollyfill Call:", printUser.myCall(user, "New delhi", "delhi"));

// ------------------------------ Apply Method ----------------------------
console.log("Apply", printUser.apply(user, ["New delhi", "delhi"]));

// -------------------------------Polyfill of Apply ---------------------------
Function.prototype.myApply = function(context, ...args) {
    return this.call(context,...args);
}

console.log("Pollyfill Apply:", printUser.myApply(user, "New delhi", "delhi"));

