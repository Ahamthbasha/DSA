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

    delete(word){
        let node=this.root

        for(let i=0;i<word.length;i++){
            let char=word[i]
                if(!node.children[char]){
                    return
                }
                node=node.children[char]
        }

        if(node.isEndOfWord){
            node.isEndOfWord=false
        }

        for(let i=word.length-1;i>=0;i--){
            let char=word[i]
            let parentNode=this.getParentNode(word,i)

            if(Object.keys(node.children).length==0 && !node.isEndOfWord){
                delete parentNode.children[char]
            }
            node=parentNode.children[char]
        }
    }

    getParentNode(word,index){
        let node=this.root
        for(let i=0;i<index;i++){
            node=node.children[word[i]]
        }
        return node
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