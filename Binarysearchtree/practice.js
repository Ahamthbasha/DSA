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
//                 root.right = node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }else if(root.value == value){
//             return true
//         }else if(value < root.value){
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

//     inorder(root){
//         if(root){
//             this.inorder(root.left)
//             console.log(root.value)
//             this.inorder(root.right)
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

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     delete(value){
//         this.root = this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root == null){
//             return root
//         }
//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             if(!root.right && !root.left){
//                 return null
//             }
//             if(!root.right){
//                 return root.left
//             }else if(!root.left){
//                 return root.right
//             }

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
// bst.inorder(bst.root)
//bst.postOrder(bst.root)

// bst.breadthFirstSearch()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

// bst.breadthFirstSearch()
// bst.delete(3)
// bst.breadthFirstSearch()
// bst.delete(15)
// bst.breadthFirstSearch()
// bst.delete(10)
// bst.breadthFirstSearch()

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
//                 //we call this until we found the null space
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
//         else if(root.value==value){
//             return true
//         }
//         else if(value < root.value){
//             this.search(root.left,value)
//         }else{
//             this.search(root.right,value)
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
//         if(this.isEmpty()){
//             console.log("tree is empty")
//             return
//         }

//         let queue=[]
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
//         if(!root){
//             return false
//         }
//         while(root.left){
//             root=root.left
//         }
//         return root.value
//     }

//     max(root){
//         if(!root){
//             return false
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
//             return false
//         }
//         else if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }
//         else{
//             if(!root.right && !root.left){
//                 return null
//             }

//             if(!root.right){
//                 return root.left
//             }
//             else if(!root.left){
//                 return root.right
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
//             if(num%i==0){
//                 return false
//             }
//         }
//         return true
//     }

//     findPrimes(root,result=[]){
//         if(root){
//         this.findPrimes(root.left,result)
//         if(this.isPrime(root.value)){
//             result.push(root.value)
//         }
//         this.findPrimes(root.right,result)
//         }
//     }

    


// }

// const tree=new Binarysearchtree()
// tree.insert(10)
// tree.insert(5)
// tree.insert(15)
// tree.insert(2)
// tree.insert(7)
// tree.insert(20)
// //tree.preOrder(tree.root)
// //tree.inOrder(tree.root)
// //tree.postOrder(tree.root)
// // tree.levelOrder()

// tree.delete(7)
// tree.levelOrder()



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

//     //DFS

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

//     //bfs

//     levelOrder(){
//         let queue=[]
//         queue.push(this.root)

//         while(queue.length > 0){
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
//             return -1
//         }
//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }
//         else{
//             //leaf child

//             if(!root.left && !root.right){
//                 return null
//             }
//             //one children
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left
//             }
//             //root value
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
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

//     //inOrder principle 

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

//         return (tree1.value==tree2.value && (this.isIdentical(tree1.left,tree2.left)) && (this.isIdentical(tree1.right,tree2.right)))
//     }

//     isBst(root,min=null,max=null){
//         if(!root){
//             return true
//         }
//         if((min!=null && root.value <= min) && (max!=null && root.value >= max)){
//             return false
//         }

//         return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
//     }

//     findHeight(root){
//         if(!root){
//             return 0
//         }

//         let queue=[]
//         queue.push(root)
//         let height=0
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

//     findSuccessor(root,value){
//         let result=this.inOrderTraversal(root)
//         let successor
//         for(let i=0;i<result.length;i++){
//             if(result[i]==value){
//                 if(i+1 < result.length){
//                     successor=result[i+1]
//                 }
//                 break
//             }
//         }
//         return successor||null
//     }

//     findPredecessor(root,value){
//         let result=this.inOrderTraversal(root)
//         let predecessor
//         for(let i=0;i<result.length;i++){
//             if(result[i]==value){
//                 if(i-1 >= 0 ){
//                     predecessor=result[i-1]
//                 }
//                 break
//             }
//         }
//         return predecessor||null
//     }

//     findClosest(root,value){
//         let result=this.inOrderTraversal(root)
//         let closest
//         for(let i=0;i<result.length;i++){
//             if(result[i]>=value){
//                 closest=result[i]
//                 break
//             }
//         }
//         return closest||result[result.length-1]
//     }

//     removeDuplicates(root){
//         let unique=new Set()

//         let inOrder=(node)=>{
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

// const t=new bst()
// t.insert(10)
// t.insert(5)
// t.insert(15)
// t.insert(2)
// t.insert(7)
// t.insert(20)

// const t2=new bst()
// t2.insert(10)
// t2.insert(15)
// t2.insert(15)
// t2.insert(10)
// t2.insert(7)
// t2.insert(7)
// console.log(t.search(t.root,5))
// console.log(t.search(t.root,1))
//t.preOrder(t.root)
//t.postOrder(t.root)
//t.inOrder(t.root)
//t.levelOrder()
// console.log(t.max(t.root))
// console.log(t.min(t.root))
// t.delete(10)
// t.levelOrder()
//console.log(t.findPrime(t.root))
// console.log(t.isIdentical(t.root,t2.root))
//console.log(t.isBst(t.root))
//console.log(t.findHeight(t.root))
// console.log(t.findKthLargest(t.root,1))
// console.log(t.findKthSmallest(t.root,1))
// console.log(t.findSuccessor(t.root,10))
// console.log(t.findPredecessor(t.root,10))
//console.log(t.findClosest(t.root,3))
// t2.levelOrder()
// t2.removeDuplicates(t2.root)
// console.log("after removing duplicates")
// t2.levelOrder()

