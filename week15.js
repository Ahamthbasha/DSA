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
//         }
//         else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }
//             else{
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
//             return "no root or no value like this"
//         }
//         else if(root.value==value){
//             return true
//         }
//         else if(value < root.left){
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
//         let node=this.root

//         queue.push(node)

//         while(queue.length){
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
//             return "no root"
//         }

//         while(root.left){
//             root=root.left
//         }

//         return root.value
//     }

//     max(root){
//         if(!root){
//             return "no root"
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
//             return "there is no root"
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
//         if(num<=1){
//             return false
//         }

//         for(let i=2;i<=Math.sqrt(num);i++){
//             if(num % i == 0){
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

//     isBst(root,min=null,max=null){
//         if(!root){
//             return true
//         }

//         if((min!=null && root.value < min) &&(max!=null && root.value > max)){
//             return false
//         }

//         return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
//     }

//     isIdentical(tree1,tree2){
//         if(!tree1 && !tree2){
//             return true
//         }

//         if(!tree1 || !tree2){
//             return false
//         }

//         return (tree1.value==tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
//     }

//     findHeight(root){
//         let queue=[]
//         queue.push(root)
//         let height=0

//         while(queue.length){
//             let nodeCount=queue.length
//             height++

//             while(nodeCount > 0){
//                 let curr=queue.shift()
//                 if(curr.left){
//                     queue.push(curr.left)
//                 }

//                 if(curr.right){
//                     queue.push(curr.right)
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
//         let closest=null
//         for(let i=0;i<result.length;i++){
//             if(result[i]>=k){
//                 closest=result[i]
//                 break
//             }
//         }
//         return closest
//     }

//     successor(root,target){
//         let result=this.inOrderTraversal(root)
//         let successor=null
//         for(let i=0;i<result.length;i++){
//             if(result[i]==target){
//                 if(i+1 < result.length){
//                     successor=result[i+1]
//                 }
//                 break
//             }
//         }
//         return successor
//     }

//     predecessor(root,target){
//         let result=this.inOrderTraversal(root)

//         let predecessor=null

//         for(let i=0;i<result.length;i++){
//             if(result[i]==target){
//                 if(i-1 >= 0){
//                     predecessor=result[i-1]
//                 }
//                 break
//             }
//         }

//         return predecessor
//     }

//     removeDuplicates(root){
//         let unique=new Set()

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)
//                 unique.add(root.value)
//                 inOrder(root.right)
//             }
//         }
//         inOrder(root)
//         this.root=null


//         unique.forEach(value=>{
//             this.insert(value)
//         })
//     }


//     findParent(root,k){
//         if(!root){
//             return "no root"
//         }

//         let parent=null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//             if(root.left && root.left.value === k){
//                 parent=root
//                 return
//             }

//             if(root.right && root.right.value === k){
//                 parent=root
//                 return
//             }

//             inOrder(root.right)
//         }
//         }
//         inOrder(root)
//         return parent
//     }

//     findChildren(root,k){
//         if(!root){
//             return "there is no children"
//         }

//         else if(root.value==k){
//             const children={
//                 leftChild:root.left?root.left.value:null,
//                 rightChild:root.right?root.right.value:null
//             }
//             return children
//         }

//         else if(k < root.value){
//             return this.findChildren(root.left,k)
//         }
//         else{
//             return this.findChildren(root.right,k)
//         }
//     }

//     findSibling(root,k){
//         if(!root){
//             return "not found"
//         }

//         let sibling=null

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)

//                 if(root.left && root.left.value==k){
//                     sibling=root.right.value
//                     return
//                 }

//                 if(root.right && root.right.value==k){
//                     sibling=root.left.value
//                     return
//                 }

//                 inOrder(root.right)
//             }
//         }
//         inOrder(root)
//         return sibling
//     }

//     findAncestor(root,k,result=[]){
//         if(!root){
//             return null
//         }

//         result.push(root.value)

//         if(root.value==k){
            
//             return result
//         }

//         else if(k < root.value){
//             return this.findAncestor(root.left,k,result)
//         }
//         else{
//             return this.findAncestor(root.right,k,result)
//         }
//     }

