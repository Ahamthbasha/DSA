// class minHeap{
//     constructor(){
//         this.heap=[]
//     }

//     parentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     leftChild(index){
//         return 2*index+1
//     }

//     rightChild(index){
//         return 2*index+2
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index) {
//         while (index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]) {
//             [this.heap[this.parentIndex(index)], this.heap[index]] = [this.heap[index], this.heap[this.parentIndex(index)]]
//             index = this.parentIndex(index)
//         }
//     }
    
//     print(){
//         console.log(this.heap)
//     }
// }
// const m = new minHeap();
// m.insert(20);
// m.insert(10);
// m.insert(30);
// m.insert(40);
// m.print();


// class minHeap{
//     constructor(){
//         this.heap=[]
//     }

//     parentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     leftChild(index){
//         return 2*index+1
//     }

//     rightChild(index){
//         return 2*index+1
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapify(this.heap.length-1)
//     }

//     heapify(index){
//         while(index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]){
//             let temp=this.heap[this.parentIndex(index)]
//             this.heap[this.parentIndex(index)]=this.heap[index]
//             this.heap[index]=temp

//             index=this.parentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length == 0){
//             return null
//         }
//         const root=this.heap[0]
//         this.heap[0]=this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown(0)
//         return root
//     }

//     heapifyDown(index){
//         let smallest=index
//         let left=this.leftChild(index)
//         let right=this.rightChild(index)

//         if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
//             smallest=left
//         }

//         if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
//             smallest=right
//         }

//         if(smallest !== index){
//             let temp=this.heap[index]
//             this.heap[index]=this.heap[smallest]
//             this.heap[smallest]=temp

//             this.heapifyDown(smallest)
//         }
//     }

//     peek(){
//         return this.heap[0]
//     }

//     print(){
//         console.log(this.heap)
//     }
// }

// const min=new minHeap()
// min.insert(100)
// min.insert(10)
// min.insert(5)
// min.insert(1)
// min.print()
// console.log(min.peek())

// const removedMin = min.remove();  // Remove the root (smallest)
// console.log("Removed element:", removedMin);
// min.print(); 

class minHeap{
    constructor(){
        this.heap=[]
    }

    parentIndex(index){
        return Math.floor((index-1)/2)
    }

    leftChild(index){
        return 2*index+1
    }

    rightChild(index){
        return 2*index+2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){
        while(index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]){
            let temp=this.heap[this.parentIndex(index)]
            this.heap[this.parentIndex(index)]=this.heap[index]
            this.heap[index]=temp

            index=this.parentIndex(index)
        }
    }

    remove(){
        if(this.heap.length === 0){
            return null
        }
        const value=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown(0)
        return value
    }

    heapifyDown(index){
        let smallest=index
        let left=this.leftChild(index)
        let right=this.rightChild(index)

        if(left < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest=left
        }

        if(right < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest=right
        }

        if(smallest != index){
            let temp=this.heap[index]
            this.heap[index]=this.heap[smallest]
            this.heap[smallest]=temp

            this.heapifyDown(smallest)
        }
    }

    peek(){
        return this.heap[0]
    }
    print(){
        console.log(this.heap)
    }
}

const min=new minHeap()
min.insert(100)
min.insert(10)
min.insert(5)
min.insert(1)
min.print()
console.log(min.peek())

const removedMin = min.remove();  // Remove the root (smallest)
console.log("Removed element:", removedMin);
min.print(); 