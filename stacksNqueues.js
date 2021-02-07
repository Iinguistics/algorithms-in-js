//stack
//Abstract data structure...LIFO  last in first out..last thing added first thing removed

//making with array
const stack = [];
// push & pop 
// unshift & shift  ---bad for big O , you have to re index everything

// making with singly linked list
// start from the first pointer but instead of calling the methods
// shift & unshift they call the push & pop since this is a linked list not an array.
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
    // calling push instead of unshift
    push(val){
        var newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = this.first;
        }else{
           newNode.next = this.first;
           this.first = newNode

           // or you can do it this way
        //    var temp = this.first;
        //    this.first = newNode;
        //    this.first.next = temp;
        }
        this.size ++;
        return this;
    }

    pop(){
        if(this.size === 0){
        return null;
        }
        if(this.size === 1){
            this.first = null;
            this.last = this.first
            this.size = 0;
        }else{
            var oldFirst = this.first;
            var newFirst = oldFirst.next;
            this.first = newFirst;
            this.size --;
        }
        return oldFirst;
    }


}

// const test = new Stack();
// test.push(5);
// test.push(23);
// test.push(16);
// test.pop()
// console.log(test);

//////////////////////////////////////////
// Queue
//FIFO  first in first out
// if using an array you can do unshift to add to beginning then pop to remove from end..when adding you would have to re-index everything..there is no way around this if ur using an array..
// better to create ur own class & not use an array.

// if you add at the front & remove from end you have to loop through the whole thing to remove the node
// so the best way to do it is add at the end then remove from the front
// Enqueue is push/unshift/adding to the list//Dequeue is removing

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// insertion & removal O(1) constant time
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enQueue(val){
        var newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode;
            this.last = this.first;
        }
        if(this.size === 1){
            var temp = this.last;
            temp.next = newNode;
            this.last = newNode;
            this.first = temp;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size ++;
        return this;
    }

    deQueue(){
        if(this.size === 0){
            return null;
        }
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }else{
            this.first = this.first.next;
            this.size--;
            return temp.value;
        }

    }
}

const test = new Queue();
test.enQueue(25);
test.enQueue(105);
test.enQueue(236);
test.enQueue(95);
test.enQueue(7);
test.deQueue();
console.log(test);