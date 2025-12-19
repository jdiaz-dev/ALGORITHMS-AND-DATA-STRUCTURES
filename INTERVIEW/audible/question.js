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
    this.children = new Map();
    this.isWord = false;
    this.word = null;
  }
}

class CompoundWordFinder {
  constructor(words) {
    this.root = new TrieNode();
    this.wordSet = new Set(words);
    this.buildTrie(words);
  }

  buildTrie(words) {
    for (const word of words) {
      let node = this.root;
      for (const char of word) {
        if (!node.children.has(char)) {
          node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
      }
      node.isWord = true;
      node.word = word;
    }
  }

  findAllCompounds() {
    const result = [];

    for (const word of this.wordSet) {
      const compositions = [];
      this.findCompositions(word, 0, this.root, [], compositions, word);

      // Add all valid compositions (more than 1 part)
      for (const comp of compositions) {
        if (comp.length > 1) {
          result.push(comp);
        }
      }
    }

    return result;
  }

  findCompositions(word, pos, node, path, compositions, original) {
    // Reached end of word
    if (pos === word.length) {
      if (node.isWord && path.length > 0) {
        // Don't allow word to be composed of just itself
        if (!(path.length === 1 && path[0] === original)) {
          compositions.push([...path]);
        }
      }
      return;
    }

    const char = word[pos];
    if (!node.children.has(char)) {
      return;
    }

    const nextNode = node.children.get(char);

    // If we've found a complete word, we can start a new word
    if (nextNode.isWord) {
      path.push(nextNode.word);
      this.findCompositions(
        word,
        pos + 1,
        this.root,
        path,
        compositions,
        original
      );
      path.pop();
    }

    // Continue building current word
    this.findCompositions(
      word,
      pos + 1,
      nextNode,
      path,
      compositions,
      original
    );
  }
}

// Example usage
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

const finder = new CompoundWordFinder(words);
const result = finder.findAllCompounds();

// Group and display results
const grouped = new Map();
for (const composition of result) {
  const compound = composition.join("");
  if (!grouped.has(compound)) {
    grouped.set(compound, []);
  }
  grouped.get(compound).push(composition);
}

// Print results
for (const [compound, compositions] of Array.from(grouped).sort()) {
  for (const comp of compositions) {
    console.log(`${compound} -> ${comp.join(" + ")}`);
  }
}
