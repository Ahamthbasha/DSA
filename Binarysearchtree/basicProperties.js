class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class Bst{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root === null
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
            if(root.left === null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
//parent of the given target
        findParent(root,target){
            if(!root || root.value == target){
                return null
            }

            let parent=null
            function inOrder(node){
                if(node==null){
                    return null
                }

                inOrder(node.left)

                if(node.left && node.left.value==target){
                    parent=node
                    return 
                }

                if(node.right && node.right.value==target){
                    parent=node
                    return
                }

                inOrder(node.right)
            }
            inOrder(root)
            return parent
        }
//children of the given target
        findChildren(root,target){
            if(!root){
                return null
            }
            else if(root.value==target){
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

//siblings :children from same parent

        findSiblings(root,target){
            if(!root){
                return null
            }

            let parent=this.findParent(root,target)

            if(!parent){
                return null
            }

            if(parent.left && parent.left.value==target){
                return parent.right
            }

            if(parent.right && parent.right.value==target){
                return parent.left
            }

            return null
        }

//leaf node:do not have next value

        findLeafNode(root,result=[]){
            if(!root){
                return null
            }

            if(!root.left && !root.right){
                result.push(root.value)
            }

            this.findLeafNode(root.left,result)
            this.findLeafNode(root.right,result)
            return result
        }
//parent oda parent of the target
        findAncestor(root,target,ancestor=[]){
            if(!root){
                return []
            }
            if(root.value==target){
                return ancestor
            }
            ancestor.push(root.value)
            if(target < root.value){
                return this.findAncestor(root.left,target,ancestor)
            }else{
                return this.findAncestor(root.right,target,ancestor)
            }
        }
//descendant means child of the target
        findNode(root,target){
            if(!root){
                return null
            }

            if(root.value==target){
                return root
            }

            if(target < root.value){
                return this.findNode(root.left,target)
            }else{
                return this.findNode(root.right,target)
            }
        }

        findDescendants(node,descendants=[]){
            if(!node){
                return descendants
            }            
            this.findDescendants(node.left,descendants)
            this.findDescendants(node.right,descendants)
            descendants.push(node.value)
            return descendants
        }

        getDescendants(target){
            let targetNode=this.findNode(this.root,target)

            if(!targetNode){
                return []
            }

            return this.findDescendants(targetNode)
        }
//each node how many child which is degree
        degree(root,target){
            if(!root){
                return null
            }

            if(root.value == target){
                let count=0
                if(root.left) count++
                if(root.right) count++
                return count
            }
            if(target < root.value){
                return this.degree(root.left,target)
            }else{
                return this.degree(root.right,target)
            }
        }
//depth means no of edges

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
                }
                else{
                return depth
                }
            }
            return -1
        }

        findLCA(root, n1, n2) {
            while (root) {
                if (root.value < n1 && root.value < n2) {
                    root = root.right; // Move to the right
                } else if (root.value > n1 && root.value > n2) {
                    root = root.left; // Move to the left
                } else {
                    return root; // Found the LCA
                }
            }
            return null; // No common ancestor found
        }
    
// Find the distance from root to a specific node
        findDistance(root, target) {
            let distance = 0;
            while (root) {
                if (target < root.value) {
                    root = root.left;
                    distance++;
                } else if (target > root.value) {
                    root = root.right;
                    distance++;
                } else {
                    return distance; // Found the target
                }
            }
            return -1; // Target not found
        }
    
    // Find the path from root to a specific node
        findPath(root, target) {
            let path = [];
            while (root) {
                path.push(root.value);
                if (target < root.value) {
                    root = root.left;
                } else if (target > root.value) {
                    root = root.right;
                } else {
                    break;
                }
            }
            return path;
        }
    
// Find the path between two nodes (n1 and n2)
        findPathBetweenNodes(n1, n2) {
            const LCA = this.findLCA(this.root, n1, n2);
            if (!LCA) return [];
    
            const path1 = this.findPath(LCA, n1); // Path from LCA to n1
            const path2 = this.findPath(LCA, n2); // Path from LCA to n2
            return [...path1.reverse(), ...path2.slice(1)]; // Combine paths
        }
    
// Find the distance between two nodes (n1 and n2)
        findDistanceBetweenNodes(n1, n2) {
            const LCA = this.findLCA(this.root, n1, n2);
            if (!LCA) return -1;
    
            const distance1 = this.findDistance(LCA, n1); // Distance from LCA to n1
            const distance2 = this.findDistance(LCA, n2); // Distance from LCA to n2
    
            return distance1 + distance2; // Total distance between n1 and n2
        }

}
let bst = new Bst();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);


console.log("Path between 5 and 15:", bst.findPathBetweenNodes(7, 18))
console.log("Distance between 5 and 15:", bst.findDistanceBetweenNodes(5, 15));
//console.log(bst.findAncestor(bst.root, 7)); 
// console.log(bst.getDescendants(5)); 
// console.log(bst.degree(bst.root, 5));
// console.log(bst.degree(bst.root, 12));

//depth of the tree means no of edges
// console.log(bst.findDepth(bst.root, 5));
// console.log(bst.findDepth(bst.root, 100))
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