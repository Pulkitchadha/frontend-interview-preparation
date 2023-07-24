// A Stack is a linear data structure which follows LIFO i.e Last In First Out. The addition & removal
// takes places from the same end i.e top.For ex: a pile of books, a stack of tray or dishes.

// Time Complexity : 
// 1. Access : O(n)
// 2. Search : O(n)
// 2. Insert : O(1)
// 2. Delete : O(1)

// Space Complexity : O(n)


// Method 1: Using array methods
class Stack {
    constructor() {
      this.items = [];
    }
 
   push(value) {
     this.items.push(value);
   }
 
   pop() {
     return this.items.pop();
   }
 
   peek() {
     return this.items.at(-1);
   }
 
   isEmpty() {
     return this.size() === 0;
   }
 
   size() {
     return this.items.length;
   }
 
   clear() {
     this.items = [];
   }
   
 }
 
 var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());

// Method 2: Using array.

class Stack {
    constructor() {
      this.items = [];
      this.top = 0;
    }
 
   push(value) {
     this.items[this.top++] = value;
   }
 
   pop() {
     return this.items[--this.top];
   }
 
   peek() {
     return this.items[this.top-1];
   }
 
   isEmpty() {
     return this.size() === 0;
   }
 
   size() {
     return this.top;
   }
 
   clear() {
     this.items = [];
     this.top = 0;
   }
   
 }
 
 var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());