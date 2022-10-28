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
      this.root = new Node(value);
    }

    preOrder() {
      // 전위 순회
      let result = [];

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
      let result = [];

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
      let result = [];

      function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        result.push(node.value);
      }
      traverse(this.root);

      return result;
    }
  }

  let tree = new BinaryTree(1);
  tree.root.left = new Node(3);
  tree.root.right = new Node(5);
  tree.root.left.left = new Node(7);
  tree.root.left.right = new Node(9);
  tree.root.right.left = new Node(11);
  console.log(tree.preOrder()); // [1, 3, 7, 9, 5, 11]
  console.log(tree.inOrder()); // [7, 3, 9, 1, 11, 5]
  console.log(tree.postOrder()); // [7, 9, 3, 11, 5, 1]

  //배열로 이진트리를 구현한 경우
  let pineTree = [
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
    let result = [];
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
    let result = [];
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
    let result = [];
    function traverse(level) {
      if (binaryTree[level * 2]) traverse(level * 2);
      if (binaryTree[level * 2 + 1]) traverse(level * 2 + 1);
      result.push(binaryTree[level]);
    }
    traverse(1);

    return result;
  }

  console.log(postOrder(pineTree));

  // 트라이 자료구조 자동완성

  class TrieNode {
    constructor(value = "") {
      this.value = value;
      this.child = {};
      this.complete = false;
    }
  }

  class Trie {
    constructor() {
      this.root = new TrieNode();
    }

    insert(string) {
      // 문자열 삽입 로직
      let currentNode = this.root;
      for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (currentNode.child[currentChar] === undefined) {
          currentNode.child[currentChar] = new TrieNode(
            currentNode.value + currentChar
          );
          currentNode = currentNode.child[currentChar];
        } else {
          currentNode = currentNode.child[currentChar];
        }
      }
      currentNode.complete = true;
    }

    search(string) {
      // 완전 탐색을 하기 위해 탐색을 시작 할 노드를 찾는 로직(autoComplete 함수를 보완)
      let currentNode = this.root;
      for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (currentNode.child[currentChar] === undefined) {
          return undefined;
        } else {
          currentNode = currentNode.child[currentChar];
        }
      }
      return currentNode;
    }

    autoComplete(string) {
      // 완전탐색 후 노드의 complete 프로퍼티가 true인 단어들만 배열에 담아 반환하는 함수
      let node = this.search(string);
      if (node === undefined) return null;
      let data = [];
      let queue = [];
      queue.push(node);

      while (queue.length) {
        node = queue.shift();
        if (node.complete === true) {
          data.push(node.value);
        }
        if (Object.keys(node.child).length > 0) {
          for (let item in node.child) {
            queue.push(node.child[item]);
          }
        }
      }
      return data;
    }
  }

  let trie = new Trie();

  trie.insert("hell");
  trie.insert("hat");
  trie.insert("hot");
  trie.insert("hel");
  trie.insert("het");
  trie.insert("htt");

  console.log(trie.autoComplete("")); //  ['hel', 'het', 'hat', 'hot', 'htt', 'hell']
  console.log(trie.autoComplete("he")); //  ['hel', 'het', 'hell']
  console.log(trie.autoComplete("t")); // 없는 문자열의 경우에는 null 반환

  function pretty() {
    console.log("pretty");
  }