function BST(){
    this.root = null;    // the root attribute will be assigned to a node later
}
function Node(value){
    this.value = value;   // the value attribute will be assigned based on user input when a node is instantiatedcopy
    this.left = null;   // the left attribute will be assigned to a node later
    this.right = null;  // the right attribute will be assigned to a node later
}

BST.prototype.insert = function(value) {
    var node = new Node(value);
    if (this.root == null) {
        this.root = node;
        return this;
    }
    var runner = this.root;
    while (runner) {
        if (value < runner.value) {
            if (runner.left) {
              runner = runner.left;
            }
            else {
              runner.left = new Node(value);
              return this;
            }
        } else if (value > runner.value) {
            if (runner.right) {
              runner = runner.right;
            } else {
              runner.right = new Node(value);
              return this;
            }
        }
    }
}

BST.prototype.inorder_traverse = function() {
  this.inorder_traverse_real(this.root);
}


BST.prototype.inorder_traverse_real = function(position) {
  if (position.left != null) {
    this.inorder_traverse_real(position.left);
  }
  console.log(position.value)
  if (position.right != null) {
    this.inorder_traverse_real(position.right);
  }
  return this;
}

BST.prototype.preorder_traverse = function() {
  this.preorder_traverse_real(this.root);
}

BST.prototype.preorder_traverse_real = function(position) {
  console.log(position.value);
  if (position.left != null) {
    this.preorder_traverse_real(position.left);
  }
  if (position.right != null) {
    this.preorder_traverse_real(position.right);
  }
  return this;
}

BST.prototype.postorder_traverse = function() {
  this.postorder_traverse_real(this.root);
}

BST.prototype.postorder_traverse_real = function(position) {
  if (position.left != null) {
    this.postorder_traverse_real(position.left);
  }
  if (position.right != null) {
    this.postorder_traverse_real(position.right);
  }
  console.log(position.value);
  return this;
}

BST.prototype.depth = function() {
    return this.depth_real(0, this.root)
}

BST.prototype.depth_real = function(count, position) {
    var thecount = count;
    if (position.left != null) {
        thecount++;
        this.depth_real(thecount, position.left);
    }
    if (position.right != null) {
        thecount++;
        return this.depth_real(thecount, position.right)
    }
    return thecount
}

var bst1 = new BST();
bst1.insert(5);
bst1.insert(4);
bst1.insert(7);
bst1.insert(9);
bst1.insert(3);
console.log(bst1.depth())
