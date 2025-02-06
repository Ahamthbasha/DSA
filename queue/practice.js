//enqueue and dequeue here is linear others are constant.
// class queue{
//     constructor(){
//         this.items=[]
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//        return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length==0
//     }

//     getSize(){
//         if(this.items.length > 0){
//             return this.items.length
//         }
//         return 0
//     }

//     peek(){
//         if(this.items.length > 0){
//             return this.items[0]
//         }
//         return 0
//     }
//     display(){
//         console.log(this.items.toString())
//     }
// }

// const queue1=new queue()
// console.log(queue1.isEmpty())
// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)
// queue1.display()
// queue1.dequeue()
// queue1.display()
// console.log(queue1.peek())
// console.log(queue1.getSize())


//Making everything constant

// class queue{
//     constructor(){
//         this.items={}
//         this.rear=0
//         this.front=0
//     }
//     enqueue(element){
//         this.items[this.rear]=element
//         this.rear++
//     }
//     dequeue(){
//     const item=this.items[this.front]
//      delete this.items[this.front]
//      this.front++
//      return item
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     isEmpty(){
//         return this.rear-this.front === 0
//     }
//     getSize(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.items)
//     }
// }

// const queue2=new queue()
// queue2.enqueue(10)
// queue2.enqueue(20)
// queue2.enqueue(30)
// queue2.enqueue(40)
// queue2.print()
// console.log(queue2.dequeue())
// queue2.print()
// console.log(queue2.peek())
// console.log(queue2.isEmpty())
// console.log(queue2.getSize())


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             node.next=null
//             this.tail=node
//         }
//         this.size++
//     }
//     removeFromStart(){
//         let removeNode=this.head.value
//         if(this.size==1){
//             this.head=node
//             this.tail=node
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return removeNode
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let temp=this.head
//             let listValues=''
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }

// class linkedlistQueue{
//     constructor(){
//         this.queue=new linkedlist()
//     }
//     isEmpty(){
//        return this.queue.isEmpty()
//     }
//     getSize(){
//        return this.queue.getSize()
//     }
//     enqueue(value){
//         this.queue.append(value)
//     }
//     dequeue(){
//        return this.queue.removeFromStart()
//     }
//     peek(){
//       return  this.queue.head.value
//     }
//     print(){
//         this.queue.print()
//     }
// }

// const ll=new linkedlistQueue()
// ll.enqueue(10)
// ll.enqueue(20)
// ll.enqueue(30)
// ll.enqueue(40)
// ll.print()
// console.log(ll.dequeue())
// ll.print()
// console.log(ll.peek())
// console.log(ll.isEmpty())
// console.log(ll.getSize())


//circular queue

class circularQueue{
    constructor(size){
        this.size=size
        this.queue=new Array(size)
        this.front=-1
        this.rear=-1
    }

    isEmpty(){
        return this.front == -1
    }

    isFull(){
        return (this.rear+1)%this.size == this.front
    }

    enqueue(value){
        if(this.isFull()){
            console.log("queue is full")
            return
        }

        if(this.isEmpty()){
            this.front=0
        }

        this.rear=(this.rear+1) % this.size
        this.queue[this.rear]=value
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("it is empty")
            return
        }

        if(this.rear == this.front){
            this.front=this.rear=-1
        }

        this.front=(this.front+1) % this.size
    }

    getSize(){
        if(this.isEmpty()){
            return 0
        }

        if(this.rear >= this.front){
            return this.rear-this.front+1
        }else{
            return this.size-this.front+this.rear+1
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("it is empty")
        }
        let i=this.front
        while(true){
            console.log(this.queue[i])
            if(i == this.rear){
                break
            }
            i= (i+1) % this.size
        }
    }
} 

const queue = new circularQueue(5);  // Fixed size of 5

queue.enqueue(10);  // Adds 10
queue.enqueue(20);  // Adds 20
queue.enqueue(30);  // Adds 30
queue.enqueue(40);  // Adds 40
queue.enqueue(50);  // Adds 50

queue.print();  // Prints all elements: 10, 20, 30, 40, 50

console.log(`Size of the queue: ${queue.getSize()}`);  // Should print 5

queue.dequeue();  // Removes 10
queue.print();  // Prints: 20, 30, 40, 50

console.log(`Size of the queue: ${queue.getSize()}`);  // Should print 4

queue.enqueue(60);  // Adds 60
queue.print();  // Prints: 20, 30, 40, 50, 60 (Queue is full now)

console.log(`Size of the queue: ${queue.getSize()}`);  // Should print 5