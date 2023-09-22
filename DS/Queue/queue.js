// A Queue is a linear data structure which follows FIFO i.e First In First Out. Addition of item takes place from
// one side called tail & removal takes place from other side called head. For ex: People standing at the 
// bank or ticket counter

// Time Complexity : 
// 1. Access : O(n)
// 2. Search : O(n)
// 2. Insert : O(1)
// 2. Delete : O(1)

// Space Complexity : O(n)


// Method 1: Using array methods
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(value) {
      this.items.push(value);
    }
  
    dequeue(){
      return this.items.shift();
    }
  
    isEmpty(){
      return this.size() === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      return this.items.toString();
    }
  
    front() {
      return this.items.at(0);
    }
  
    rear() {
      return this.items.at(-1);
    }
}


let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('pranav');
queue.enqueue('sachin');
queue.enqueue('yogesh');
console.log(queue.print());
queue.dequeue();
queue.dequeue();
console.log(queue.print());
queue.enqueue('prashant');
queue.enqueue('yadav');
console.log(queue.print());
console.log(queue.size());
console.log(queue.front());
console.log(queue.rear());


// Method 1: Using array