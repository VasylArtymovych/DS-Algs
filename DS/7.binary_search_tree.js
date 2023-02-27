class Node {
  constructor(value) {
    this.data = value;
    this.right = null;
    this.left = null;
  }
}
// finctional component:
function insert(root, value) {
  if (root === null) {
    return new Node(value);
  } else if (root.data < value) {
    root.right = insert(root.right, value);
  } else if (root.data > value) {
    root.left = insert(root.left, value);
  }
  return root;
}

function printData(root) {
  if (root === null) {
    return;
  }
  printData(root.left);
  console.log(root.data);
  printData(root.right);
}

function search(root, value) {
  if (root === null) {
    return false;
  } else if (root.data === value) {
    return true;
  } else if (root.data < value) {
    return search(root.right, value);
  } else {
    return search(root.left, value);
  }
}

function deleteNode(root, value) {
  if (root === null) {
    return null;
  }
  if (root.data < value) {
    root.right = deleteNode(root.right, value);
  } else if (root.data > value) {
    root.left = deleteNode(root.left, value);
  } else {
    if (root.right === null && root.left === null) {
      return null;
    } else if (root.right === null) {
      return root.left;
    } else if (root.left === null) {
      return root.right;
    } else {
      const rightMin = findRightMin(root.right);
      root.data = rightMin;
      root.right = deleteNode(root.right, rightMin);
    }
  }
  return root;
}

function findRightMin(root) {
  let temp = root;
  while (temp.left !== null) {
    temp = temp.left;
  }
  return temp.data;
}

let root = null;
root = insert(root, 100);
root = insert(root, 50);
root = insert(root, 150);
root = insert(root, 200);
// root = deleteNode(root, 50);
// console.log('root', root);
// printData(root);
// console.log('search', search(root, 150));

// Class component ===============================================
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    function addNode(root, value) {
      if (root === null) {
        return new Node(value);
      } else if (root.data < value) {
        root.right = addNode(root.right, value);
      } else if (root.data > value) {
        root.left = addNode(root.left, value);
      }
      return root;
    }
    this.root = addNode(this.root, value);
    return this;
  }

  print() {
    function displayData(root) {
      if (root === null) {
        return;
      }
      // print value by accending (left => right), descending (right => left);
      displayData(root.left);
      console.log(root.data);
      displayData(root.right);
    }
    displayData(this.root);
  }

  search(value) {
    function find(root, value) {
      if (root === null) {
        return false;
      } else if (root.data === value) {
        return true;
      } else if (root.data < value) {
        return find(root.right, value);
      } else {
        return find(root.left, value);
      }
    }
    return find(this.root, value);
  }

  delete(value) {
    function deleteNode(root, value) {
      if (root === null) {
        return null;
      }
      if (root.data < value) {
        root.right = deleteNode(root.right, value);
      } else if (root.data > value) {
        root.left = deleteNode(root.left, value);
      } else {
        if (root.right === null && root.left === null) {
          return null;
        } else if (root.right === null) {
          return root.left;
        } else if (root.left === null) {
          return root.right;
        } else {
          const rightMin = findRightMin(root.right);
          root.data = rightMin;
          root.right = deleteNode(root.right, rightMin);
        }
      }
      return root;
    }

    function findRightMin(root) {
      // return root.left === null ? root.data : findRightMin(root.left);
      let temp = root;
      while (temp.left !== null) {
        temp = temp.left;
      }
      return temp.data;
    }

    this.root = deleteNode(this.root, value);
    return this;
  }
}

const bst = new BinarySearchTree();
bst.insert(100).insert(150).insert(50).insert(200).insert(120);
bst.delete(150);
console.log('bst', bst);
bst.print();
console.log('search', bst.search(500));

//=============================================================================================================