//     findDescendant(root,k,descendant=[]){
//         if(!root){
//             return "no root"
//         }

//         if(root.value==k){
//             this.collectDescendant(root,descendant)
//             return descendant
//         }

//         if(k<root.value){
//             return this.findDescendant(root.left,k,descendant)
//         }
//         else{
//             return this.findDescendant(root.right,k,descendant)
//         }
//     }

//     collectDescendant(root,descendant){
//         if(root){
//             descendant.push(root.value)
//             this.collectDescendant(root.left,descendant)
//             this.collectDescendant(root.right,descendant)
//         }
//     }

//     findDegree(root,k){
//         if(!root){
//             return "no root"
//         }

//         let count=0

//         if(root.value==k){
//             if(root.left) count++
//             if(root.right) count++
//             return count
//         }

//         else if(k < root.value){
//             this.findDegree(root.left,k)
//         }
//         else{
//             this.findDegree(root.right,k)
//         }
//         return 0
//     }

//     findDepth(root,k){
//         if(!root){
//             return "root not found"
//         }

//         let depth=0

//         while(root){
//             if(k < root.value){
//                 root=root.left
//                 depth++
//             }
//             else if(k> root.value){
//                 root=root.right
//                 depth++
//             }
//             else{
//                 return depth
//             }
//         }
//         return "no value like that"
//     }

//     findLCA(root,n1,n2){
//         if(!root){
//             return "there is  no root"
//         }
//         while(root){
//             if(n1 < root.left && n2 <root.right){
//                 root=root.left
//             }
//             else if(n1 > root.left && n2 > root.right){
//                 root=root.right
//             }
//             else{
//                 return root
//             }
//         }
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
//                 return path
//             }
//         }
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
//     }

//     findPathBetweenTwoNodes(n1,n2){
//         let LCA=this.findLCA(this.root)

//         if(!LCA){
//             return "null"
//         }

//         let Path1=this.findPath(LCA,n1)
//         let Path2=this.findPath(LCA,n2)

//         return[...Path1.reverse(),...Path2.slice(1)]
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

// let b = new bst()
// let b1=new bst()
// b.insert(10);
// b.insert(5);
// b.insert(15);
// b.insert(3);
// b.insert(7);
// b.insert(12);
// b.insert(18);


// b1.insert(10);
// b1.insert(5);
// b1.insert(150);
// b1.insert(3);
// b1.insert(7);
// b1.insert(12);
// b1.insert(18);
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


//findPrime

// console.log(b.findPrime(b.root))

//IsBst

// console.log(b.isBst(b.root))

//isIdentical

// console.log(b.isIdentical(b.root,b1.root))

//height:Root to leaf node.The edges is calculated

// console.log(b.findHeight(b.root))

//inOrder Traversal final result is

// console.log(b.inOrderTraversal(b.root))

//kth largest

// console.log(b.findKthLargest(b.root,3))

//kth smallest

// console.log(b.findKthSmallest(b.root,2))

//closest value

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
// let parent=b.findParent(b.root,5)
// console.log(parent?parent.value:null)

//find children

// console.log(b.findChildren(b.root,10))

//find leaf node

// console.log(b.findLeafNode(b.root))

//findAncestor:parent parent

// console.log(b.findAncestor(b.root,7))

//findDescendant

// console.log(b.findDescendant(b.root,5))

//findSiblings

// console.log(b.findSibling(b.root,5))

//findDegree:No of childrens for a node

// console.log(b.findDegree(b.root,3))

//findDepth:Edges from top of the root node to 7
// console.log(b.findDepth(b.root,90))

// console.log("find path between 7 to 18",b.findPathBetweenTwoNodes(7,18))

