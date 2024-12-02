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
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }

    var curNode = this.root;
    while(true) {
      if(val < curNode.val) {
        if(curNode.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          curNode = curNode.left;
        }
      } else if(val > curNode.val) {
        if(curNode.right === null) {
          curNode.right = new Node(val);
          return this;
        } else {
          curNode = curNode.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curNode = this.root) {
    if(this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if(val < curNode.val) {
      if(curNode.left === null) {
        curNode.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, curNode.left);
    } else {
      if(curNode.right === null) {
        curNode.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, curNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curNode = this.root;
    let found = false;

    if(val === curNode.val) return curNode;

    while(curNode && !found) {
      if(val < curNode.val) {
        curNode = curNode.left;
      } else if(val > curNode.val) {
        curNode = curNode.right;
      } else {
        found = true;
      }
    }

    if(!found) return undefined;
    return curNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curNode = this.root) {
    if(this.root === null) return undefined;

    if(val < curNode.val) {
      if(curNode.left === null) return undefined;
      return this.findRecursively(val, curNode.left);
    } else if(val > curNode.val) {
      if(curNode.right === null) return undefined;
      return this.findRecursively(val, curNode.right);
    }

    return curNode;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let curNode = this.root;

    function traverse(node) {
      data.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(curNode);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let curNode = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node.val);
      if(node.right) traverse(node.right);
    }

    traverse(curNode);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let curNode = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(curNode);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let data = [];

    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      data.push(node.val);
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }

    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let nodeToBeRemoved = this.root;
    if(this.root.left === null && this.root.right === null) return undefined;
    let parent;

    while(nodeToBeRemoved !== val) {
      parent = nodeToBeRemoved;
      if(val < nodeToBeRemoved.val) {
        nodeToBeRemoved = nodeToBeRemoved.left;
      } else {
        nodeToBeRemoved = nodeToBeRemoved.right;
      }
    }

    if(nodeToBeRemoved !== this.root) {
      if(nodeToBeRemoved.left === null && nodeToBeRemoved.right === null) {
        if(parent.left === nodeToBeRemoved) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else if(nodeToBeRemoved.left !== null && nodeToBeRemoved.right !== null) {
        let rightParent = nodeToBeRemoved;
        let right = nodeToBeRemoved.right;
        if(right.left === null) {
          right.left = nodeToBeRemoved.left;
          if(parent.left === nodeToBeRemoved) {
            parent.left = right;
          } else {
            parent.right = right;
          }
        } else {
          while(right.left !== null) {
            rightParent = right;
            right = right.left;
          }
          if(parent.left === nodeToBeRemoved) {
            parent.left.val = right.val;
          } else {
            parent.right.val = right.val;
          }
          if(right.right !== null) {
            rightParent.left = right.right;
          } else {
            rightParent.left = null;
          }
        }
      } else {
        if(parent.left === nodeToBeRemoved) {
          if(nodeToBeRemoved.right === null) {
            parent.left = nodeToBeRemoved.left;
          } else {
            parent.left = nodeToBeRemoved.right;
          }
        } else {
          if(nodeToBeRemoved.right === null) {
            parent.right = nodeToBeRemoved.left;
          } else {
            parent.right = nodeToBeRemoved.right;
          }
        }
      }
    }

    return nodeToBeRemoved;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(curNode = this.root) {
    if(curNode === null) return;
    return maxDepth(curNode) - minDepth(curNode) <= 1;

    function maxDepth(curNode) {
      if(curNode === null) return 0;
      return 1 + Math.max(maxDepth(curNode.left), maxDepth(curNode.right));
    }

    function minDepth(curNode) {
      if(curNode === null) return 0;
      return 1 + Math.min(minDepth(curNode.left), minDepth(curNode.right));
    }
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest(curNode = this.root) {
    if(!this.root || (!this.root.left && !this.root.right)) return;

    while(curNode) {
      if(curNode.left && !curNode.right) return this.findSecondHighest(curNode.left);

      if(curNode.right && (!curNode.right.left && !curNode.right.right)) return curNode.val;

      curNode = curNode.right;
    }
  }
}

module.exports = BinarySearchTree;
