class buildSuffixTrie{
    constructor(){
        this.children={}
        this.isEndOfSuffix=false
    }
}

class suffix{
    constructor(word){
        this.root=new buildSuffixTrie()
        this.buildSuffixTrie(word)
    }

    buildSuffixTrie(word){
        for(let i=0;i<word.length;i++){
            this.insert(word.slice(i))
        }
    }

    insert(word){
        let node=this.root

        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new buildSuffixTrie()
            }
            node=node.children[char]
        }
        node.isEndOfSuffix=true
    }

    search(word){
        let node=this.root

        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
}

const suffixTrie = new suffix("banana");

console.log(suffixTrie.search("ana"));  // true  (because "ana" is a suffix of "banana")
console.log(suffixTrie.search("ban"));  // true  (because "ban" is a suffix of "banana")
console.log(suffixTrie.search("apple")); // false (because "apple" is not a suffix of "banana")

