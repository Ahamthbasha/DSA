// class Graph{
//     constructor(){
//         this.adjancylist={}
//     }

//     addVertex(vertex){
//         if(!this.adjancylist[vertex]){
//             this.adjancylist[vertex]=new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjancylist[vertex1]){
//             this.addVertex[vertex1]
//         }
//         if(!this.adjancylist[vertex2]){
//             this.addVertex[vertex2]
//         }

//         this.adjancylist[vertex1].add(vertex2)
//         this.adjancylist[vertex2].add(vertex1)
//     }

//     display(){
//         for(let vertex in this.adjancylist){
//             console.log(vertex+"=>"+[...this.adjancylist[vertex]])
//         }
//     }

//     hasEdge(vertex1,vertex2){
//         return this.adjancylist[vertex1].has(vertex2) && this.adjancylist[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//         this.adjancylist[vertex1].delete(vertex2)
//         this.adjancylist[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjancylist[vertex]){
//             return "vertex is not here"
//         }

//         for(let adjancyVertex of this.adjancylist[vertex]){
//             console.log("adjancyVertex",adjancyVertex)
//             console.log("adjancylist",this.adjancylist[vertex])
//             this.removeEdge(vertex,adjancyVertex)
//         }

//         delete this.adjancylist[vertex]
//     }

//     bfs(startingVertex){
//         let visitedVertex=new Set()
//         let queue=[startingVertex]
//         visitedVertex.add(startingVertex)

//         while(queue.length){
//             const vertex=queue.shift()

//             console.log(vertex)

//             this.adjancylist[vertex].forEach(neighbor=>{
//                 if(!visitedVertex.has(neighbor)){
//                     visitedVertex.add(neighbor)
//                     queue.push(neighbor)
//                 }
//             })
//         }
//     }

//     dfs(startingVertex){
//         let visitedVertex=new Set()

//         let stack=[startingVertex]
//         visitedVertex.add(startingVertex)

//         while(stack.length){
//             let vertex=stack.pop()

//             console.log(vertex)

//             // [...this.adjancylist[vertex]].sort().forEach(neighbor=>{
//             //     if(!visitedVertex.has(neighbor)){
//             //         visitedVertex.add(neighbor)
//             //         stack.push(neighbor)
//             //     }
//             // })

            
//             [...this.adjancylist[vertex]].sort().forEach(neighbor => {
//                 if (!visitedVertex.has(neighbor)) {
//                     visitedVertex.add(neighbor);
//                     stack.push(neighbor);
//                 }
//             });

//         }
//     }
// }

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("E")
// graph.addVertex("D")
// graph.addEdge("A","B");
// graph.addEdge("B","C");
// graph.addEdge("C","A");
// graph.addEdge("D","E")
// graph.display()
// // console.log(graph.hasEdge("A","G"))
// // graph.removeEdge("E","D")
// // console.log("After removing edges")
// // graph.display()

// // graph.removeVertex("E")
// // graph.removeVertex("A")
// // console.log("After removing the removeVertex")
// // graph.display()

// // graph.bfs("A")

// console.log("\nDFS starting from A:");
// graph.dfs("A");




// class Graph{
//     constructor(){
//         this.adjancylist={}
//     }

