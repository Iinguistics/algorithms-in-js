// Graphs: connectivity, direction & cycles
// vertices are the nodes/values & edges are the connections


class Node{
    constructor(name){
    this.name = name;
    this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name));
        return this;
    }

  
    // Time O(v + e) | space O(v)
    depthFirstSearch(array){
        array.push(this.name);
        for(const child of this.children){
            child.depthFirstSearch(array);
        }
        return array;
    }
}

