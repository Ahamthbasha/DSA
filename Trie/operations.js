//count words
//longestPrefix
//count prefix

class Node {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new Node();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    countWords() {
        let count = 0;
        let queue = [this.root];

        while (queue.length) {
            let currentNode = queue.shift();

            if (currentNode.isEndOfWord) {
                count++;
            }

            for (let child in currentNode.children) {
                queue.push(currentNode.children[child]);
            }
        }
        return count;
    }

    longestPrefix(word) {
        let node = this.root;
        let longestPrefix = '';

        for (const char of word) {
            if (!node.children[char]) {
                break;  // If the character doesn't exist in the Trie, stop.
            }
            
            node = node.children[char];
            longestPrefix += char;

            // Stop if this is no longer a valid word in the Trie
            if (!node.isEndOfWord) {
                break;
            }
        }
        return longestPrefix;
    }

    countPrefixes(word) {
        let count = 0;
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                break;
            }

            node = node.children[char];
            count++;
        }
        return count;
    }
}

const t = new Trie();

// Insert words
t.insert("cat");
t.insert("car");
t.insert("bat");
t.insert("burger");
t.insert("batter");

console.log(t.countWords());         // Expected output: 5 (There are 5 words in the Trie)
console.log(t.longestPrefix("bu"));  // Expected output: "cat" (The longest valid prefix in the Trie)
console.log(t.countPrefixes("ba"));    // Expected output: 2 (There are two prefixes "bat" and "batter")
