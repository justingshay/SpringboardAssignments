/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    //setup
    let sum = 0;
      //need recursion for theoretically infinite number of children
    function recurSums(node) {
      for(let child of node.children) {
        sum += child.val;
        if(child.children.length > 0) recurSums(child);
      }
    }

    if(!this.root) {
      return 0;
    } else {
      sum += this.root.val;
      recurSums(this.root);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    //setup
    let count = 0;
    let sumEvens = 0;
      //like sum but count roots with even vals
    function recurCountEvens(node) {
      for(let child of node.children) {
        if(child.val % 2 === 0) {
          count++;
          sum += child.val;
        }
        if(child.children.length > 0) recurCountEvens(child);
      }
    }

    if(!this.root) {
      return 0;
    } else {
      this.root.val % 2 === 0 ? count++ : null;
      recurCountEvens(this.root);
    }
    console.log("Even sum:", sumEvens);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    //setup
    let count = 0;
      //count nodes with higher value
    function countNumHigherVals(node) {
      for(let child of node.children) {
        if(child.val > lowerBound) count++;
        if(child.children.length > 0) countNumHigherVals(child);
      }
    }

    if(!this.root) {
      return 0;
    } else {
      if(this.root.val > lowerBound) count++;
      countNumHigherVals(this.root);
    }
    return count;
  }
}

module.exports = { Tree, TreeNode };
