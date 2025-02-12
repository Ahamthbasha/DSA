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


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class bst{
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
//             if(root.right==null){
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
//         else if( root.value== value){
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

//     inOrderPrint(root){
//         if(root){
//             this.inOrderPrint(root.left)
//             console.log(root.value)
//             this.inOrderPrint(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     levelOrder(){
//         if(this.isEmpty()){
//             console.log("it is empty")
//             return
//         }else{
//             let queue=[]
//             queue.push(this.root)
//             while(queue.length){
//                 let curr=queue.shift()
//                 console.log(curr.value)
//                 if(curr.left){
//                     queue.push(curr.left)
//                 }
//                 if(curr.right){
//                     queue.push(curr.right)
//                 }
//             }
//         }
//     }

//     min(root){
//         if(!root){
//             return "empty"
//         }
//         while(root.left){
//             root=root.left
//         }
//         return root.value
//     }

//     max(root){
//         if(!root){
//             return "empty"
//         }
//         while(root.right){
//             root=root.right
//         }
//         return root.value
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return null
//         }

//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }
//         else{
//             if(!root.left && !root.right){
//                 return null
//             }
            
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

//     isPrime(num){
//         if(num <= 1){
//             return false
//         }
//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num%i == 0){
//                 return false
//             }
//         }
//         return true
//     }

//     findPrime(root,result=[]){
//         if(root){
//             this.findPrime(root.left,result)
//             if(this.isPrime(root.value)){
//                 result.push(root.value)
//             }
//             this.findPrime(root.right,result)
//         }
//         return result
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if(!tree1 || !tree2){
//             return false
//         }

//         return (tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left)&& this.isIdentical(tree1.right,tree2.right))
//     }

//     isBSt(root,min=null,max=null){
//         if(!root){
//             return true
//         }

//         if(min!==null && root.value <= min || max!==null && root.value >= max ){
//             return false
//         }

//         return this.isBSt(root.left,min,root.value) && this.isBSt(root.right,root.value,max)
//     }

//     //we can do this in linear approach level order
//     //time complexity and space complexity is O(logn)

//     findHeight(root){
//         if(!root){
//             return 0
//         }

//         let queue=[]
//         let height=0
//         queue.push(root)
//         while(queue.length > 0){
//             let nodeCount=queue.length
//             height++

//             while(nodeCount > 0){
//                 let node=queue.shift()
//                 if(node.left){
//                     queue.push(node.left)
//                 }

//                 if(node.right){
//                     queue.push(node.right)
//                 }

//                 nodeCount--
//             }
//         }
//         return height
//     }

//     findKthSmallest(root,k){
//         let result=this.inOrderTraversal(root)
//         return result[k-1].value || null
//     }

//     findkthLargest(root,k){
//         let result=this.inOrderTraversal(root)
//         return result[result.length-k].value||null
//     }

    
//     inOrderTraversal(root,result=[]){
//         if(root){
//             this.inOrderTraversal(root.left,result)
//             result.push(root)
//             this.inOrderTraversal(root.right,result)
//         }
//         return result
//     }

//     findSuccessor(root,target){
//         let node=this.inOrderTraversal(root)
//         let successor=null
//         for(let i=0;i<node.length;i++){
//             if(node[i].value === target){
//                 if(i+1 <node.length){
//                     successor=node[i+1]
//                 }
//                 break
//             }
//         }
//         return successor.value
//     }

//     findPredecessor(root,target){
//         let node=this.inOrderTraversal(root)
//         let predecessor=null
//         for(let i=0;i<node.length;i++){
//             if(node[i].value==target){
//                 if(i-1 >= 0){
//                     predecessor=node[i-1]
//                 }
//                 break
//             }
//         }
//         return predecessor.value
//     }

//     findClosest(root,value){
//         let node=this.inOrderTraversal(root)
//         let closest
//         for(let i=0;i<node.length;i++){
//             if(node[i].value>=value){
//                 closest=node[i].value
//                 break
//             }
//         }
//         return closest||closest[node.length-1]
//     }

//     removeDuplicates(root){
//         let unique=new Set()

//         const inOrder=(node)=>{
//             if(!node){
//                 return
//             }
//             inOrder(node.left)
//             unique.add(node.value)
//             inOrder(node.right)
//         }

//         inOrder(root)
//         this.root=null
//         unique.forEach(value=>this.insert(value))
//     }
// }
 
// const tree = new bst();
// const tree1=new bst()
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(5);
// tree.insert(7);
// tree.insert(10);
// tree.insert(15)
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


// console.log("In-order before removing duplicates")
//  tree.inOrderPrint(tree.root)

// tree.removeDuplicates(tree.root)
// console.log("In-order after removing duplicates")
// tree.inOrderPrint(tree.root)


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Bst{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root === null
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
//             if(root.left === null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right===null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     findParent(root,target){
//         if(!root || root.value==target){
//             return null
//         }

//         let parent=null

//         function inOrder(node){
//             if(node){
//             inOrder(node.left)
//             if(node.left && node.left.value===target){
//                 parent=node
//                 return
//             }
//             if(node.right && node.right.value===target){
//                 parent=node
//                 return
//             }
//             inOrder(node.right)
//             }
//         }
//         inOrder(root)
//         return parent
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value==target){
//             const children={
//                 leftChild:root.left?root.left.value:null,
//                 rightChild:root.right?root.right.value:null
//             }
//             return children
//         }
//         else if(target < root.value){
//             return this.findChildren(root.left,target)
//         }
//         else{
//             return this.findChildren(root.right,target)
//         }
//     }

//     findSiblings(root,target){
//         if(!root){
//             return null
//         }

//         let parent=this.findParent(root,target)

//         if(!parent){
//             return null
//         }

//         if(parent.left && parent.left.value==target){
//             return parent.right
//         }

//         if(parent.right && parent.right.value == target){
//             return parent.left
//         }

//         return null
//     }

//     findLeafNode(root,result=[]){
//         if(!root){
//             return null
//         }

//         if(!root.left && !root.right){
//             result.push(root.value)
//         }

//         this.findLeafNode(root.left,result)
//         this.findLeafNode(root.right,result)
//         return result
//     }

//     LCA(root,n1,n2){
//         if(!root){
//             return null
//         }

//         while(root){
//             if(root.value < n1 && root.value < n2){
//                 root=root.right            
//             }
//             else if(root.value > n1 && root.value > n2){
//                 root=root.left
//             }
//             return root
//         }
//         return null
//     }

//     findPath(root,target){
//         let path=[]
//         while(root){
//             path.push(root.value)
//             if(target < root.value){
//                 root=root.left
//             }
//             else if(target > root.value){
//                 root=root.right
//             }
//             else{
//                 break
//             }
//         }
//         return path
//     }

//     findPathbetweenTwoNodes(n1,n2){
//         let LCA=this.LCA(this.root,n1,n2)

//         if(!LCA){
//             return null
//         }

//         let path1=this.findPath(LCA,n1)
//         let path2=this.findPath(LCA,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistance(root,target){
//         let distance=0
//         while(root){
//             if(target < root.value){
//                 root=root.left
//                 distance++
//             }
//             else if(target > root.value){
//                 root=root.right
//                 distance++
//             }
//             else{
//                 return distance
//             }
//         }
//         return -1
//     }

//     findDistanceBetweenNodes(n1,n2){
//         let LCA=this.LCA(this.root,n1,n2)
//         if(!LCA){
//             return null
//         }

//         let distance1=this.findDistance(LCA,n1)
//         let distance2=this.findDistance(LCA,n2)
//         return distance1+distance2
//     }
// }

// let bst = new Bst();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
// bst.insert(12);
// bst.insert(18);

// console.log("Path between 7 to 18:", bst.findPathbetweenTwoNodes(7, 18))
// console.log("Distance between 5 and 15:", bst.findDistanceBetweenNodes(5, 15));

// console.log(bst.findParent(bst.root,7))
// console.log(bst.findParent(bst.root,15))
// console.log(bst.findParent(bst.root,10))

// console.log(bst.findChildren(bst.root, 7));  
// console.log(bst.findChildren(bst.root, 5));
// console.log(bst.findChildren(bst.root, 15));

// console.log(bst.findSiblings(bst.root, 7));
// console.log(bst.findSiblings(bst.root, 12));
// console.log(bst.findSiblings(bst.root, 10));

// console.log(bst.findLeafNode(bst.root));

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Bst{
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
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return "false"
//         }
//         else if(root.value==value){
//             return "true"
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

//     levelOrder(){
//         let queue=[]
//         queue.push(this.root)

//         while(queue.length > 0){
//             let curr=queue.shift()
//             if(curr){
//                 console.log(curr.value)
//                 if(curr.left){
//                     queue.push(curr.left)
//                 }
    
//                 if(curr.right){
//                     queue.push(curr.right)
//                 }
//             }
//         }
//     }

//     min(root){
//         if(!root){
//             return null
//         }

//         while(root.left){
//             root=root.left
//         }

//         return root.value
//     }

//     max(root){
//         if(!root){
//             return null
//         }

//         while(root.right){
//             root=root.right
//         }

//         return root.value
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(!root){
//             return null
//         }

//         if(value < root.value){
//         root.left=this.deleteNode(root.left,value)
//         }

//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }

//         else{
//              //leaf node

//         if(!root.left && !root.right){
//             return null
//         }

//         //one child

//         if(!root.left){
//             return root.right
//         }

//         if(!root.right){
//             return root.left
//         }

//         //root

//         root.value=this.min(root.right)
//         root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }

//     isBst(root,min=null,max=null){
//         if(!root){
//             return true
//         }
//         if((min!==null && root.value < min) && (max!==null && root.value > max)){
//             return false
//         }

//         return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }
//        if(!tree1 || !tree2){
//             return false
//         }

//         return tree1.value == tree2.value && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
//     }

//     isPrime(num){
//         if(num<=1){
//             return false
//         }
//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num%i==0){
//                 return false
//             }
//         }
//         return true
//     }

//     findPrime(root,result=[]){
//         if(root){
//             this.findPrime(root.left,result)
//             if(this.isPrime(root.value)){
//                 result.push(root.value)
//             }
//             this.findPrime(root.right,result)
//         }
//         return result
//     }

//     findHeight(root){
//         let queue=[]
//         let height=0
//         queue.push(root)
//         while(queue.length > 0){
//             let nodeCount=queue.length
//             height++

//             while(nodeCount > 0){
//                 let node=queue.shift()

//                 if(node.left){
//                     queue.push(node.left)
//                 }

//                 if(node.right){
//                     queue.push(node.right)
//                 }

//                 nodeCount--
//             }
//         }
//         return height
//     }

//     inOrderTraversal(root,result=[]){
//         if(root){
//             this.inOrderTraversal(root.left,result)
//             result.push(root.value)
//             this.inOrderTraversal(root.right,result)
//         }
//         return result
//     }

//     findKthLargest(root,k){
//         let result=this.inOrderTraversal(root)
//         return result[result.length-k]||null
//     }

//     findKthSmallest(root,k){
//         let result=this.inOrderTraversal(root)
//         return result[k-1]||null
//     }

//     findClosest(root,k){
//         let result=this.inOrderTraversal(root)
//         let closest
//         for(let i=0;i<result.length;i++){
//             if(result[i] >= k){
//                 closest=result[i]
//                 break
//             }
//         }
//         return closest||null
//     }

//     findSuccessor(root,target){
//         let result=this.inOrderTraversal(root)
//         let successor=null
//         for(let i=0;i<result.length;i++){
//             if(result[i] == target){
//                 if(i+1 < result.length){
//                     successor=result[i+1]
//                 }
//                 break
//             }
//         }
//         return successor
//     }

//     findPredecessor(root,target){
//         let result=this.inOrderTraversal(root)
//         let predecessor=null
//         for(let i=0;i<result.length;i++){
//             if(result[i] == target){
//                 if(i-1 >=0){
//                     predecessor=result[i-1]
//                 }
//             }
//         }
//         return predecessor
//     }

//     removeDuplicates(root){
//         let unique=new Set()

//         const inOrder=(node)=>{
//             if(node){
//             inOrder(node.left)
//             unique.add(node.value)
//             inOrder(node.right)
//             }
//         }

//         inOrder(root)
//         this.root=null

//         unique.forEach(values=>this.insert(values))
//     }

//     findParent(root,target){
//         if(!root || root.value==target){
//             return "no root"
//         }

//         let parent=null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value == target){
//                     parent=root
//                     return
//                 }

//                 if(root.right && root.right.value == target){
//                     parent=root
//                     return
//                 }

//                 inOrder(root.right)
//             }
//         }
//         inOrder(root)
//         return parent
//     }
    
//     findChildren(root,target){
//         if(!root){
//             return "there is no children"
//         }
//         else if(root.value == target){
//             const children={
//                 leftChild:root.left?root.left.value:null,
//                 rightChild:root.right?root.right.value:null
//             }
//             return children
//         }
//         else if(target < root.value){
//             return this.findChildren(root.left,target)
//         }
//         else{
//             return this.findChildren(root.right,target)
//         }
//     }

//     findSiblings(root,target){
//         if(!root){
//             return null
//         }

//         let parent=this.findParent(root,target)

//         if(!parent){
//             return null
//         }

//         if(parent.left && parent.left.value == target){
//             return parent.right.value
//         }

//         if(parent.right && parent.right.value==target){
//             return parent.left.value
//         }
//     }

//     findLeafNode(root,result=[]){
//         if(root){
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }
//             this.findLeafNode(root.left,result)
//             this.findLeafNode(root.right,result)
//         }
//         return result
//     }
    
// }

// const tree = new Bst();
// // const tree1=new Bst()
// tree.insert(10);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(18)
// tree.insert(30)
// tree.insert(40)

//basic properties

// console.log(tree.findParent(tree.root,5))
// console.log(tree.findChildren(tree.root,5))
// console.log(tree.findSiblings(tree.root,18))
// console.log(tree.findLeafNode(tree.root))

//basic operations


//console.log(tree.search(tree.root,60))
//tree.preOrder(tree.root);
 //tree.inOrder(tree.root);
 //tree.postOrder(tree.root);
 //tree.levelOrder(); // Fixed the function call
 //console.log(tree.min(tree.root))
//console.log(tree.max(tree.root))
// tree.delete(3);
// tree.levelOrder(); 
// console.log(tree1.isBst(tree1.root))
// console.log(tree1.isIdentical(tree,tree1))

// console.log(tree.findPrime(tree.root))

// console.log(tree.findHeight(tree.root))

// console.log(tree.findKthLargest(tree.root,2))
// console.log(tree.findKthSmallest(tree.root,2))

// console.log(tree.findSuccessor(tree.root,5))
// console.log(tree.findPredecessor(tree.root,5))
// tree.levelOrder()
// tree.removeDuplicates(tree.root)
// console.log("After removing duplicates")
// tree.levelOrder()

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Bst{
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
//             if(root.left==null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     findParent(root,target){
//         if(!root){
//             return null
//         }

//         let parent=null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value==target){
//                     parent=root
//                     return
//                 }

//                 if(root.right && root.right.value==target){
//                     parent=root
//                     return
//                 }

//                 inOrder(root.right)
//             }
//         }
//         inOrder(root)
//         return parent
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value == target){
//             const children={
//                 leftChild:root.left?root.left.value:null,
//                 rightChild:root.right?root.right.value:null
//             }

//             return children
//         }
//         else if(target < root.value){
//             return this.findChildren(root.left,target)
//         }
//         else{
//             return this.findChildren(root.right,target)
//         }
//     }

//     findSiblings(root,target){
//         if(!root){
//             return null
//         }

//         let parent=this.findParent(root,target)

//         if(!parent){
//             return null
//         }

//         if(parent.left && parent.left.value==target){
//             return parent.right.value
//         }
//         else if(parent.right && parent.right.value==target){
//             return parent.left.value
//         }
//         else{
//             return null
//         }
//     }

//     findLeafNodes(root,result=[]){
//         if(root){
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }
//             this.findLeafNodes(root.left,result)
//             this.findLeafNodes(root.right,result)
//         }
//         return result
//     }

//     findAncestor(root,target,ancestor=[]){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             return ancestor
//         }
//         ancestor.push(root.value)

//         if(target < root.value){
//             return this.findAncestor(root.left,target,ancestor)
//         }else{
//             return this.findAncestor(root.right,target,ancestor)
//         }
//     }

//     findDescendant(root,target,descendant=[]){
//         if(!root){
//             return null
//         }

//         if(root.value == target){
//             this.collectDescendant(root,descendant)
//             return descendant
//         }

//         if(target < root.value){
//             return this.findDescendant(root.left,target)
//         }else{
//             return this.findDescendant(root.right,target)
//         }
//     }

//     collectDescendant(root,descendant){
//         if(!root){
//             return null
//         }

//         descendant.push(root.value)
//         this.collectDescendant(root.left,descendant)
//         this.collectDescendant(root.right,descendant)
//     }

//     findDegree(root,target){
//         if(!root){
//             return null
//         }

//         let count=0
//         if(root.value==target){
//             if(root.left) count++
//             if(root.right) count++
//             return count
//         }

//         if(target < root.value){
//             return this.findDegree(root.left,target)
//         }else{
//             return this.findDegree(root.right,target)
//         }
//     }

//     findDepth(root,target){
//         if(!root){
//             return null
//         }
//         let depth=0
//         while(root){
//             if(target < root.value){
//                 root=root.left
//                 depth++
//             }
//             else if(target > root.value){
//                 root=root.right
//                 depth++
//             }
//             else{
//                 return depth
//             }
//         }
//         return -1
//     }
    
//     findLCA(root,n1,n2){
//         if(!root){
//             return null
//         }
//         while(root){
//             if(n1 < root.value && n2 < root.value){
//                 root=root.left
//             }

//             else if(n1 > root.value && n2 > root.value){
//                 root=root.right
//             }

//             else{
//                 return root
//             }
//         }
//         return -1
//     }



//     findPath(root,target){
//         if(!root){
//             return  null
//         }
//         let queue=[]
//         while(root){
//             queue.push(root.value)
//             if(target < root.value){
//                 root=root.left
//             }
//             else if(target > root.value){
//                 root=root.right
//             }
//             else{
//                 break
//             }
//         }
//         return queue
//     }

//     findDistance(root,target){
//         if(!root){
//             return null
//         }
//         let distance=0
//         while(root){
//             if(target < root.value){
//                 root=root.left
//                 distance++
//             }
//             else if(target > root.value){
//                 root=root.right
//                 distance++
//             }
//             else{
//                 return distance
//             }
//         }
//         return -1
//     }

//     findPathBetweenNodes(n1,n2){
//         let LCA=this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return []
//         }

//         let path1=this.findPath(LCA,n1)
//         let path2=this.findPath(LCA,n2)

//         return[...path1.reverse(),...path2.slice(1)]
//     }

//     findDistanceBetweenNodes(n1,n2){
//         let LCA=this.findLCA(this.root,n1,n2)
//         if(!LCA){
//             return null
//         }

//         let distance1=this.findDistance(LCA,n1)
//         let distance2=this.findDistance(LCA,n2)
//         return distance1+distance2
//     }


// }



// const tree = new Bst();
// const tree1=new Bst()
// tree.insert(10);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(7);
// tree.insert(12);
// tree.insert(18)
// tree.insert(30)
// tree.insert(40)

//basic properties

// let parent=tree.findParent(tree.root,18)
// console.log(parent?parent.value:null)

// console.log(tree.findChildren(tree.root,15))

// console.log(tree.findSiblings(tree.root,12))
//console.log(tree.findLeafNodes(tree.root))
 //console.log(tree.findAncestor(tree.root,7))
// console.log(tree.findDescendant(tree.root,5))

// console.log(tree.findDegree(tree.root,7))
//console.log(tree.findDepth(tree.root,18))

// console.log("Path between 5 and 15:", tree.findPathBetweenNodes(5, 15))

// console.log("Distance between 5 and 15:", tree.findDistanceBetweenNodes(5, 15));


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
//             if(root.left==null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     findParent(root,target){
//         if(!root){
//             return null
//         }

//         let parent=null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value == target){
//                     parent=root
//                     return
//                 }

//                 if(root.right && root.right.value==target){
//                     parent=root
//                     return
//                 }

//                 inOrder(root.right)
//             }
//         }
//         inOrder(root)
//         return parent
//     }

//     findChildren(root,target){
//         if(!root){
//             return null
//         }
//         else if(root.value==target){
//             const children={
//                 leftChild:root.left?root.left.value:null,
//                 rightChild:root.right?root.right.value:null
//             }
//             return children
//         }
//         else if(target < root.value){
//             return this.findChildren(root.left,target)
//         }
//         else{
//             return this.findChildren(root.right,target)
//         }
//     }

//     findSiblings(root,target){
//         if(!root){
//             return null
//         }

//         let parent=this.findParent(root,target)

//         if(!parent){
//             return null
//         }

//         else if(parent.left && parent.left.value===target){
//             return parent.right.value
//         }

//         else if(parent.right && parent.right.value===target){
//             return parent.left.value
//         }

//         else{
//             return -1
//         }
//     }

//     findLeafNode(root,result=[]){
//         if(!root){
//             return []
//         }

//         if(root){
//             this.findLeafNode(root.left,result)
//             if(!root.left && !root.right){
//                 result.push(root.value)
//             }
//             this.findLeafNode(root.right,result)
//         }
//         return result
//     }

//     findAncestor(root,target,ancestor=[]){
//         if(!root){
//             return null
//         }

//         if(root.value ==target){
//             return ancestor
//         }

//         ancestor.push(root.value)

//         if(target < root.value){
//             return this.findAncestor(root.left,target,ancestor)
//         }else{
//             return this.findAncestor(root.right,target,ancestor)
//         }
//     }

//     findDescendants(root,target,Descendant=[]){
//         if(!root){
//             return null
//         }

//         if(root.value==target){
//             this.collectDescendant(root,Descendant)
//             return Descendant
//         }

//         if(target < root.value){
//             return this.findDescendants(root.left,target,Descendant)
//         }else{
//             return this.findDescendants(root.right,target,Descendant)
//         }
//     }

//     collectDescendant(root,Descendant){
//         if(root){
//             Descendant.push(root.value)
//             this.collectDescendant(root.left,Descendant)
//             this.collectDescendant(root.right,Descendant)
//         }
//     }

//     findDegree(root,target){
//         if(!root){
//             return 0
//         }
//         let c=0
//         if(root.value==target){
//             if(root.left) c++
//             if(root.right) c++
//             return c
//         }
//         if(target < root.value){
//             return this.findDegree(root.left,target)
//         }else{
//             return this.findDegree(root.right,target)
//         }
//     }

//     findDepth(root,target){
//         if(!root){
//             return null
//         }

//         let depth=0

//         while(root){
//             if(target < root.value){
//                 root=root.left
//                 depth++
//             }else if(target > root.value){
//                 root=root.right
//                 depth++
//             }
//             else{
//                 return depth
//             }
//         }
//         return -1
//     }

//     findLCA(root,n1,n2){
//         if(!root){
//             return null
//         }

//         while(root){
//             if(n1 < root.value && n2 < root.value){
//                 root=root.left
//             }
//             else if(n1 > root.value && n2 > root.value){
//                 root=root.right
//             }
//             else{
//                 return root
//             }
//         }
//         return -1
//     }

//     findDistance(root,target){
//         if(!root){
//             return null
//         }
//         let distance=0
//         while(root){
//             if(target < root.value){
//                 root=root.left
//                 distance++
//             }
//             else if(target > root.value){
//                 root=root.right
//                 distance++
//             }else{
//                 return distance
//             }
//         }
//         return -1
//     }

//     findPath(root,target){
//         if(!root){
//             return null
//         }

//         let path=[]

//         while(root){
//             path.push(root.value)
//             if(target < root.value){
//                 root=root.left
//             }
//             else if(target > root.value){
//                 root=root.right
//             }
//             else{
//                 return path
//             }
//         }
//         return -1
//     }

//     findPathBetweenTwoNodes(n1,n2){
//         let LCA=this.findLCA(this.root,n1,n2)


//         if(!LCA){
//             return null
//         }

//         let path1=this.findPath(LCA,n1)
//         let path2=this.findPath(LCA,n2)

//         return [...path1.reverse(),...path2.slice(1)]
//     }

//     findDistancBetweenTwoNodes(n1,n2){
//         let LCA=this.findLCA(this.root,n1,n2)

//         if(!LCA){
//             return null
//         }

//         let distance1=this.findDistance(LCA,n1)
//         let distance2=this.findDistance(LCA,n2)

//         return distance1+distance2
//     }
// }

// const b=new Binarysearchtree()

// b.insert(10);
// b.insert(5);
// b.insert(15);
// b.insert(3);
// b.insert(7);
// b.insert(12);
// b.insert(18);


// let parent=b.findParent(b.root,10)
// console.log(parent?parent.value:null)

//find children

// console.log(b.findChildren(b.root,10))

// console.log(b.findSiblings(b.root,7))

// console.log(b.findLeafNode(b.root))

// console.log(b.findAncestor(b.root,7))

// console.log(b.findDescendants(b.root,5))

// console.log(b.findDegree(b.root,15))

// console.log(b.findDepth(b.root,90))


// console.log("find path between 7 to 18",b.findPathBetweenTwoNodes(7,18))

// console.log("find distance between 7 to 18",b.findDistancBetweenTwoNodes(7,15)) 

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
            if(root.right == null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,target){
        if(!root){
            return false
        }
        else if(root.value==target){
            return true
        }
        else if(target < root.value){
            return this.search(root.left,target)
        }
        else{
            return this.search(root.right,target)
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
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
        let queue=[]
        queue.push(this.root)

        while(queue.length > 0){
            let curr=queue.shift()
            if(curr){
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
            return null
        }

        while(root.left){
            root=root.left
        }

        return root.value
    }

    max(root){
        if(!root){
            return null
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
            if(num % i== 0){
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

    isBst(root,min=null,max=null){
        if(!root){
            return true
        }

        if((min!=null && root.value < min)&&(max!=null && root.value > max)){
            return false
        }

        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1||!tree2){
            return false
        }

        return (tree1.value == tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    findHeight(root){
        if(!root){
            return null
        }

        let queue=[]
        queue.push(root)
        let height=0

        while(queue.length > 0){
            let nodeCount=queue.length
            height++

            while(nodeCount > 0){
                let curr=queue.shift()
                if(curr){
                    if(curr.left){
                        queue.push(curr.left)
                    }

                    if(curr.right){
                        queue.push(curr.right)
                    }
                }
                nodeCount--
            }
        }
        return height
    }

    inOrderTraversal(root,result=[]){
        if(root){
            this.inOrderTraversal(root.left,result)

            result.push(root.value)

            this.inOrderTraversal(root.right,result)
        }
        return result
    }

    findKthLargest(root,k){
        let result=this.inOrderTraversal(root)
        return result[result.length-k]||null
    }

    findKthSmallest(root,k){
        let result=this.inOrderTraversal(root)
        return result[k-1]||null
    }

    closestValue(root,target){
        let result=this.inOrderTraversal(root)
        let closest=null
        for(let i=0;i<result.length;i++){
            if(result[i]>=target){
                closest=result[i]
                break
            }
        }
        return closest
    }

    successor(root,target){
        let result=this.inOrderTraversal(root)
        let successor=null
        for(let i=0;i<result.length;i++){
            if(result[i]==target){
                if(i+1 < result.length){
                    successor=result[i+1]
                }
                break
            }
        }
        return successor
    }

    predecessor(root,target){
        let result=this.inOrderTraversal(root)
        let predecessor=null
        for(let i=0;i<result.length;i++){
            if(result[i]==target){
                if(i-1 >= 0){
                    predecessor=result[i-1]
                }
            }
        }
        return predecessor
    }

    removeDuplicates(root){
        let unique=new Set()

        function inOrder(root){
            if(root){
                inOrder(root.left)
                unique.add(root.value)
                inOrder(root.right)
            }
        }

        inOrder(root)
        this.root=null
        unique.forEach(value=>{
            this.insert(value)
        })
    }

    findParent(root,target){
        if(!root){
            return null
        }

        let parent=null

        function inOrder(root){

            if(root){
                inOrder(root.left)

            if(root.left && root.left.value==target){
                parent=root
                return
            }

            if(root.right && root.right.value==target){
                parent=root
                return
            }

            inOrder(root.right)
            }
        }

        inOrder(root)
        return parent
    }

    findChildren(root,target){
        if(!root){
            return null
        }
        else if(root.value===target){
            const children={
                leftChild:root.left?root.left.value:null,
                rightChild:root.right?root.right.value:null
            }

            return children
        }
        else if(target < root.value){
            return this.findChildren(root.left,target)
        }
        else{
            return this.findChildren(root.right,target)
        }
    }

    findSiblings(root,target){
        if(!root){
            return null
        }

        let parent=this.findParent(root,target)

        if(!parent){
            return null
        }

        if(parent.left && parent.left.value==target){
            return parent.right.value
        }

        if(parent.right && parent.right.value==target){
            return parent.left.value
        }
    }

    findLeafNode(root,result=[]){
        if(root){
            if(!root.left && !root.right){
                result.push(root.value)
            }
            this.findLeafNode(root.left,result)
            this.findLeafNode(root.right,result)
        }
        return result
    }

    findAncestor(root,target,ancestor=[]){
        if(!root){
            return null
        }
        else if(root.value==target){
            return ancestor
        }
        ancestor.push(root.value)
        if(target < root.value){
            return this.findAncestor(root.left,target,ancestor)
        }else{
            return this.findAncestor(root.right,target,ancestor)
        }
    }

    findDescendant(root,target,descendant=[]){
        if(!root){
            return null
        }

        else if(root.value==target){
            this.collectDescendant(root,descendant)
            return descendant
        }

        else if(target < root.value){
            return this.findDescendant(root.left,target,descendant)
        }
        else{
            return this.findDescendant(root.right,target,descendant)
        }
    }

    collectDescendant(root,descendant){
        if(root){
            descendant.push(root.value)
            this.collectDescendant(root.left,descendant)
            this.collectDescendant(root.right,descendant)
        }
    }

    findDegree(root,target){
        let count=0
        if(!root){
            return null
        }

        else if(root.value==target){
            if(root.left) count++
            if(root.right) count++
            return count
        }

        else if(target < root.value){
            return this.findDegree(root.left,target)
        }
        else{
            return this.findDegree(root.right,target)
        }
    }

    findDepth(root,target){
        if(!root){
            return target
        }

        let depth=0

        while(root){
            if(target < root.value){
                root=root.left
                depth++
            }
            else if(target > root.value){
                root=root.right
                depth++
            }
            else{
                return depth
            }
        }

        return "no depth"
    }

    findLCA(root,n1,n2){
        if(!root){
            return null
        }

        if(n1 < root.value && n2 < root.value){
            root=root.left
        }
        else if(n1 > root.value && n2 > root.value){
            root=root.right
        }
        else{
            return root
        }
        return "No LCA"
    }

    path(root,target){
        if(!root){
            return "no path"
        }

        let path=[]

        while(root){
            path.push(root.value)
            if(target < root.value){
                root=root.left
            }
            else if(target > root.value){
                root=root.right
            }
            else{
                return path
            }
        }
        return "path is not constructed"
    }

    distance(root,target){
        if(!root){
            return "distance is not calculated"
        }

        let distance=0
        while(root){
            if(target < root.value){
                root=root.left
                distance++
            }
            else if(target > root.value){
                root=root.right
                distance++
            }
            else{
                return distance
            }
        }
        return "No distance"
    }

    findPathBetweenTwoNodes(n1,n2){
        let LCA=this.findLCA(this.root,n1,n2)

        if(!LCA){
            return "no common point"
        }

        let path1=this.path(LCA,n1)
        let path2=this.path(LCA,n2)

        return [...path1.reverse(),...path2.slice(1)]
    }

    findDistancBetweenTwoNodes(n1,n2){
        let LCA=this.findLCA(this.root,n1,n2)

        if(!LCA){
            return null
        }

        let distance1=this.distance(LCA,n1)
        let distance2=this.distance(LCA,n2)

        return distance1+distance2
    }


}


let b=new bst()

b.insert(10);
b.insert(5);
b.insert(15);
b.insert(3);
b.insert(7);
b.insert(12);
b.insert(18);

//search works
// console.log(b.search(b.root,20))
// console.log(b.search(b.root,18))

//DFS

// b.preOrder(b.root)
// b.inOrder(b.root)
// b.postOrder(b.root)

//BFS

// b.levelOrder()

//minimum and maximum

// console.log(b.min(b.root))
// console.log(b.max(b.root))

//deletion

// b.levelOrder()

// b.delete(10)
// console.log("After")
// b.levelOrder()

// console.log(b.findPrime(b.root))


// console.log(b.isBst(b.root))

//isIdentical
// let b1=new bst()

// b1.insert(10);
// b1.insert(15);
// b1.insert(15);
// b1.insert(3);
// b1.insert(7);
// b1.insert(12);
// b1.insert(18);
// console.log(b.isIdentical(b.root,b1.root))

// console.log(b.findHeight(b.root))

// console.log(b.inOrderTraversal(b.root))

//kth largest

// console.log(b.findKthLargest(b.root,3))

// //kth smallest

// console.log(b.findKthSmallest(b.root,2))

// console.log(b.closestValue(b.root,5))

//successor:next value

// console.log(b.successor(b.root,5))

//predecessor:Befor value

// console.log(b.predecessor(b.root,5))

//removeDuplicates

// b.levelOrder()
// b.removeDuplicates(b.root)
// console.log("After removing duplicates")
// b.levelOrder()

//finding parent
// let parent=b.findParent(b.root,7)
// console.log(parent?parent.value:null)

//find children

// console.log(b.findChildren(b.root,15))

//find leaf node

// console.log(b.findLeafNode(b.root))

// console.log(b.findSiblings(b.root,15))

//findAncestor:parent parent

// console.log(b.findAncestor(b.root,18))

//findDescendant

// console.log(b.findDescendant(b.root,5))


//findDegree:No of childrens for a node

// console.log(b.findDegree(b.root,1))

//findDepth:Edges from top of the root node to 7
// console.log(b.findDepth(b.root,7))

// console.log("find path between 7 to 18",b.findPathBetweenTwoNodes(7,18))

console.log("find distance between 7 to 18",b.findDistancBetweenTwoNodes(7,18))