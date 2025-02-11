
class Heap{
    constructor(){
        this.heap=[]
    }

    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }
//getting the index
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getleftChildIndex(index){
        return 2*index+1
    }

    getrightChildIndex(index){
        return 2*index+2
    }
//get element
    getParent(index){
        return this.heap[this.getParentIndex(index)]
    }

    getLeftChild(index){
        return this.heap[this.getleftChildIndex(index)]
    }

    getRightChild(index){
        return this.heap[this.getrightChildIndex]
    }
//check the element

     hasParent(index){
        return this.getParentIndex(index) >= 0
     }

     hasLeftChild(index){
        return this.getleftChildIndex(index) < this.heap.length
     }

     hasRightChild(index){
        return this.getrightChildIndex(index) < this.heap.length
     }
//peek
     peek(){
        if(this.heap.length == 0){
            return null
        }

        return this.heap[0]
     }

//insert
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
//heapifyUp
    heapifyUp(){
        let index=this.heap.length-1

        while(this.hasParent(index) && this.getParent(index) < this.heap(index)){
            this.swap(this.getParentIndex(index),index)
            index=this.getParentIndex(index)
        }
    }

    remove(){
        if(this.heap.length == 0){
            return  "there is nothing to remove"
        }

        let value=this.heap[0]
        this.heap[0]=this.heap[this.heap.length-1]
        this.heap.pop()
        this.heapifyDown()
        return value
    }

    heapifyDown(){
        let index=0
        while(this.hasLeftChild(index)){
            let largeChild=this.getleftChildIndex(index)

            if(this.hasRightChild(index) && this.getRightChild(index) > this.getLeftChild(index)){
                largeChild=this.getrightChildIndex(index)
            }

            if(this.heap[index] > this.heap[largeChild]){
                break
            }
            else{
                this.swap(index,largeChild)
            }
            index=this.largeChild
        }
    }

    heapSort(arr){
        const max=new Heap()

        arr.forEach(value=>{
            max.insert(value)
        })

        const sortedArr=[]

        while(max.heap.length){
            sortedArr.push(max.remove())
        }

        return sortedArr.reverse()
    }

    findKthSmallest(nums,k){
        const max=new Heap()

        for(let num of nums){
            max.insert(num)
            if(max.heap.length > k){
                max.remove()
            }
        }
        return max.peek()
    }
}