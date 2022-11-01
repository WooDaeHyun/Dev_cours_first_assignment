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
    for (const item of string) {
      const currentChar = item;
      if (!currentNode.child[currentChar]) {
        currentNode.child[currentChar] = new TrieNode(
          currentNode.value + currentChar
        );
      } 
      currentNode = currentNode.child[currentChar];
    }
    currentNode.complete = true;
  }

  search(string) {
    // 완전 탐색을 하기 위해 탐색을 시작 할 노드를 찾는 로직(autoComplete 함수를 보완)
    let currentNode = this.root;
    for (const item of string) {
        const currentChar = item;
      if (!currentNode.child[currentChar]) {
        return undefined;
      } else {
        currentNode = currentNode.child[currentChar];
      }
    }
    return currentNode;
  }

  autoComplete(string) {
    // 완전탐색 후 노드의 complete 프로퍼티가 true인 단어들만 배열에 담아 반환하는 함수
    if(!string){
      throw Error('You didn\'t enter anything!!')
    }
    let node = this.search(string);
    if (!node) {
      throw Error(`There's no ${string} word!!`)
    }
    const data = [];
    const queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      if (node.complete) {
        data.push(node.value);
      }
      if (Object.keys(node.child).length > 0) {
        for (const item in node.child) {
          queue.push(node.child[item]);
        }
      }
    }
    return data;
  }
}

const trie = new Trie();

trie.insert("hell");
trie.insert("hat");
trie.insert("hot");
trie.insert("hel");
trie.insert("het");
trie.insert("htt");

console.log(trie.autoComplete("h")); //  ['hel', 'het', 'hat', 'hot', 'htt', 'hell']
console.log(trie.autoComplete("he")); //  ['hel', 'het', 'hell']
// console.log(trie.autoComplete("z")); // 예외처리 
// console.log(trie.autoComplete('')); // 예외처리