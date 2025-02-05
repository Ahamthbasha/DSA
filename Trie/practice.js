class Node{
    constructor(){
        this.children={}
        this.isEndOfWords=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let currentNode=this.root
        for(let char of word){
            if(!currentNode.children[char]){
                currentNode.children[char]=new Node()
            }
            currentNode=currentNode.children[char]//move the pointer
        }

        currentNode.isEndOfWords=true
    }

    search(word){
        let currentNode=this.root
        
        for(let char of word)
        {
            if(!currentNode.children[char]){
                return false
            }
            currentNode=currentNode.children[char]
        }

        return currentNode.isEndOfWords
    }

    startsWith(prefix){
        let currentNode=this.root
        for(let char of prefix){
            if(!currentNode.children[char]){
                return false
            }
            currentNode=currentNode.children[char]
        }
        return true
    }

    printWords(){
        let words=[]
        this._dfs(this.root,"",words)
        console.log(words)
    }

    _dfs(node,currentWord,words){
        if(node.isEndOfWords){
            words.push(currentWord)
        }

        for(let char in node.children){
            this._dfs(node.children[char],currentWord+char,words)
        }
    }

    autoComplete(prefix){
        let currentNode=this.root

        for(let char of prefix){
            if(!currentNode.children[char]){
                return []
            }
            currentNode=currentNode.children[char]
        }

        let suggestion=[]
        this.collectSuggestion(currentNode,prefix,suggestion)
        return suggestion
    }

    collectSuggestion(node,prefix,suggestion){
        if(node.isEndOfWords){
            suggestion.push(prefix)
        }

        for(let char in node.children){
            this.collectSuggestion(node.children[char],prefix+char,suggestion)
        }
    }
}


const t = new trie();

// Inserting words
t.insert("apple");
t.insert("app");
t.insert("banana");
t.insert("bat");
t.insert("batman");

// Searching for words
console.log(t.search("apple"));  // true
console.log(t.search("app"));    // true
console.log(t.search("banana"));// true
console.log(t.search("bat"));   // true
console.log(t.search("batman")); // true
console.log(t.search("bats"));  // false

// Checking for prefix
console.log(t.startsWith("app"));  // true
console.log(t.startsWith("ban"));  // true
console.log(t.startsWith("bat"));  // true
console.log(t.startsWith("cat"));  // false

// Printing all words
t.printWords();  // ["apple", "app", "banana", "bat", "batman"]

// Auto-complete suggestions
console.log(t.autoComplete("ba")); // ["banana", "bat", "batman"]
console.log(t.autoComplete("app")); // ["apple", "app"]
