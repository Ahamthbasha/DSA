class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Binarysearchtree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right == null){ 
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else if(root.value == value){
            return true
        }else if(value < root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    breadthFirstSearch(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root == null){
            return root
        }
        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.right && !root.left){
                return null
            }
            if(!root.right){
                return root.left
            }else if(!root.left){
                return root.right
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }
}

const bst=new Binarysearchtree()
console.log("it is empty?",bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,20))

// bst.preOrder(bst.root)
// bst.inorder(bst.root)
//bst.postOrder(bst.root)

// bst.breadthFirstSearch()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

bst.breadthFirstSearch()
// bst.delete(3)
// bst.breadthFirstSearch()
// bst.delete(15)
// bst.breadthFirstSearch()
bst.delete(10)
bst.breadthFirstSearch()