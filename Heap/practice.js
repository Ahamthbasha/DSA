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

//     heapifyUp(index){
//         while(index > 0 && this.heap[this.parentIndex(index)] > this.heap[index]){
//             let temp=this.heap[this.parentIndex(index)]
//             this.heap[this.parentIndex(index)]=this.heap[index]
//             this.heap[index]=temp

//             index=this.parentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length === 0){
//             return null
//         }
//         const value=this.heap[0]
//         this.heap[0]=this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown(0)
//         return value
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

//         if(smallest != index){
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

//     swap(index1,index2){
//         let temp=this.heap[index1]
//         this.heap[index1]=this.heap[index2]
//         this.heap[index2]=temp
//     }

//     peek(){
//         if(this.heap.length == 0){
//             return "heap is empty"
//         }

//         return this.heap[0]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index=this.heap.length-1
//         while(this.hasParent(index) && this.getParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index=this.getParentIndex(index)
//         }
//     }

//     remove(){
//         if(this.heap.length == 0){
//             return 0
//         }

//         let value=this.heap[0]

//         this.heap[0]=this.heap[this.heap.length-1]

//         this.heap.pop()

//         this.heapifyDown()
//         return value

//     }

//     heapifyDown(){
//         let index=0
//         while(this.hasLeftChild(index)){
//             let largeChild=this.getLeftChildIndex(index)

//             if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
//                 largeChild=this.getRightChildIndex(index)
//             }

//             if(this.heap[index] >= this.heap[largeChild]){
//                 break
//             }
//             this.swap(index,largeChild)
//             index=largeChild
//         }
//     }

//     heapSort(arr){
//         const max=new maxHeap()

//         arr.forEach(value=>{
//             max.insert(value)
//         })

//         let sortedArr=[]

//         while(max.heap.length){
//             sortedArr.push(max.remove())
//         }

//         return sortedArr.reverse()
//     }

//     findKthSmallest(nums,k){
//         const max=new maxHeap()
//         for(let num of nums){
//             max.insert(num)
//             if(max.heap.length > k){
//                 max.remove()
//             }
//         }
//         return max.peek()
//     }

//     print(){
//         console.log(this.heap)
//     }
// }

// const m=new maxHeap()

// m.insert(10)
// m.insert(20)
// m.insert(5)
// m.insert(30)
// m.insert(15)

// m.print()

// m.remove();   // Should remove 30, and then heapify down.
// m.print();    // Should print the heap after removing the root.

// console.log(m.heapSort([9,100,10,1]))
// console.log(m.findKthSmallest([9,100,10,1],2))


// class maxHeap{
//     constructor(){
//         this.heap=[]
//     }

//     swap(index1,index2){
//         let temp=this.heap[index1]
//         this.heap[index1]=this.heap[index2]
//         this.heap[index2]=temp
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
//         return this.getLeftChildIndex(index)< this.heap.length
//     }

//     hasRightChild(index){
//         return this.getRightChildIndex(index) < this.heap.length
//     }

//     peek(){
//         if(this.heap.length == 0){
//             return "heap is empty"
//         }

//         return this.heap[0]
//     }


//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     heapifyUp(){
//         let index=this.heap.length-1

//         while(this.hasParent(index)  && this.getParent(index) < this.heap[index]){
//             this.swap(this.getParentIndex(index),index)
//             index=this.getParentIndex(index)
//         }
//     }

//     remove(){
//         let value=this.heap[0]

//         this.heap[0]=this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown()
//         return value
//     }

//     heapifyDown(){
//         let index=0

//         while(this.hasLeftChild(index)){
//             let largeChild=this.getLeftChildIndex(index)
//             if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
//                 largeChild=this.getRightChildIndex(index)
//             }
//             if(this.heap[index] >= this.heap[largeChild]){
//                 break
//             }
//             this.swap(index,largeChild)
//             index=largeChild
//         }
//     }

//     heapSort(arr){
//         const max=new maxHeap()

//         arr.forEach(value=>{
//             max.insert(value)
//         })

//         let sortedArr=[]

//         while(max.heap.length){
//             sortedArr.push(max.remove())
//         }

//         return sortedArr.reverse()
//     }

//     findKthSmallest(arr,k){
//         let max=new maxHeap()
//         for(let num of arr){
//             max.insert(num)
//             if(max.heap.length > k){
//                 max.remove()
//             }
//         }
//         return max.peek()
//     }

//     print(){
//         console.log(this.heap)
//     }
// }

// const m=new maxHeap()

// m.insert(10)
// m.insert(20)
// m.insert(5)
// m.insert(30)
// m.insert(15)

// m.print()

// m.remove();   // Should remove 30, and then heapify down.
// m.print();    // Should print the heap after removing the root.

// console.log(m.heapSort([9,100,10,1]))
// console.log(m.findKthSmallest([9,100,10,1],1))


function heapify(arr,n,i){

    let largest=i
    let left=2*i+1
    let right=2*i+2

    if(left < n && arr[left] > arr[largest]){
        largest=left
    }

    if(right < n && arr[right] > arr[largest]){
        largest=right
    }

    if(largest != i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}

function heapSort(arr){
    let n=arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
}

const testArray = [4, 10, 3, 5, 1];
heapSort(testArray);
console.log(testArray);
