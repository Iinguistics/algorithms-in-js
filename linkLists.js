// piece of data - val
// reference to next node - next
// Singly Linked List
class Node {
    constructor(val){
    this.val = val;
    this.next = null;  // set at null, at first there will be nothing, only after two val's are entered will you have a next pointer
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
       const newNode = new Node(val);
       if(!this.head){
           this.head = newNode;
           this.tail = this.head;
       }else{
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length ++;
       return this;
    }
    
    // Remove last node
    pop(){
        if(this.length === 0){
            return undefined;
        }
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    
    // remove first node
    shift(){
        if(this.length === 0){
            return undefined;
        }
        const oldHead = this.head;
        const newHead = oldHead.next;
        this.head = newHead;
        this.length --;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return oldHead;
    }
    // Add node to beginning on list
    unShift(val){
      const newNode = new Node(val)
      if(!this.head){
      this.head = newNode;
      this.tail = this.head;
      this.next = null;
      }else{
          newNode.next = this.head;
          this.head = newNode;
          this.length ++;
          return this;
    }
  }
  
  // get the node value at specific index
  get(index){
  if(index < 0 || index >= this.length){
      return null;
    }
    var counter = 0;
    var current = this.head;
    while(counter !== index){
        current = current.next;
        counter ++;
    }
    return current;
  }

  // Set new value for specified node
  set(index, val){
    var foundNode = this.get(index)
    if(foundNode){
        foundNode.val = val;
        return true;
     }
     return false;
    }

    // Insert   ..new node at the specified index
    insert(index, val){
        var newNode = new Node(val);
        if(index < 0 || index >= this.length){
            return false;
          }
          if(index === this.length-1){
              this.push(val);
          }
          if(index === 0){
              this.unShift(val);
              return true;
          }
          var foundNode = this.get(index -1);
          var temp = foundNode.next;
          foundNode.next = newNode;
          newNode.next = temp;
          this.length ++;
          return true;
    }
   
    // Remove   ..node at specified index
    remove(index){
        if(index < 0 || index >= this.length){
            return false;
          }
          if(index === this.length-1){
              this.pop();
          }
          if(index === 0){
              this.shift();
              return true;
          }
          var prevNode = this.get(index -1);
          var removeNode = prevNode.next;
          var nextNode = removeNode.next;
          prevNode.next = nextNode;
          this.length --;
          return removeNode;
    }

    //Reverse linked list ..in place
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i<this.length; i++){
         next = node.next;
         node.next = prev;
         prev = node;
         node = next;
        }
        return this;
    }

 
    // remove kth number from end of the list
    removeNthNode(k){
        let counter = 1;
        let first = this.head;
        let second = this.head;
        while(counter <= k){
            second = second.next;
            counter ++;
        }
        if(second === null){
            this.head.value = this.head.next.value;
            this.head.next = this.head.next.next;
            return;
        }
        while(second.next !== null){
            second = second.next;
            first = first.next;
        }
        first.next = first.next.next;
    }
}

const testing = new SinglyLinkedList()
testing.push(5)
testing.push(10)
testing.push(55)
testing.push(105)
testing.push(75)
testing.push(12)
testing.push(605)
testing.push(224)
testing.push(365)
testing.push(982)
testing.removeNth(2)
//testing.set(1,64)
//testing.insert(0,46);
//testing.remove(1);
//console.log(testing.reverse());
console.log(testing)


