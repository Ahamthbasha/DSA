class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}

class trie{
    constructor(){
        this.root=new TrieNode()
    }

    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) node.children[char]=new TrieNode()
                node=node.children[char]
        }
        node.isEndOfWord=true
    }

    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord
    }

    startsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }

    autocomplete(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                return []
            }

            node=node.children[char]
        }

        let list=[]

        this.collectWords(node,word,list)
        return list
    }

    collectWords(node,word,list){
        if(node.isEndOfWord){
            list.push(word)
        }

        for(let char in node.children){
            this.collectWords(node.children[char],word+char,list)
        }
    }

    print(){
        let list=[]
        this.collectWords(this.root,"",list)
        console.log(list)
    }

    delete(word) {
        let node = this.root;
    
        // Traverse the word and check if it exists
        for (let char of word) {
            if (!node.children[char]) {
                return "no matching"; // Word doesn't exist
            }
            node = node.children[char];
        }
    
        // If the word is found, mark it as not the end of a word
        if (node.isEndOfWords) {
            node.isEndOfWords = false;
        }
    
        // Now, try to delete the nodes from the end to the beginning
        for (let i = word.length - 1; i >= 0; i--) {
            let char = word[i];
            let parentNode = this.parentNode(word, i);
    
            // If this node is not shared (i.e., it has no children and is not the end of another word)
            if (Object.entries(node.children).length === 0 && !node.isEndOfWords) {
                delete parentNode.children[char]; // Delete it from parent
            }
    
            // Ensure that `node` is valid before re-assigning
            if (parentNode.children[char]) {
                node = parentNode.children[char]; // Update node to continue checking next level
            } else {
                break; // If `parentNode.children[char]` is undefined, stop the loop
            }
        }
    }
    
    parentNode(word, index) {
        let node = this.root;
        // Traverse up to the parent of the current character in the word
        for (let i = 0; i < index; i++) {
            node = node.children[word[i]];
        }
        return node;
    }
    
}

const t=new trie()

t.insert("apple")
t.insert("app")
t.insert("banana")
t.insert("bat")
t.insert("batman")

console.log(t.search("apple"));  // true
console.log(t.search("app"));    // true
console.log(t.search("batman"));// true
console.log(t.search("ban")); 

console.log(t.startsWith("ba")); // true

console.log(t.autocomplete("ba")); // ["banana", "bat", "batman"]

t.print();  

t.delete("app");

console.log("After Deletion:");
t.print(); 