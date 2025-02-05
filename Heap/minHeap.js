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

//     print(){
//         console.log(this.heap)
//     }

//     buildHeap(arr){
//         this.heap=arr
//         for(let i=Math.floor(arr.length-1)/2;i>=0;i--){
//             this.heapifyDown(i)
//         }
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         while(index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]){
//             [this.heap[this.parentIndex(index)],this.heap[index]]=[this.heap[index],this.heap[this.parentIndex(index)]]
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

//         if(index < this.heap.length && this.heap[left] < this.heap[smallest]){
//             smallest=left
//         }

//         if(index < this.heap.length && this.heap[right] < this.heap[smallest]){
//             smallest=right
//         }

//         if(smallest != index){
//             let temp=this.heap[index]
//             this.heap[index]=this.heap[smallest]
//             this.heap[smallest]=temp
//             this.heapifyDown(smallest)
//         }
//     }
// }

// const min=new minHeap()
// min.buildHeap([10, 20, 5, 30, 25, 15, 40]);
// min.print(); 

// min.insert(10200)
// min.insert(1160)
// min.insert(70)
// min.insert(100)
// min.print()

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

    print(){
        console.log(this.heap)
    }

    buildHeap(arr){
        this.heap=arr
        for(let i=Math.floor(arr.length-1)/2;i>=0;i--){
            this.heapifyDown(i)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    heapifyUp(index){
        while(index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]){
            [this.heap[this.parentIndex(index)],this.heap[index]]=[this.heap[index],this.heap[this.parentIndex(index)]]
            index=this.parentIndex(index)
        }
    }

    remove(){
        if(this.heap.length == 0){
            return null
        }

        const root=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown(0)
        return root
    }

    heapifyDown(index){
        let smallest=index
        let left=this.leftChild(index)
        let right=this.rightChild(index)

        if(index < this.heap.length && this.heap[left] < this.heap[smallest]){
            smallest=left
        }

        if(index < this.heap.length && this.heap[right] < this.heap[smallest]){
            smallest=right
        }

        if(smallest != index){
            let temp=this.heap[index]
            this.heap[index]=this.heap[smallest]
            this.heap[smallest]=temp
            this.heapifyDown(smallest)
        }
    }
}

function heapSort(arr){
    const min=new minHeap()
    for(let i of arr){
        min.insert(i)
    }

    let sortedArr=[]
    while(min.heap.length > 0){
        sortedArr.push(min.remove())
    }

    return sortedArr
}

const arr2 = [10, 20, 5, 30, 25, 15, 40];
console.log("Min Heap Sorted Array:", heapSort(arr2)); 