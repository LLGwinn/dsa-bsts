class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    // insert into empty tree
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (val <= currentNode.val) {
        // insert after last node left
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }
        // move down one node left
        else currentNode = currentNode.left;
      }
      if (val > currentNode.val) {
        // insert after last node right
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }
        // move down one node right
        else currentNode = currentNode.right;
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    // insert into empty tree
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    function moveTo(node) {
      // node goes left
      if (val <=  node.val) {
        if (node.left) moveTo(node.left);
        else node.left = newNode;
      }
      // node goes right
      else {
        if (node.right) moveTo(node.right);
        else node.right = newNode;
      }
    }
    moveTo(this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;
    let currentNode = this.root;

    while(currentNode) {
      if (val === currentNode.val) return currentNode;
      if (val < currentNode) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return;
    function search(node) {
      if (val === node.val) return node;
      if (val <= node.val) {
        if (node.left) return search(node.left);
      } else {
        if (node.right) return search(node.right);
      }
    }
    return search(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];
    function traverse(node) {
      visitedNodes.push(node.val);    
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];
    function traverse(node) {   
      if (node.left) traverse(node.left);
      visitedNodes.push(node.val); 
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];
    function traverse(node) {   
      if (node.left) traverse(node.left); 
      if (node.right) traverse(node.right);
      visitedNodes.push(node.val);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return [];
    let stagingQueue = [this.root];
    let visitedNodes = [];

    while (stagingQueue.length) {
      let node = stagingQueue.shift();
      visitedNodes.push(node.val);
      if (node.left) stagingQueue.push(node.left);
      if (node.right) stagingQueue.push(node.right);
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
