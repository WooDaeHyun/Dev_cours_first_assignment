//클래스로 이진트리를 구현한 경우
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    if (!value) {
        throw Error('값이 존재하지 않습니다.');
    }
    this.root = new Node(value);
  }

  preOrder() {
    // 전위 순회
    const result = [];

    function traverse(node) {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return result;
  }

  inOrder() {
    // 중위 순회
    const result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);

    return result;
  }

  postOrder() {
    // 후위 순회
    const result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);

    return result;
  }
}

// const treee = new BinaryTree();
const tree = new BinaryTree(1);
tree.root.left = new Node(3);
tree.root.right = new Node(5);
tree.root.left.left = new Node(7);
tree.root.left.right = new Node(9);
tree.root.right.left = new Node(11);
console.log(tree.preOrder()); // [1, 3, 7, 9, 5, 11]
console.log(tree.inOrder()); // [7, 3, 9, 1, 11, 5]
console.log(tree.postOrder()); // [7, 9, 3, 11, 5, 1]

//배열로 이진트리를 구현한 경우
const pineTree = [
  undefined,
  9,
  3,
  8,
  2,
  5,
  undefined,
  7,
  undefined,
  undefined,
  undefined,
  4,
];

function preOrder(binaryTree) {
  // 전위 순회
  const result = [];
  function traverse(level) {
    result.push(binaryTree[level]);
    if (binaryTree[level * 2]) traverse(level * 2);
    if (binaryTree[level * 2 + 1]) traverse(level * 2 + 1);
  }
  traverse(1);

  return result;
}

console.log(preOrder(pineTree));

function inOrder(binaryTree) {
  // 중위 순회
  const result = [];
  function traverse(level) {
    if (binaryTree[level * 2]) traverse(level * 2);
    result.push(binaryTree[level]);
    if (binaryTree[level * 2 + 1]) traverse(level * 2 + 1);
  }
  traverse(1);

  return result;
}

console.log(inOrder(pineTree));

function postOrder(binaryTree) {
  // 후위 순회
  const result = [];
  function traverse(level) {
    if (binaryTree[level * 2]) traverse(level * 2);
    if (binaryTree[level * 2 + 1]) traverse(level * 2 + 1);
    result.push(binaryTree[level]);
  }
  traverse(1);

  return result;
}

console.log(postOrder(pineTree));