// Doubley Linked List
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
         }else{
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
         }
         this.length ++;
         return this;
    }


    pop(){
      if(this.length === 0) return undefined;
      var poppedNode = this.tail;
      if(this.length === 1){
          this.head = null;
          this.tail = null;
      }else{
          var newTail = poppedNode.prev;
          newTail.next = null;
          this.tail = newTail;
          poppedNode.prev = null;
      }
        this.length --;
        return poppedNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            var newHead = oldHead.next;
            newHead.prev = null;
            this.head = newHead;
            oldHead.next = null;
        }
          this.length --;
          return oldHead;
      }


    unShift(val){
    var newNode = new Node(val);
    if(this.length === 0) return undefined;
    if(this.length === 1){
        var oldHead = this.head
        newNode.next = oldHead;
        oldHead.prev = newNode;
        this.tail = oldHead;
        this.head = newNode;
    }else{
        var oldHead = this.head
        newNode.next = oldHead;
        oldHead.prev = newNode;
        this.head = newNode;
    }
       this.length ++;
       return this;
    }


    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter, current;
        if(index <= this.length / 2){
            counter = 0
            current = this.head;
            while(counter !== index){
                current = current.next;
                counter ++;
               }
        }else{
            current = this.tail;
            counter = this.length - 1;
            while(counter !== index){
                current = current.prev;
                counter --;
            }
        }
        return current;
    }


    set(index,val){
        var foundNode = this.get(index);
        if(foundNode !== null){
           foundNode.val = val;
           return true;
        }
        return false;
    }

    insert(index, val){
        var newNode = new Node(val);
        if(index < 0 || index > this.length) return false;
        if(index === 0){
           return  !!this.unShift(val);
        }
        if(index === this.length){
           return  !!this.push(val);
        }
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length ++;
        return true;
    }


    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0){
           return this.shift();
        }
        if(index === this.length - 1){
           return this.pop();
        }
        var foundNode = this.get(index);
        var beforeNode = foundNode.prev;
        var afterNode = foundNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        foundNode.next = null;
        foundNode.prev = null;
        this.length -- ;
        return foundNode;
    }


    findNode(val){
        var current = this.head;
            while(current.val !== val){
                current = current.next;
                if(current.next === null){
                    return -1
                }
               }
               
               var beforeNode = current.prev;
               var afterNode = current.next;
               beforeNode.next = afterNode;
               afterNode.prev = beforeNode;
               return current;
        }
       
    


    setHead(val){
        var current = this.findNode(val);
               current.next = this.head;
               this.head.prev = current;
               current.prev = null;
               this.head = current;
               return this;
        }


        setTail(val){
               var current = this.findNode(val);
               current.prev = this.tail;
               this.tail.next = current;
               current.next = null;
               this.tail = current;
               return this;
        }


        insertBefore(node, nodeToInsert){
            var movingNode = this.findNode(nodeToInsert);

            var current = this.head;
            while(current.val !== node){
                current = current.next;
               }
               var beforeNode = current.prev;
               beforeNode.next = movingNode;
               movingNode.prev = beforeNode;
               movingNode.next = current;
               current.prev = movingNode;
               
               return current;
        }


        insertAfter(node, nodeToInsert){
            var movingNode = this.findNode(nodeToInsert);

            var current = this.head;
            while(current.val !== node){
                current = current.next;
               }
               var afterNode = current.next;
               afterNode.prev = movingNode;
               movingNode.next = afterNode;
               movingNode.prev = current;
               current.next = movingNode;
               
               return current;
        }


        //use insert()


        removeExistingNode(node){
            if(node === this.head) this.head = this.head.next;
            if(node === this.tail) this.tail = this.tail.prev;
            this.removeNodeBindings(node);
            } 
        


        removeNodeBindings(node){
            if(node.prev !== null) node.prev.next = node.next;
            if(node.next !== null) node.next.prev = node.prev;

                node.prev = null;
                node.next = null;
            }
}

const test = new doublyLinkedList();

test.push(2);
test.push(4);
test.push(6);
test.push(10);
test.push(15); 
test.push([55,22,35]);
test.removeExistingNode(4);
//console.log(test.containsNodeWithValue(34));
//test.removeNode(4);
//test.insertAfter(10,4)
//test.insertBefore(15,4);
//test.setHead(10);
//test.setTail(4);
//test.insert(4,"harry");
//test.remove(3);
//console.log(test.remove(2));
//test.set(1, 25)
//test.pop();
//test.shift();
//test.unShift('rodman');
console.log(test);

