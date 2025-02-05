// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWords=false
//     }
// }

// class Trie{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){

//         let currentNode=this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char]=new Node()
//             }
//             currentNode=currentNode.children[char]
//         }

//         currentNode.isEndOfWords=true
//     }
// }

// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWord=false
//     }
// }

// class trie{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){
//         let currentNode=this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char]=new Node()
//             }
//             currentNode=currentNode.children[char]
//         }
//         currentNode.isEndOfWord=true
//     }

//     search(word){
//         let currentNode=this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode=currentNode.children[char]
//         }
//         return currentNode.isEndOfWord
//     }
// }

// const t=new trie()
// t.insert("basha")
// t.insert("ahamathbasha")
// t.insert("thalapathi")

// console.log(t.search("vishu"))
// console.log(t.search("thalapathi"))


// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWords=false
//     }
// }

// class trie{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){
//         let currentNode=this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char]=new Node()
//             }
//             currentNode=currentNode.children[char]
//         }
//         currentNode.isEndOfWords=true00000 
//     }

//     search(word){
//         let currentNode=this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode=currentNode.children[char]
//         }
//         return currentNode.isEndOfWords
//     }

//     startsWith(prefix){
//         let currentNode=this.root
//         for(let char of prefix){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode=currentNode.children[char]
//         }
//         return true
//     }
// }

// const t = new trie();

// // Inserting words
// t.insert("apple");
// t.insert("app");
// t.insert("banana");

// // Searching for words
// console.log(t.search("apple"));  // true
// console.log(t.search("app"));    // true
// console.log(t.search("banana"));// true
// console.log(t.search("bat"));   // false

// // Checking for prefix
// console.log(t.startsWith("app"));  // true
// console.log(t.startsWith("ban"));  // true
// console.log(t.startsWith("bat"));  // false

// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWord=false
//     }
// }

// class trie{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){
//         let currentNode=this.root
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char]=new Node()
//             }
//             currentNode=currentNode.children[char]
//         }
//         currentNode.isEndOfWord=true
//     }

//     search(word){
//         let currentNode=this.root

//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode=currentNode.children[char]
//         }
//         return true
//     }

//     startsWith(prefix){
//         let currentNode=this.root

//         for(let char of prefix){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode=currentNode.children[char]
//         }
//         return true
//     }

//     printWords(){
//         let words=[]
//         this.dfs(this.root,"",words)
//         console.log(words)
//     }

//     dfs(node,currentWord,words){
//         if(node.isEndOfWord){
//             words.push(currentWord)
//         }

//         for(let char in node.children){
//             this.dfs(node.children[char],currentWord+char,words)
//         }
//     }
// }
// const t = new trie();

// // Inserting words
// t.insert("apple");
// t.insert("app");
// t.insert("banana");

// // Searching for words
// console.log(t.search("apple"));  // true
// console.log(t.search("app"));    // true
// console.log(t.search("banana"));// true
// console.log(t.search("bat"));   // false

// // Checking for prefix
// console.log(t.startsWith("app"));  // true
// console.log(t.startsWith("ban"));  // true
// console.log(t.startsWith("bat"));  // false

// t.printWords()


// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWord=false
//     }
// }

// class trie{
//     constructor(){
//         this.root=new Node()
//     }

//     insert(word){
//         let currentNode=this.root
        
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 currentNode.children[char]=new Node()
//             }
//             currentNode=currentNode.children[char]
//         }

//         currentNode.isEndOfWord=true
//     }

//     search(word){
//         let currentNode=this.root
        
//         for(let char of word){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode=currentNode.children[char]
//         }
//         return true
//     }

//     startsWith(prefix){
//         let currentNode=this.root

//         for(let char of prefix){
//             if(!currentNode.children[char]){
//                 return false
//             }
//             currentNode=currentNode.children[char]
//         }
//         return true
//     }

//     print(){
//         let words=[]
//         this.dfs(this.root,"",words)
//         console.log(words)
//     }

//     dfs(node,currentWord,words){
//         if(node.isEndOfWord){
//             words.push(currentWord)
//         }

//         for(let char in node.children){
//             this.dfs(node.children[char],currentWord+char,words)
//         }
//     }
// }


// const t = new trie();

// // Inserting words
// t.insert("apple");
// t.insert("app");
// t.insert("banana");

// // Searching for words
// console.log(t.search("apple"));  // true
// console.log(t.search("app"));    // true
// console.log(t.search("banana"));// true
// console.log(t.search("bat"));   // false

// // Checking for prefix
// console.log(t.startsWith("app"));  // true
// console.log(t.startsWith("ban"));  // true
// console.log(t.startsWith("bat"));  // false

// t.print()

class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
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
            currentNode=currentNode.children[char]
        }
        currentNode.isEndOfWord=true
    }

    search(word){
        let currentNode=this.root
        for(let char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode=currentNode.children[char]
        }
        return true
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

    print(){
        let word=[]
        this.dfs(this.root,"",word)
        console.log(word)
    }

    dfs(node,currentWord,word){
        if(node.isEndOfWord){
            word.push(currentWord)
        }

        for(let char in node.children){
            this.dfs(node.children[char],currentWord+char,word)
        }
    }

    autoComplete(prefix){
        let current=this.root
        for(let char of prefix){
            if(!current.children[char]){
                return []
            }
            current=current.children[char]
        }
        let suggestions=[]
        this.collectSuggestion(current,prefix,suggestions)
        return suggestions
    }

    collectSuggestion(node,prefix,suggestions){
        if(node.isEndOfWord){
            suggestions.push(prefix)
        }

        for(let char in node.children){
            this.collectSuggestion(node.children[char],prefix+char,suggestions)
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
t.print();  // ["apple", "app", "banana", "bat", "batman"]

// Auto-complete suggestions
console.log(t.autoComplete("ba")); // ["banana", "bat", "batman"]
console.log(t.autoComplete("app")); // ["apple", "app"]