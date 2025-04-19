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
       return this.root==null
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
            if(root.right == null){
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
        else if(root.value==value){
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
            return
        }

        if(value < root.value){
            root.left=this.deleteNode(root.left,value)
        }
        else if(value > root.value){
            root.right=this.deleteNode(root.right,value)
        }
        else{
            //leaf node
            if(!root.left && !root.right){
                return null
            }

            //one child

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
        if(num<=1){
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

    isBst(root,min=null,max=null){
        if(!root){
            return true
        }
        if((min != null && root.value < min) && (max!= null && root.value > max)){
            return false
        }

        return this.isBst(root.left,min,root.value) && this.isBst(root.left,root.value,max)
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
        if(!root){
            return "there is no root"
        }

        let result=this.inOrderTraversal(root)
        return result[result.length-k]||null
    }

    findKthSmallest(root,k){
        if(!root){
            return null
        }

        let result=this.inOrderTraversal(root)
        return result[k-1]||null
    }

    closestValue(root,target){
        if(!root){
            return null
        }

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
        if(!root){
            return null
        }

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
        if(!root){
            return null
        }

        let result=this.inOrderTraversal(root)
        let predecessor=null
        for(let i=0;i<result.length;i++){
            if(result[i]==target){
                if(i-1 >= 0){
                    predecessor=result[i-1]
                }
                break
            }
        }
        return predecessor
    }

    removeDuplicates(root){
        let unique=new Set()

        function inOrder(node){
            if(node){
            inOrder(node.left)
            unique.add(node.value)
            inOrder(node.right)
            }
        }
        inOrder(root)

        this.root=null

        unique.forEach(values=>this.insert(values))
    }

    findParent(root,target){
        if(!root || root.value == target){
            return null
        }
        let parent=null
        function inOrder(root){
            if(root){
                inOrder(root.left)
                if(root.left && root.left.value==target){
                    parent=root
                    return parent
                }
    
                if(root.right && root.right.value==target){
                    parent=root
                    return parent
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
        else if(target==root.value){
            const children={
                leftChild:root.left?root.left.value:null,
                rightChild:root.right?root.right.value:null
            }
            return children
        }
        else if(target < root.value){
            return this.findChildren(root.left,target)
        }else{
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

        if(parent.left && parent.left.value == target){
            return parent.right.value
        }

        else if(parent.right && parent.right.value == target){
            return parent.left.value
        }

        else{
            return -1
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

    findAncestor(root,target,result=[]){
        if(!root){
            return null
        }

        if(root.value==target){
            return result
        }
        result.push(root.value)

        if(target <root.value){
            return this.findAncestor(root.left,target,result)
        }
        else{
            return this.findAncestor(root.right,target,result)
        }
    }

    findDescendant(root,target,descendant=[]){
        if(!root){
            return null
        }

        if(root.value==target){
            this.collectDescendant(root,descendant)
            return descendant
        }

        if(target < root.value){
            return this.findDescendant(root.left,target,descendant)
        }else{
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
        if(!root){
            return null
        }

        let count=0

        if(root.value==target){
            if(root.left) count++
            if(root.right) count++
            return count
        }

        if(target < root.value){
            return this.findDegree(root.left,target)
        }else{
            return this.findDegree(root.right,target)
        }
    }

    findDepth(root,target){
        if(!root){
            return null
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
            }else{
                return depth
            }
        }
        return -1
    }

    findLCA(root,n1,n2){
        if(!root){
            return null
        }
        while(root){
            if(n1 < root.value && n2 < root.value){
                root=root.left
            }
            else if(n1 > root.value && root.value){
                root=root.right
            }
            else{
                return root
            }
        }
        return -1
    }

    findDistance(root,target){
        if(!root){
            return 0
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
        return -1
    }

    Path(root,target){
        if(!root){
            return null
        }
        let path=[]
        while(root){
            path.push(root.value)
            if(target < root.value){
                root=root.left
            }
            else if(target > root.value){
                root=root.right
            }else{
                break
            }
        }
        return path
    }

    findPathBetweenTwoNodes(n1,n2){
        let LCA=this.findLCA(this.root,n1,n2)
        if(!LCA){
            return []
        }
        let path1=this.Path(LCA,n1)
        let path2=this.Path(LCA,n2)

        return [...path1.reverse(),...path2.slice(1)]
    }

    findDistancBetweenTwoNodes(n1,n2){
        let LCA=this.findLCA(this.root,n1,n2)
        if(!LCA){
            return null
        }

        let distance1=this.findDistance(LCA,n1)
        let distance2=this.findDistance(LCA,n2)
        return distance1+distance2
    }

    OnlyOneChild(root){
        let result=[]
        let count=0

        function inOrder(root){
            if(root){
                if((root.left && !root.right) || (root.right && !root.left)){
                    count++
                    result.push(root.value)
                }
                inOrder(root.left)
                inOrder(root.right)
            }
        }

        inOrder(root)

        return {result,count}
    }
}

let b = new Binarysearchtree()
let b1=new Binarysearchtree()
b.insert(10);
b.insert(5);
b.insert(15);
b.insert(3);
b.insert(7);
b.insert(12);
b.insert(18);
b.insert(17);

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

//b.preOrder(b.root)
//b.inOrder(b.root)
//b.postOrder(b.root)

//BFS

// b.levelOrder()

//minimum and maximum

// console.log(b.min(b.root))
// console.log(b.max(b.root))

//deletion

// b.levelOrder()

// b.delete(5)
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
// let parent=b.findParent(b.root,7)
// console.log(parent?parent.value:null)

//find children

// console.log(b.findChildren(b.root,15))

//find leaf node

// console.log(b.findLeafNode(b.root))

//findAncestor:parent parent

// console.log(b.findAncestor(b.root,7))

//findDescendant

//console.log(b.findDescendant(b.root,5))

//findSiblings

// console.log(b.findSiblings(b.root,18))

//findDegree:No of childrens for a node

// console.log(b.findDegree(b.root,10))

//findDepth:Edges from top of the root node to 7
// console.log(b.findDepth(b.root,7))

// console.log("find path between 7 to 18",b.findPathBetweenTwoNodes(7,18))

// console.log("find distance between 7 to 18",b.findDistancBetweenTwoNodes(7,18))

console.log(b.OnlyOneChild(b.root))