// class Node{
//     constructor(value) {
//         this.value=value
//         this.right=null
//         this.left=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertValue(this.root,node)
//         }
//     }

//     insertValue(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertValue(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertValue(root.right,node)
//             }
//         }
//     }
// }

// const bst=new Binarysearchtree()
// bst.insert(10)
// bst.insert(20)
// bst.insert(30)
// bst.insert(40)



// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }
// }

// const bst=new Binarysearchtree()

// bst.insert(10)
// bst.insert(20)
// bst.insert(30)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,20))
// console.log(bst.search(bst.root,30))
// console.log(bst.search(bst.root,4))


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root==null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//           return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//            return this.search(root.left,value)
//         }
//         else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right) 
//         }
//     }
// }

// const bst=new Binarysearchtree()
// console.log("it is empty?",bst.isEmpty())
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,20))

// bst.preOrder(bst.root)


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }
//         else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     breadthFirstSearch(){
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
// }

// const bst=new Binarysearchtree()
// console.log("it is empty?",bst.isEmpty())
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10)) 
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,20))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)

// bst.postOrder(bst.root)

// bst.breadthFirstSearch()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }
//         else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if (root.value < value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     DFS(){
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let cur=queue.shift()
//             console.log(cur.value)
//             if(cur.left){
//                 queue.push(cur.left)
//             }
//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }
// }
// const bst=new Binarysearchtree()
// console.log("it is empty?",bst.isEmpty())
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10)) 
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,20))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)

// bst.postOrder(bst.root)
// bst.DFS()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }
//         else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     DFS(){
//         const queue=[]
//         queue.push(this.root)

//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value)

//             if(curr.left){
//                 queue.push(curr.left)
//             }

//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root == null){
//             return null
//         }

//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }

//         else{
//             //leaf node
//             if(!root.left && !root.right){
//                 return null
//             }

//             //one child
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left
//             }

//             //root node

//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst=new Binarysearchtree()

// console.log("it is empty?",bst.isEmpty())
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10)) 
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,20))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)

// bst.postOrder(bst.root)
// bst.DFS()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

// bst.DFS()
// bst.delete(3)
// bst.DFS()
// bst.delete(15)
// bst.DFS()
// bst.delete(10)
// bst.DFS()


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     DFS(){
//         const queue=[]

//         queue.push(this.root)

//         while(queue.length){
//             let curr=queue.shift()
//             console.log(curr.value)
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root == null){
//             return 
//         }

//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }
//         else{
//             //leaf node
//             if(!root.left && !root.right){
//                 return null
//             }

//             //one child
//             if(!root.left){
//                 return root.right
//             }
//             else if(!root.right){
//                 return root.left
//             }

//             //root
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst=new Binarysearchtree()

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,90))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)\
//bst.DFS()

