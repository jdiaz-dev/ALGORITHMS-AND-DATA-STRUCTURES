/* 

You are given a potentially large list of words. Some of these are compounds, where all parts are also in the list. Identify all combinations where one words can be composed of two or more words of the same list and print or return them 

Input: [rockstar, rock, star, rocks, tar, stars, rockstars, super, highway, high, way, superhighway] 
Output: 
    rockstar -> rock + star 
    rockstar -> rocks + tar 
    superhighway -> super + highway 
    superhighway -> super + high + way

If returning, the output would be a list of lists, e.g. 
[ 
    [rock, star], -> rockstar 
    [rocks, tar], -> rockstar 
    [super, highway], -> superhighway 
    [super, high, way], -> superhighway ... 
] 
    
    
    rockstar 
        -> rock + star -> rocks + tar 
    superhighway 
        -> super + high + way -> super + highway


*/

class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
    this.word = null;
  }
}

class CompoundWordFinder {
  constructor(words) {
    this.root = new TrieNode();
    this.wordsSet = new Set(words);
    this.#buildTrie(words);
    console.log(JSON.stringify(this.root, null, 4));
  }
  findAllCompounds() {
    const seen = {};
    const results = [];
    for (const word of this.wordsSet) {
      const compositions = [];
      this.#findWordCompositions(word, 0, this.root, compositions, []);

      for (const composition of compositions) {
        if (composition.length > 1) {
          const key = composition.join("|");
          if (!seen[key]) {
            seen[key] = true;
            results.push(composition);
          }
        }
      }
    }
    return results;
  }
  #findWordCompositions(originalWord, position, node, compositions, path) {
    if (position === originalWord.length) {
      if (path.length > 1) compositions.push([...path]);
      return;
    }

    const character = originalWord[position];
    const nextNode = node.children[character];

    if (!nextNode) {
      return;
    }

    if (nextNode.isWord) {
      const foundWord = nextNode.word;
      if (originalWord !== foundWord) {
        path.push(foundWord);
        this.#findWordCompositions(
          originalWord,
          position + 1,
          this.root, //after to find the first word, go to search the another word using root again and complete some child of the root
          compositions,
          path
        );
        path.pop();
      }
    }

    this.#findWordCompositions(
      originalWord,
      position + 1,
      nextNode,
      compositions,
      path
    );
  }
  #buildTrie(words) {
    for (const word of words) {
      let node = this.root;

      for (const [_index, character] of Object.entries(word)) {
        if (!node.children[character]) {
          node.children[character] = new TrieNode();
        }
        node = node.children[character];
      }

      node.isWord = true;
      node.word = word;
    }
  }
}
/* 
  Space Complexity: O(N × L)
    N = number of words
    L = average word length

  Time Complexity: O(N × L)

*/

const words = [
  "rockstar",
  "rock",
  "star",
  "rocks",
  "tar",
  "stars",
  "rockstars",
  "super",
  "highway",
  "high",
  "way",
  "superhighway",
];

const compoundWordFinder = new CompoundWordFinder(words);
const res = compoundWordFinder.findAllCompounds();
console.log(res);