//     addVertex(vertex){
//         if(!this.adjancylist[vertex]){
//             this.adjancylist[vertex]=new Set()
//         }
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjancylist[vertex1]){
//             this.addVertex(vertex1)
//         }

//         if(!this.adjancylist[vertex2]){
//             this.addVertex(vertex2)
//         }

//         this.adjancylist[vertex1].add(vertex2)
//         this.adjancylist[vertex2].add(vertex1)
//     }

//     display(){
//         for(let vertex in this.adjancylist){
//             console.log(vertex +"->"+[...this.adjancylist[vertex]])
//         }
//     }

//     hasEdge(vertex1,vertex2){
//         return this.adjancylist[vertex1].has(vertex2) && this.adjancylist[vertex2].has(vertex1)
//     }

//     removeEdge(vertex1,vertex2){
//          this.adjancylist[vertex1].delete(vertex2)
//          this.adjancylist[vertex2].delete(vertex1)
//     }

//     removeVertex(vertex){
//         if(!this.adjancylist[vertex]){
//             return "there is no vertex like this"
//         }

//         for(let adjancyVertex of this.adjancylist[vertex]){
//             this.removeEdge(vertex,adjancyVertex)
//         }

//         delete this.adjancylist[vertex]
//     }

//     bfs(start) {
//         const visited = new Set();
//         const queue = [];
//         const result = [];

//         visited.add(start);
//         queue.push(start);

//         while (queue.length > 0) {
//             const vertex = queue.shift();
//             result.push(vertex);

//             // Add neighbors to the queue
//             for (let neighbor of this.adjancylist[vertex]) {
//                 if (!visited.has(neighbor)) {
//                     visited.add(neighbor);
//                     queue.push(neighbor);
//                 }
//             }
//         }

//         return result;
//     }


// }

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("E")
// graph.addVertex("D")
// graph.addEdge("A","B");
// graph.addEdge("B","C");
// graph.addEdge("C","A");
// graph.addEdge("D","E")
// graph.display()
// console.log(graph.hasEdge("A","G"))
// graph.removeEdge("E","D")
// console.log("After removing edges")
// graph.display()

// graph.removeVertex("E")
// graph.removeVertex("A")
// console.log("After removing the removeVertex")
// graph.display()

// console.log("BFS starting from vertex A: " + graph.bfs("A"));


// class Graph {
//     constructor() {
//         this.adjancylist = {};
//     }

//     addVertex(vertex) {
//         if (!this.adjancylist[vertex]) {
//             this.adjancylist[vertex] = new Set();
//         }
//     }

//     addEdge(vertex1, vertex2) {
//         if (!this.adjancylist[vertex1]) {
//             this.addVertex(vertex1);
//         }

//         if (!this.adjancylist[vertex2]) {
//             this.addVertex(vertex2);
//         }

//         this.adjancylist[vertex1].add(vertex2);
//         this.adjancylist[vertex2].add(vertex1);
//     }

//     display() {
//         for (let vertex in this.adjancylist) {
//             console.log(vertex + " -> " + [...this.adjancylist[vertex]]);
//         }
//     }

//     hasEdge(vertex1, vertex2) {
//         return this.adjancylist[vertex1].has(vertex2) && this.adjancylist[vertex2].has(vertex1);
//     }

//     removeEdge(vertex1, vertex2) {
//         this.adjancylist[vertex1].delete(vertex2);
//         this.adjancylist[vertex2].delete(vertex1);
//     }

//     removeVertex(vertex) {
//         if (!this.adjancylist[vertex]) {
//             return "There is no vertex like this";
//         }

//         for (let adjancyVertex of this.adjancylist[vertex]) {
//             this.removeEdge(vertex, adjancyVertex);
//         }

//         delete this.adjancylist[vertex];
//     }

//     bfs(start){
//         let visitedNode=new Set()
//         let queue=[start]
//         visitedNode.add(start)

//         while(queue.length){
//             let vertex=queue.shift()

//             console.log(vertex)

//             this.adjancylist[vertex].forEach(value => {
//                 if(!visitedNode.has(value)){
//                     visitedNode.add(value)
//                     queue.push(value)
//                 }
//             });
//         }
//     }
    
//     dfs(start,visitedNode=new Set()){
//         console.log(start)
//         visitedNode.add(start)

//         this.adjancylist[start].forEach(neighbor=>{
//             if(!visitedNode.has(neighbor)){
//                 this.dfs(neighbor,visitedNode)
//             }
//         })
//     }

//     bfsCycleDetection(start){
//         let visitedNode=new Set()
//         let queue=[{vertex:start,parent:null}]
//         visitedNode.add(start)

//         while(queue.length){
//             const {vertex,parent}=queue.shift()

//             for(let neighbor of this.adjancylist[vertex]){
//                 if(!visitedNode.has(neighbor)){
//                     visitedNode.add(neighbor)
//                     queue.push({vertex:neighbor,parent:vertex})
//                 }
//                 else if(neighbor != parent){
//                     console.log("cycle is detected")
//                     return
//                 }
//             }
//         }
//         console.log("no cycle detected")
//     }
    
    
// }

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// graph.addEdge("C", "A");
// graph.addEdge("D", "A");
// graph.display();

// // graph.bfs("A");
// // graph.dfs("A");

// graph.bfsCycleDetection("A")

//graph

class  Graph{
    constructor(){
        this.adjancyList={}
    }

    addVertex(vertex){
        if(!this.adjancyList[vertex]){
            this.adjancyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjancyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjancyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjancyList[vertex1].add(vertex2)
        this.adjancyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjancyList){
            console.log(vertex+"=>"+[...this.adjancyList[vertex]])
        }
    }

    hasEdge(vertex1,vertex2){
        if(this.adjancyList[vertex1] && this.adjancyList[vertex2]){
            return this.adjancyList[vertex1].has(vertex2) && this.adjancyList[vertex2].has(vertex1)
        }
        return "give correct vertex"
    }

    removeEdge(vertex1,vertex2){
        this.adjancyList[vertex1].delete(vertex2)
        this.adjancyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjancyList[vertex]){
            return "there is no vertex like that"
        }

        for(let adjancyVertex of this.adjancyList[vertex]){
            this.removeEdge(vertex,adjancyVertex)
        }

        delete this.adjancyList[vertex]
    }

    bfs(start){
        let visitedNode=new Set()
        let queue=[start]
        visitedNode.add(start)

        while(queue.length){
            let vertex=queue.shift()
            console.log(vertex)

            this.adjancyList[vertex].forEach(neighbor => {
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push(neighbor)
                }
            });
        }
    }

    dfs(start,visitedNode=new Set()){
        console.log(start)
        visitedNode.add(start)
        this.adjancyList[start].forEach(neighbor=>{
            if(!visitedNode.has(neighbor)){
                this.dfs(neighbor,visitedNode)
            }
        })
    }

    bfsCycleDetection(start){
        let visitedNode=new Set()
        let queue=[{vertex:start,parent:null}]
        visitedNode.add(start)

        while(queue.length){
            let {vertex,parent}=queue.shift()

            for(let neighbor of this.adjancyList[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push({vertex:neighbor,parent:vertex})
                }
                else if(neighbor != parent){
                    console.log("cycle is detected")
                    return 
                }
            }
        }
        console.log("no cycle detected")
    }

    dfsCycleDetection(start,visitedNode=new Set(),parent=null){
        visitedNode.add(start)

        for(let neighbor of this.adjancyList[start]){
            if(!visitedNode.has(neighbor)){
                if (this.dfsCycleDetection(neighbor, visitedNode, start)) {
                    return true; // Return true if a cycle is detected in recursion
                }
            }
            else if(neighbor !== parent){
                console.log("cycle detected")
                return true
            }
        }

        return false
    }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A","B");
graph.addEdge("B","C");
graph.addEdge("C","F");
graph.addEdge("D","E")
graph.display()

// console.log(graph.hasEdge("A","E"))

// graph.removeEdge("E","D")
// console.log("After removing edges")
// graph.display()

// graph.removeVertex("E")
// graph.removeVertex("A")
// console.log("After removing the removeVertex")
// graph.display()

// graph.bfs("A");
// graph.dfs("A");

// graph.bfsCycleDetection("A")
console.log(graph.dfsCycleDetection("A"));