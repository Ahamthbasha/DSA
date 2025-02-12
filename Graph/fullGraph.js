// const adjancyMatrix=[
//     [0,1,0],
//     [1,0,1],
//     [0,1,0]
// ]

// console.log(adjanceyMatrix[0][1])

// const adjancyList={
//     'A':['B'],
//     'B':['A','C'],
//     'C':['A']
// }

// console.log(adjancyList['B'])

class Graph{
    constructor(){
        this.adjancylist={}
    }

    addVertex(vertex){
        if(!this.adjancylist[vertex]){
            this.adjancylist[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjancylist[vertex1]){
            this.adjancylist(vertex1)
        }
        if(!this.adjancylist[vertex2]){
            this.adjancylist[vertex2]
        }

        this.adjancylist[vertex1].add(vertex2)
        this.adjancylist[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjancylist){
            console.log(vertex+"->"+[...this.adjancylist[vertex]])
        }
    }

    hasEdge(vertex1,vertex2){
        return this.adjancylist[vertex1].has(vertex2) && this.adjancylist[vertex2].has(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjancylist[vertex1].delete(vertex2)
        this.adjancylist[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjancylist[vertex]){
            return
        }

        for(let adjancyVertex of this.adjancylist[vertex]){
            this.removeEdge(vertex,adjancyVertex)
        }

        delete this.adjancylist[vertex]
    }

    bfs(start){
        let visitedNode=new Set()
        let queue=[start]
        visitedNode.add(start)

        while(queue.length){
            let vertex=queue.shift()

            console.log(vertex)

            this.adjancylist[vertex].forEach(neighbor => {
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

        this.adjancylist[start].forEach(neighbor=>{
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
            const {vertex,parent} = queue.shift()
            for(let neighbor of this.adjancylist[vertex]){
                if(!visitedNode.has(neighbor)){
                    visitedNode.add(neighbor)
                    queue.push({vertex:neighbor,parent:vertex})
                }
                else if(neighbor != parent){
                    console.log("cycle detected")
                    return
                }
            }
        }
        console.log("No cycle detected")
    }

    dfsCycleDetection(start, visitedNode = new Set(), parent = null) {
        visitedNode.add(start);
        console.log(`Visiting: ${start}`);
    
        for (let neighbor of this.adjancylist[start]) {
            if (!visitedNode.has(neighbor)) {
                if (this.dfsCycleDetection(neighbor, visitedNode, start)) {
                    return true; 
                }
            } 
            // If the neighbor is already visited and is not the parent, a cycle is detected
            else if (neighbor !== parent) {
                console.log("Cycle detected!");
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