// bst.delete(3)
// bst.DFS()
// bst.delete(15)
// bst.DFS()
// bst.delete(10)
// bst.DFS()


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insertValue(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     // BFS(){
//     //     const queue=[]
//     //     queue.push(this.root)
//     //     while(queue.length){
//     //         let cur=queue.shift()
//     //         console.log(cur.value)
//     //         if(cur.left){
//     //             queue.push(cur.left)
//     //         }else{
//     //             queue.push(cur.right)
//     //         }
//     //     }
//     // }

//     BFS() {
//         const queue = []
//         queue.push(this.root)
//         while (queue.length) {
//             let cur = queue.shift()
    
//             // Check if cur is null before trying to access its value
//             if (cur) {
//                 console.log(cur.value)
                
//                 if (cur.left) {
//                     queue.push(cur.left)
//                 }
    
//                 if (cur.right) {
//                     queue.push(cur.right)
//                 }
//             }
//         }
//     }
    

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//       this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root == null){
//             return null
//         }

//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }
        
//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }

//         else{
//             //leaf node
//             if(!root.left && !root.right){
//                 return null
//             }

//             //onde child

//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left
//             }

//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst=new Binarysearchtree()
// bst.insertValue(10)
// bst.insertValue(20)
// bst.insertValue(30)
// bst.insertValue(40)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,60))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)

//bst.BFS()

// console.log(bst.max(bst.root))
// console.log(bst.min(bst.root))


// bst.delete(10)
// bst.BFS()

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insertValue(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//         this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left==null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right == null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     BFS(){
//        let queue=[]
//        queue.push(this.root)
       
//        while(queue.length){
//         let cur=queue.shift()
//         console.log(cur.value)
//         if(cur.left){
//             queue.push(cur.left)
//         }
//         if(cur.right){
//             queue.push(cur.right)
//         }
//        }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root == null){
//             return null
//         }

//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }

//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }
//         else{
//             //leaf node
//             if(!root.left && !root.right){
//                 return null
//             }

//             if(!root.left){
//                 return root.right
//             }
//             else if(!root.right){
//                 return root.left
//             }

//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst=new Binarysearchtree()
// bst.insertValue(10)
// bst.insertValue(20)
// bst.insertValue(30)
// bst.insertValue(40)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,60))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)

// bst.BFS()

// console.log(bst.max(bst.root))
// console.log(bst.min(bst.root))


// bst.delete(10)
// bst.BFS()


class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class bst{
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
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        else if( root.value== value){
            return true
        }
        else if(value < root.value){
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

    inOrderPrint(root){
        if(root){
            this.inOrderPrint(root.left)
            console.log(root.value)
            this.inOrderPrint(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        if(this.isEmpty()){
            console.log("it is empty")
            return
        }else{
            let queue=[]
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
    }

    min(root){
        if(!root){
            return "empty"
        }
        while(root.left){
            root=root.left
        }
        return root.value
    }

    max(root){
        if(!root){
            return "empty"
        }
        while(root.right){
            root=root.right
        }
        return root.value
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(!root){
            return null
        }

        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            
            if(!root.left){
                return root.right
            }

            if(!root.right){
                return root.left
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    isPrime(num){
        if(num <= 1){
            return false
        }
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i == 0){
                return false
            }
        }
        return true
    }

    findPrime(root,result=[]){
        if(root){
            this.findPrime(root.left,result)
            if(this.isPrime(root.value)){
                result.push(root.value)
            }
            this.findPrime(root.right,result)
        }
        return result
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1 || !tree2){
            return false
        }

        return (tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left)&& this.isIdentical(tree1.right,tree2.right))
    }

    isBSt(root,min=null,max=null){
        if(!root){
            return true
        }

        if(min!==null && root.value <= min || max!==null && root.value >= max ){
            return false
        }

        return this.isBSt(root.left,min,root.value) && this.isBSt(root.right,root.value,max)
    }

    //we can do this in linear approach level order
    //time complexity and space complexity is O(logn)

    findHeight(root){
        if(!root){
            return 0
        }

        let queue=[]
        let height=0
        queue.push(root)
        while(queue.length > 0){
            let nodeCount=queue.length
            height++

            while(nodeCount > 0){
                let node=queue.shift()
                if(node.left){
                    queue.push(node.left)
                }

                if(node.right){
                    queue.push(node.right)
                }

                nodeCount--
            }
        }
        return height
    }

    findKthSmallest(root,k){
        let result=this.inOrderTraversal(root)
        return result[k-1].value || null
    }

    findkthLargest(root,k){
        let result=this.inOrderTraversal(root)
        return result[result.length-k].value||null
    }

    
    inOrderTraversal(root,result=[]){
        if(root){
            this.inOrderTraversal(root.left,result)
            result.push(root)
            this.inOrderTraversal(root.right,result)
        }
        return result
    }

    findSuccessor(root,target){
        let node=this.inOrderTraversal(root)
        let successor=null
        for(let i=0;i<node.length;i++){
            if(node[i].value === target){
                if(i+1 <node.length){
                    successor=node[i+1]
                }
                break
            }
        }
        return successor.value
    }

    findPredecessor(root,target){
        let node=this.inOrderTraversal(root)
        let predecessor=null
        for(let i=0;i<node.length;i++){
            if(node[i].value==target){
                if(i-1 >= 0){
                    predecessor=node[i-1]
                }
                break
            }
        }
        return predecessor.value
    }

    findClosest(root,value){
        let node=this.inOrderTraversal(root)
        let closest
        for(let i=0;i<node.length;i++){
            if(node[i].value>=value){
                closest=node[i].value
                break
            }
        }
        return closest||closest[node.length-1]
    }

    removeDuplicates(root){
        let unique=new Set()

        const inOrder=(node)=>{
            if(!node){
                return
            }
            inOrder(node.left)
            unique.add(node.value)
            inOrder(node.right)
        }

        inOrder(root)
        this.root=null
        unique.forEach(value=>this.insert(value))
    }
}
 
const tree = new bst();
const tree1=new bst()
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(5);
tree.insert(7);
tree.insert(10);
tree.insert(15)
//console.log(tree.search(tree.root,60))
//tree.preOrder(tree.root);
//tree.inOrder(tree.root);
//tree.postOrder(tree.root);
//tree.levelOrder(); // Fixed the function call
// console.log(tree.min(tree.root))
// console.log(tree.max(tree.root))
// tree.delete(10);
//tree.levelOrder(); 

//console.log(tree.findPrime(tree.root))
//console.log(tree.isIdentical(tree.root,tree1.root))
// console.log(tree.findHeight(tree.root))

// console.log(tree.findkthLargest(tree.root,2))

// console.log(tree.findkthSmallest(tree.root,2))

//console.log(tree.findSuccessor(tree.root,2))

// console.log(tree.findSuccessor(tree.root,10))
// console.log(tree.findPredecessor(tree.root,10))
// console.log(tree.findClosest(tree.root,8))

// console.log(tree.findkthLargest(tree.root,2))
// console.log(tree.findKthSmallest(tree.root,3))


console.log("In-order before removing duplicates")
 tree.inOrderPrint(tree.root)

tree.removeDuplicates(tree.root)
console.log("In-order after removing duplicates")
tree.inOrderPrint(tree.root)