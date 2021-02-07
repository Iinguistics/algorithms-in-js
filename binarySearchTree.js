// ONE root
// ea parent is allowed only two children
// left has to be less than the parent, the right greater than the parent

class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }


    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
          var current = this.root;
          while(true){
              if(value === current.value) return undefined;
              if(value < current.value){
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  }else{
                      current = current.left;
                  }
              }else if(value > current.value){
                      if(current.right === null){
                        current.right = newNode;
                        return this;
                      }else{
                          current = current.right;
                      }
                  }
                }
              }

            
            find(value){
                if(this.root === null){
                    return false
                }
                
                var current = this.root;
                var found = false;
                while(current && !found){
                    if(value < current.value){
                        current = current.left;
                    }else if(value > current.value){
                        current = current.right;
                    }else{
                        return true;
                    }
               }
               return false;
            }

        }


const tree = new BinarySearchTree();
tree.insert(14);
tree.insert(15);
tree.insert(35);
tree.insert(4);
tree.insert(12);
console.log(tree);