// console.log("find distance between 7 to 18",b.findDistancBetweenTwoNodes(7,18))


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
            if(root.left==null){
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

        else if(root.value == value){
            return true
        }

        else if(value < root.value){
            return this.search(root.left,value)
        }

        else{
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

        while(queue.length){
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
            return
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
            if(!root.right && !root.left){
                return null
            }

            if(!root.right){
                return root.left
            }

            if(!root.left){
                return root.right
            }

            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    isBst(root,min=null,max=null){
        if(!root){
            return true
        }
        if((min!=null && root.value < min) &&  (max!=null && root.value > max)){
            return false
        }

        return this.isBst(root.left,min,root.value) && this.isBst(root.right,root.value,max)
    }

    isIdentical(tree1,tree2){
        if(!tree1 && !tree2){
            return true
        }

        if(!tree1 || !tree2){
            return false
        }

        return (tree1.value==tree2.value) && this.isIdentical(tree1.left,tree2.left) && this.isIdentical(tree1.right,tree2.right)
    }

    isPrime(num){
        if(num<=1){
            return false
        }

        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i==0){
                return false
            }
        }
        return true
    }

    findPrime(root,result=[]){
        if(!root){
            return "there is no root"
        }

        if(root){
            this.findPrime(root.left,result)
            if(this.isPrime(root.value)){
                result.push(root.value)
            }
            this.findPrime(root.right,result)
        }
        return result
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

    closestValue(root,k){
        let result=this.inOrderTraversal(root)
        let closest=null
        for(let i=0;i<result.length;i++){
            if(result[i]>=k){
                closest=result[i]
                break
            }
        }
        return closest
    }

    successor(root,k){
        let result=this.inOrderTraversal(root)
        let successor=null
        for(let i=0;i<result.length;i++){
            if(result[i] == k){
                if(i+1 < result.length){
                    successor=result[i+1]
                }
            }
        }
        return successor
    }

    predecessor(root,k){
        let result=this.inOrderTraversal(root)
        let predecessor=null
        for(let i=0;i<result.length;i++){
            if(result[i] == k){
                if(i-1 >=0){
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

        unique.forEach(values=>{
            this.insert(values)
        })
    }

    findHeight(){
        let queue=[]

        let node=this.root
        queue.push(node)
        let height=0

        while(queue.length){
            let nodeCount=queue.length
            height++

            while(nodeCount > 0){
                let curr=queue.shift()
                if(curr.left){
                    queue.push(curr.left)
                }

                if(curr.right){
                    queue.push(curr.right)
                }
                nodeCount--
            }
        }
        return height
    }

    findParent(root,k){
        if(!root){
            return null
        }
        let parent=null
        function inOrder(root){
            if(root){
                inOrder(root.left)
                if(root.left && root.left.value==k){
                    parent=root
                    return
                }

                if(root.right && root.right.value==k){
                    parent=root
                    return
                }

                inOrder(root.right)
            }
        }
        inOrder(root)
        return parent
    }

    findChildren(root,k){
        if(!root){
            return null
        }

        if(root.value==k){
            const children={
                leftChild:root.left?root.left.value:null,
                rightChild:root.right?root.right.value:null
            }
            return children
        }

        else if(k < root.value){
            return this.findChildren(root.left,k)
        }
        else{
            return this.findChildren(root.right,k)
        }
    }

    findSibling(root,k){
        if(!root){
            return null
        }

        let sibling=null

        function inOrder(root){
            if(root){
                inOrder(root.left)

            if(root.left && root.left.value==k){
                sibling=root.right.value
                return
            }

            if(root.right && root.right.value==k){
                sibling=root.left.value
                return
            }

            inOrder(root.right)

            }
        }
        inOrder(root)
        return sibling
    }

    findLeafNode(root,result=[]){
        if(root){
            this.findLeafNode(root.left,result)
            if(!root.left && !root.right){
                result.push(root.value)
            }
            this.findLeafNode(root.right,result)
        }
        return result
    }

    findAncestor(root,k,ancestor=[]){
        if(!root){
            return null
        }
        ancestor.push(root.value)
        if(root.value==k){
            return ancestor
        }
        else if(k < root.value){
            return this.findAncestor(root.left,k,ancestor)
        }
        else{
            return this.findAncestor(root.right,k,ancestor)
        }
    }

    findDescendant(root,k,descendant=[]){
        if(!root){
            return null
        }

        if(root.value==k){
            this.collectDescendant(root,descendant)
            return descendant
        }
        else if(k < root.value){
            return this.findDescendant(root.left,k,descendant)
        }
        else{
            return this.findDescendant(root.right,k,descendant)
        }
    }

    collectDescendant(root,descendant){
        if(root){
        descendant.push(root.value)
        this.collectDescendant(root.left,descendant)
        this.collectDescendant(root.right,descendant)
        }
    }

    degree(root,k){
        if(!root){
            return null
        }

        let count=0

        if(root.value==k){
            if(root.left) count++
            if(root.right) count++
            return count
        }

        else if(k < root.value){
            return this.degree(root.left,k)
        }
        else{
            return this.degree(root.right,k)
        }
    }

    depth(root,k){
        if(!root){
            return null
        }

        let depth=0

        while(root){
            if(k< root.value){
                root=root.left
                depth++
            }
            else if(k > root.value){
                root=root.right
                depth++
            }

            else{
                return depth
            }
        }
        return "the given has not depth"
    }

    distance(root,k){
        if(!root){
            return null
        }

        let distance=0

        while(root){
            if(k < root.value){
                root=root.left
                distance++
            }
            else if(k > root.value){
                root=root.right
                distance++
            }
            else{
                return distance
            }
        }
        return "it has no distance"
    }

    findLCA(root,n1,n2){
        if(!root){
            return null
        }

        while(root){
            if(n1 < root.value && n2 < root.value){
                root=root.left
            }
            else if(n1 > root.right && n2 > root.right){
                root=root.right
            }
            else{
                return root
            }
        }
    }

    path(root,k){
        let path=[]

        while(root){
            path.push(root.value)

            if(k < root.value){
                root=root.left
            }

            else if(k > root.value){
                root=root.right
            }

            else{
                return path
            }
        }
    }

    findDistanceBetweenTwoNodes(n1,n2){
        let LCA=this.findLCA(this.root,n1,n2)

        if(!LCA){
            return null
        }

        let distance1=this.distance(LCA,n1)
        let distance2=this.distance(LCA,n2)
        return distance1+distance2
    }

    findPathBetweeenTwoNodes(n1,n2){
        let LCA=this.findLCA(this.root,n1,n2)

        if(!LCA){
            return null
        }

        let path1=this.path(LCA,n1)
        let path2=this.path(LCA,n2)

        return [...path1.reverse(),...path2.slice(1)]
    }
}

let b = new bst()
// let b1=new bst()
b.insert(10);
b.insert(5);
b.insert(15);
b.insert(3);
b.insert(7);
b.insert(12);
b.insert(18);


// b1.insert(10);
// b1.insert(5);
// b1.insert(15);
// b1.insert(3);
// b1.insert(7);
// b1.insert(12);
// b1.insert(18);
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

// b.delete(15)
// console.log("After")
// b.levelOrder()


//findPrime

// console.log(b.findPrime(b.root))

//IsBst

// console.log(b.isBst(b.root))

//isIdentical

// console.log(b.isIdentical(b.root,b1.root))

//height:Root to leaf node.The edges is calculated

// console.log(b.findHeight(b.root))

//inOrder Traversal final result is

// console.log(b.inOrderTraversal(b.root))

//kth largest

//console.log(b.findKthLargest(b.root,3))

//kth smallest
// console.log(b.findKthSmallest(b.root,2))


//closest value

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
// let parent=b.findParent(b.root,5)
// console.log(parent?parent.value:null)

//find children


// console.log(b.findChildren(b.root,10))
//find leaf node

// console.log(b.findLeafNode(b.root))

//findAncestor:parent parent

// console.log(b.findAncestor(b.root,7))

//findDescendant

// console.log(b.findDescendant(b.root,5))

//findSiblings

// console.log(b.findSibling(b.root,5))


//findDegree:No of childrens for a node

// console.log(b.degree(b.root,10))

//findDepth:Edges from top of the root node to 7
// console.log(b.depth(b.root,5))

// console.log("find path between 7 to 18",b.findPathBetweeenTwoNodes(7,18))

// console.log("find distance between 7 to 18",b.findDistanceBetweenTwoNodes(7,18))



//maxHeap

// class Heap {
//     constructor() {
//       this.heap = [];
//     }
  
//     // Swap two elements in the heap
//     swap(index1, index2) {
//       let temp = this.heap[index1];
//       this.heap[index1] = this.heap[index2];
//       this.heap[index2] = temp;
//     }
  
//     // Check if there is a left child
//     hasLeftChild(index) {
//       return this.getLeftChildIndex(index) < this.heap.length;
//     }
  
//     // Check if there is a right child
//     hasRightChild(index) {
//       return this.getRightChildIndex(index) < this.heap.length;
//     }
  
//     // Check if there is a parent
//     hasParent(index) {
//       return this.getParentIndex(index) >= 0;
//     }
  
//     // Get index of the left child
//     getLeftChildIndex(index) {
//       return 2 * index + 1;
//     }
  
//     // Get index of the right child
//     getRightChildIndex(index) {
//       return 2 * index + 2;
//     }
  
//     // Get index of the parent
//     getParentIndex(index) {
//       return Math.floor((index - 1) / 2);
//     }
  
//     // Get left child value
//     getLeftChild(index) {
//       return this.heap[this.getLeftChildIndex(index)];
//     }
  
//     // Get right child value
//     getRightChild(index) {
//       return this.heap[this.getRightChildIndex(index)];
//     }
  
//     // Get parent value
//     getParent(index) {
//       return this.heap[this.getParentIndex(index)];
//     }
  
//     // Peek at the root element
//     peek() {
//       if (this.heap.length === 0) return null;
//       return this.heap[0];
//     }
  
//     // Heapify up the element at the given index
//     heapifyUp(index) {
//       while (this.hasParent(index) && this.getParent(index) < this.heap[index]) {
//         this.swap(this.getParentIndex(index), index);
//         index = this.getParentIndex(index);
//       }
//     }
  
//     // Add new element to the heap
//     addNewElement(value) {
//       this.heap.push(value);
//       this.heapifyUp(this.heap.length - 1); // Make sure to pass the current index
//     }
  
//     // Remove the root element from the heap
//     remove() {
//       if (this.heap.length === 0) return null;
//       const item = this.heap[0];
//       this.heap[0] = this.heap[this.heap.length - 1];
//       this.heap.pop();
//       this.heapifyDown(0); // Start at the root
//       return item;
//     }
  
//     // Heapify down the element at the given index
//     heapifyDown(index) {
//       while (this.hasLeftChild(index)) {
//         let largeChildIndex = this.getLeftChildIndex(index);
//         if (this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)) {
//           largeChildIndex = this.getRightChildIndex(index);
//         }
//         if (this.heap[index] > this.heap[largeChildIndex]) {
//           break;
//         } else {
//           this.swap(index, largeChildIndex);
//         }
//         index = largeChildIndex;
//       }
//     }
  
//     // Sort the array using heap sort
//     heapSort(array) {
//       const maxHeap = new Heap();
  
//       // Insert all elements into the max heap
//       array.forEach(value => {
//         maxHeap.addNewElement(value);
//       });
  
//       const sortedArray = [];
//       // Extract the maximum element from the heap
//       while (maxHeap.heap.length) {
//         sortedArray.push(maxHeap.remove());
//       }
//       return sortedArray.reverse(); // Return sorted in ascending order
//     }
  
//     // Find the kth smallest element using a max heap
//     findKthSmallest(nums, k) {
//       const maxHeap = new Heap();
//       for (let num of nums) {
//         maxHeap.addNewElement(num);
//         if (maxHeap.heap.length > k) {
//           maxHeap.remove();
//         }
//       }
//       return maxHeap.peek();
//     }
//   }
  

//   const heap = new Heap();

// // Test addNewElement and peek
// heap.addNewElement(10);
// heap.addNewElement(20);
// heap.addNewElement(15);
// heap.addNewElement(30);
// heap.addNewElement(5);

// console.log('Heap after insertions:', heap.heap); // Max Heap should be [30, 20, 15, 10, 5]
// console.log('Peek (Max element):', heap.peek()); // Should return 30

// // Test remove
// console.log('Removed element (root):', heap.remove()); // Should remove 30 (root)
// console.log('Heap after removal:', heap.heap); // New heap should be [20, 10, 15, 5]

// // Test heapSort
// const unsortedArray = [10, 20, 15, 30, 5];
// const sortedArray = heap.heapSort(unsortedArray);
// console.log('Sorted Array:', sortedArray); // Should return [5, 10, 15, 20, 30]

// // Test findKthSmallest (Find 3rd smallest)
// const nums = [10, 20, 15, 30, 5];
// const kthSmallest = heap.findKthSmallest(nums, 3);
// console.log('3rd Smallest Element:', kthSmallest); // Should return 15


// class maxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     getParentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     getLeftChildIndex(index){
//         return 2*index+1
//     }

//     getRightChildIndex(index){
//         return 2*index+2
//     }

//     getParent(index){
//         return this.heap[this.getParentIndex(index)]
//     }

//     getLeftChild(index){
//         return this.heap[this.getLeftChildIndex(index)]
//     }

//     getRightChild(index){
//         return this.heap[this.getRightChildIndex(index)]
//     }

//     hasParent(index){
//         return this.getParentIndex(index) >= 0
//     }

//     hasLeftChild(index){
//         return this.getLeftChildIndex(index) < this.heap.length
//     }

//     hasRightChild(index){
//         return this.getRightChildIndex(index) < this.heap.length
//     }

//     peek(){
//         if(this.heap.length == 0){
//             return "it is zero"
//         }

//         return this.heap[0]
//     }

//     print(){
//         console.log(this.heap)
//     }

//     swap(index1,index2){
//         let temp=this.heap[index1]
//         this.heap[index1]=this.heap[index2]
//         this.heap[index2]=temp
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index=this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length == 0){
//             return "heap is empty"
//         }

//         let value=this.heap[0]
//         this.heap[0]=this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown(0)
//         return value
//     }

//     heapifyDown(index){
//         while(this.hasLeftChild(index)){
//             let largest=this.getLeftChildIndex(index)
//             if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
//                 largest=this.getRightChildIndex(index)
//             }

//             if(this.heap[index] >= this.heap[largest]){
//                 break
//             }
//             else{
//                 this.swap(index,largest)
//             }

//             index=largest
//         }
//     }

//     heapSort(arr){
//         const m=new maxHeap()
//         for(let num of arr){
//             m.insert(num)
//         }

//         let sortedArr=[]

//         while(m.heap.length){
//             sortedArr.push(m.remove())
//         }

//         return sortedArr.reverse()
//     }

//     findKthSmallest(arr,k){
//         const m=new maxHeap()

//         for(let num of arr){
//             m.insert(num)
//             if(m.heap.length > k){
//                 m.remove()
//             }
//         }

//         return m.peek()
//     }
// }

//   const heap = new maxHeap();

// // Test addNewElement and peek
// heap.insert(10);
// heap.insert(20);
// heap.insert(15);
// heap.insert(30);
// heap.insert(5);

// console.log('Heap after insertions:', heap.heap); // Max Heap should be [30, 20, 15, 10, 5]
// console.log('Peek (Max element):', heap.peek()); // Should return 30

// // Test remove
// console.log('Removed element (root):', heap.remove()); // Should remove 30 (root)
// console.log('Heap after removal:', heap.heap); // New heap should be [20, 10, 15, 5]

// // Test heapSort
// const unsortedArray = [10, 20, 15, 30, 5];
// const sortedArray = heap.heapSort(unsortedArray);
// console.log('Sorted Array:', sortedArray); // Should return [5, 10, 15, 20, 30]

// // Test findKthSmallest (Find 3rd smallest)
// const nums = [10, 20, 15, 30, 5];
// const kthSmallest = heap.findKthSmallest(nums, 3);
// console.log('3rd Smallest Element:', kthSmallest); // Should return 15

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// class minHeap {
//     constructor() {
//         this.heap = [];
//     }

//     parentIndex(index) {
//         return Math.floor((index - 1) / 2);
//     }

//     leftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     rightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     getParent(index) {
//         return this.heap[this.parentIndex(index)];
//     }

//     leftChild(index) {
//         return this.heap[this.leftChildIndex(index)];
//     }

//     rightChild(index) {
//         return this.heap[this.rightChildIndex(index)];
//     }

//     hasParent(index) {
//         return this.parentIndex(index) >= 0;
//     }

//     hasLeftChild(index) {
//         return this.leftChildIndex(index) < this.heap.length;
//     }

//     hasRightChild(index) {
//         return this.rightChildIndex(index) < this.heap.length;
//     }

//     swap(index1, index2) {
//         let temp = this.heap[index1];
//         this.heap[index1] = this.heap[index2];
//         this.heap[index2] = temp;
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp(this.heap.length - 1);
//     }

//     heapifyUp(index) {
//         while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
//             this.swap(this.parentIndex(index), index);
//             index = this.parentIndex(index);
//         }
//     }

//     remove() {
//         if (this.heap.length == 0) {
//             return 0;
//         }

//         let value = this.heap[0];
//         this.heap[0] = this.heap[this.heap.length - 1];
//         this.heap.pop();
//         this.heapifyDown(0);
//         return value;
//     }

//     heapifyDown(index) {
//         while (this.hasLeftChild(index)) {
//             let smallest = this.leftChildIndex(index);
//             if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
//                 smallest = this.rightChildIndex(index);
//             }

//             if (this.heap[index] <= this.heap[smallest]) {
//                 break;
//             }

//             else {
//                 this.swap(index, smallest);
//             }
//             index = smallest;
//         }
//     }

//     heapSort(arr) {
//         const m = new minHeap();
//         for (let num of arr) {
//             m.insert(num);
//         }

//         let sortedArr = [];

//         while (m.heap.length) {
//             sortedArr.push(m.remove());
//         }

//         return sortedArr;
//     }

//     // Modify this method to find the k-th largest element
//     findKthLargest(arr, k) {
//         const min= new minHeap();

//         for (let num of arr) {
//             min.insert(num);
//             if (min.heap.length > k) {
//                 min.remove(); // Remove the smallest element in the heap
//             }
//         }
//         return min.peek(); // Root will be the k-th largest
//     }

//     peek() {
//         if (this.heap.length == 0) {
//             return "heap is empty";
//         }
//         return this.heap[0];
//     }

//     print() {
//         console.log(this.heap);
//     }
// }


// const heap = new minHeap();

// heap.insert(10);
// heap.insert(20);
// heap.insert(15);
// heap.insert(30);
// heap.insert(5);

// console.log('Heap after insertions:', heap.heap);  // Should print the heap structure.
// console.log('Peek (Min element):', heap.peek());  // Should print the min element (5)

// console.log('Removed element (root):', heap.remove());  // Should remove 5 (root)
// console.log('Heap after removal:', heap.heap);  // Should print the new heap.

// const unsortedArray = [10, 20, 15, 30, 5];
// const sortedArray = heap.heapSort(unsortedArray);
// console.log('Sorted Array:', sortedArray);  // Should return [5, 10, 15, 20, 30]

// const nums = [10, 20, 15, 30, 5];
// const kthLargest = heap.findKthLargest(nums, 3);  // Find 3rd largest element
// console.log('3rd Largest Element:', kthLargest);  // Should return 15


// function topKFrequentElement(arr,k){
//     let freqMap=new Map()
//     for(let num of arr){
//         freqMap.set(num,(freqMap.get(num)||0)+1)
//     }

//     let result=[]

//     for(let [num,freq] of freqMap.entries()){
//         if(freq==k){
//             result.push(num)
//         }
//     }
//     return result
// }

// const nums = [1, 1, 1, 2, 2, 3];
// const k = 1;
// console.log(topKFrequentElement(nums, k)); 

// function heapify(arr,n,i){
//     let largest=i
//     let left=2*i+1
//     let right=2*i+2

//     if(left < n && arr[left] > arr[largest]){
//         largest=left
//     }

//     if(right < n && arr[right] > arr[largest]){
//         largest=right
//     }

//     if(largest != i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }

// }


// function heapSort(arr){
//     let n=arr.length

//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i=n-1;i>0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
// }
// const arr = [10, 20, 15, 30, 5];
// console.log("Original Array:", arr);
// heapSort(arr);
// console.log("Sorted Array:", arr);