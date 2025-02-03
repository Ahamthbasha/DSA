class maxHeap{
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
        while(index > 0 && this.heap[this.parentIndex(index)] < this.heap[index]){
            let temp=this.heap[this.parentIndex(index)]
            this.heap[this.parentIndex(index)]=this.heap[index]
            this.heap[index]=temp

            index=this.parentIndex(index)
        }
    }

    remove(){
        if(this.heap.length == 0){
            return null
        }
        
        let value=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown(0)
        return value
    }

    heapifyDown(index){
        let largest=index
        let left=this.leftChild(index)
        let right=this.rightChild(index)

        if(left < this.heap.length && this.heap[left] > this.heap[largest]){
            largest=left
        }

        if(right < this.heap.length && this.heap[right] > this.heap[largest]){
            largest=right
        }

        if(largest !== index){
            let temp=this.heap[index]
            this.heap[index]=this.heap[largest]
            this.heap[largest]=temp

            this.heapifyDown(largest)
        }
    }

    peek(){
        return this.heap[0]
    }

    print(){
        console.log(this.heap)
    }
}

const max = new maxHeap()
max.insert(100)
max.insert(10)
max.insert(5)
max.insert(1)
max.print()  // Expected output: [100, 10, 5, 1]

console.log(max.peek())  // Expected output: 100 (largest element)

const removedMax = max.remove()  // Remove the root (largest)
console.log("Removed element:", removedMax)  // Expected output: Removed element: 100
max.print()  // Expected output: [10, 1, 5]