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
//         let word=[]
//         this.dfs(this.root,"",word)
//         console.log(word)
//     }

//     dfs(node,currentWord,word){
//         if(node.isEndOfWord){
//             word.push(currentWord)
//         }

//         for(let char in node.children){
//             this.dfs(node.children[char],currentWord+char,word)
//         }
//     }

//     autoComplete(prefix){
//         let current=this.root
//         for(let char of prefix){
//             if(!current.children[char]){
//                 return []
//             }
//             current=current.children[char]
//         }
//         let suggestions=[]
//         this.collectSuggestion(current,prefix,suggestions)
//         return suggestions
//     }

//     collectSuggestion(node,prefix,suggestions){
//         if(node.isEndOfWord){
//             suggestions.push(prefix)
//         }

//         for(let char in node.children){
//             this.collectSuggestion(node.children[char],prefix+char,suggestions)
//         }
//     }
// }

// const t = new trie();

// // Inserting words
// t.insert("apple");
// t.insert("app");
// t.insert("banana");
// t.insert("bat");
// t.insert("batman");

// // Searching for words
// console.log(t.search("apple"));  // true
// console.log(t.search("app"));    // true
// console.log(t.search("banana"));// true
// console.log(t.search("bat"));   // true
// console.log(t.search("batman")); // true
// console.log(t.search("bats"));  // false

// // Checking for prefix
// console.log(t.startsWith("app"));  // true
// console.log(t.startsWith("ban"));  // true
// console.log(t.startsWith("bat"));  // true
// console.log(t.startsWith("cat"));  // false

// // Printing all words
// t.print();  // ["apple", "app", "banana", "bat", "batman"]

// // Auto-complete suggestions
// console.log(t.autoComplete("ba")); // ["banana", "bat", "batman"]
// console.log(t.autoComplete("app")); // ["apple", "app"]


// class trieNode{
//     constructor(){
//         this.children={}
//         this.isEndOfWord=false
//     }
// }

// class trie{
//     constructor(){
//         this.root=new trieNode()
//     }

//     insert(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new trieNode()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfWord=true
//     }

//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEndOfWord
//     }

//     startsWith(prefix){
//         let node=this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//         }
//         return true
//     }

//     autoComplete(word){
//         let node=this.root

//         for(let char of word){
//             if(!node.children[char]){
//                 return
//             }

//            node= node.children[char]
//         }

//         let list=[]
//         this.collectWord(node,word,list)
//         return list
//     }

//     collectWord(node,word,list){
//         if(node.isEndOfWord){
//             list.push(word)
//         }

//         for(let char in node.children){
//             this.collectWord(node.children[char],word+char,list)
//         }
//     }

//     print(){
//         let list=[]
//         this.collectWord(this.root,"",list)
//         console.log(list)
//     }

//     delete(word){
//         let node=this.root
//         for(let i=0;i<word.length;i++){
//             let char=word[i]

//             if(!node.children[char]){
//                 return
//             }
//             node=node.children[char]
//         }

//         if(node.isEndOfWord){
//             node.isEndOfWord=false
//         }

//         for(let i=word.length-1;i>=0;i--){
//             let char=word[i]
//             let parentNode=this.parentNode(word,i)

//             if(Object.keys(node.children).length == 0 && !node.isEndOfWord){
//                 delete parentNode.children[char]
//             }
//             node=parentNode.children[char]
//         }
//     }

//     parentNode(word,index){
//         let node=this.root
//         for(let i=0;i<index;i++){
//             node=node.children[word[i]]
//         }
//         return node
//     }
// }


// const t=new trie()

// t.insert("apple")
// t.insert("app")
// t.insert("banana")
// t.insert("bat")
// t.insert("batman")

// console.log(t.search("apple"));  // true
// console.log(t.search("app"));    // true
// console.log(t.search("batman"));// true
// console.log(t.search("ban")); 

// console.log(t.startsWith("ba")); // true

// console.log(t.autoComplete("ba")); // ["banana", "bat", "batman"]

// t.print();  

// t.delete("app");

// console.log("After Deletion:");
// t.print();  // ["apple", "banana", "bat", "batman"]


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
//         let node=this.root

//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfWord=true
//     }

//     countWords(){
//         let count=0
//         let node=this.root
//         let queue=[node]

//         while(queue.length){
//             let currentNode=queue.shift()

//             if(currentNode.isEndOfWord){
//                 count++
//             }

//             for(let child in currentNode.children){
//                 queue.push(currentNode.children[child])
//             }
//         }

//         return count
//     }

//     longestPrefix(word){
//         let node=this.root
//         let longestPrefix=""

//         for(let char of word){
//             if(!node.children[char]){
//                 break
//             }

           
//             node=node.children[char]
//             longestPrefix+=char

//             if(!node.isEndOfWord){
//                 longestPrefix=longestPrefix.slice(0,-1)
//             }
//         }
//         return longestPrefix
//     }

//     countPrefixes(word){
//         let node=this.root
//         let count=0

//         for(let char of word){
//             if(!node.children[char]){
//                 break
//             }
//             node=node.children[char]
//             count++
//         }
//         return count
//     }

    
// }

// const t=new trie()

// t.insert("cat")
// t.insert("car");
// t.insert("bat")
// t.insert("burger")
// t.insert("batter")
// console.log(t.countWords())
// console.log(t.longestPrefix("cater"))
// console.log(t.countPrefixes("ba"))


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
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfWord=true
//     }

//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return node.isEndOfWord
//     }

//     startsWith(prefix){
//         let node=this.root

//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }

//             node=node.children[char]
//         }
//         return true
//     }

//     autoComplete(word){

//         let node=this.root

//         for(let char of word){
//             if(!node.children[char]){
//                 return "like that word is not there"
//             }
//             node=node.children[char]
//         }

//         let list=[]
//         this.collectword(node,word,list)
//         return list
//     }

//     collectword(node,word,list){
//         if(node.isEndOfWord){
//             list.push(word)
//         }

//         for(let char in node.children){
//             this.collectword(node.children[char],word+char,list)
//         }
//     }

//     print(){
//         let list=[]
//         this.collectword(this.root,"",list)
//         console.log(list)
//     }

//     delete(word){
//         let node=this.root

//         for(let char of word){
//             if(!node.children[char]){
//                 return "like that word is not there"
//             }
//             node=node.children[char]
//         }

//         if(node.isEndOfWord){
//             node.isEndOfWord=false
//         }

//         for(let i=word.length-1;i>=0;i--){

//             let char=word[i]
//             let parentNode=this.parentNode(word,i)

//             if(Object.keys(parentNode.children).length == 0 && !node.isEndOfWord){
//                 delete parentNode.children[char]
//             }
//             node=parentNode.children[char]
//         }
//     }

//     parentNode(word,index){
//         let node=this.root
//         for(let i=0;i<index;i++){
//             node=node.children[word[i]]
//         }
//         return node
//     }
// }

// const t = new trie();

// // Test Case 1: Insert and Search
// t.insert("apple");
// t.insert("app");
// t.insert("applause");

// console.log(t.search("apple"));   // Expected output: true
// console.log(t.search("app"));     // Expected output: true
// console.log(t.search("appl"))    // Expected output: false
// console.log(t.search("applause")); // Expected output: true
// console.log(t.search("bat"));     // Expected output: false

// // Test Case 2: StartsWith
// console.log(t.startsWith("app"));  // Expected output: true (app, apple, applause)
// console.log(t.startsWith("bat"));  // Expected output: false (no words starting with "bat")
// console.log(t.startsWith("appl")); // Expected output: true (apple, applause)

// // Test Case 3: AutoComplete
// console.log(t.autoComplete("ap"));  // Expected output: [ "apple", "app", "applause" ]
// console.log(t.autoComplete("bat")); // Expected output: "like that word is not there" (no matches)
// console.log(t.autoComplete("app")); // Expected output: [ "apple", "app", "applause" ]
// console.log(t.autoComplete("a"));   // Expected output: [ "apple", "app", "applause" ]

// // Test Case 4: Print All Words in Trie
// t.print();  // Expected output: [ "apple", "app", "applause" ]

// t.delete("app");

// console.log("After Deletion:");
// t.print(); 


//suffix trie

// class Node{
//     constructor(){
//         this.children={}
//         this.isEndOfWord=false
//     }
// }

// class suffix{
//     constructor(word){
//         this.root=new Node()
//         this.buildSuffix(word)
//     }

//     buildSuffix(word){
//         for(let i=0;i<word.length;i++){
//             this.insert(word.slice(i))
//         }
//     }

//     insert(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node()
//             }
//             node=node.children[char]
//         }
//     }

//     search(word){
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node=node.children[char]
//         }
//         return true
//     }
// }

// const suffixTrie = new suffix("banana");

// console.log(suffixTrie.search("ana"));  // true  (because "ana" is a suffix of "banana")
// console.log(suffixTrie.search("ban"));  // true  (because "ban" is a suffix of "banana")
// console.log(suffixTrie.search("apple"));


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
//         let node=this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new Node()
//             }
//             node=node.children[char]
//         }
//         node.isEndOfWord=true
//     }
//     //countword,longestPrefix,countPrefix

//     countWords(){
//         let node=this.root
//         let count=0
//         let queue=[node]

//         while(queue.length){
//             let currentNode=queue.shift()

//             if(currentNode.isEndOfWord){
//                 count++
//             }

//             for(let child in currentNode.children){
//                 queue.push(currentNode.children[child])
//             }
//         }
//         return count
//     }

//     longestPrefix(word){
//         let node=this.root
//         let longestPrefix=""

//         for(let char of word){
//             if(!node.children[char]){
//                 break
//             }
//             node=node.children[char]
//             longestPrefix+=char

//             if(node.isEndOfWord){
//                 longestPrefix=longestPrefix.slice(0,-1)
//             }
//         }
//         return longestPrefix
//     }

//     countPrefix(word){
//         let node=this.root

//         let count=0

//         for(let char of word){
//             if(!node.children[char]){
//                 break
//             }
//             node=node.children[char]
//             count++
//         }
//         return count
//     }
// }

// const t = new trie();

// // Insert words
// t.insert("cat");
// t.insert("car");
// t.insert("bat");
// t.insert("burger");
// t.insert("batter");

// console.log(t.countWords());  
// console.log(t.longestPrefix("bachelor")); 
// console.log(t.countPrefix("ba"));