// class queue{
//     constructor(value){
//         this.item=[]
//     }
    
//     isEmpty(){
//         return this.item.length === 0
//     }

//     getSize(){
//         return this.item.length
//     }

//     enqueue(value){
//         this.item.push(value)
//     }

//     dequeue(){
//         this.item.shift()
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("queue is empty")
//             return
//         }
//         return this.item[0]
//     }

//     display(){
//         console.log(this.item)
//     }
// }

// const queue1=new queue()

// console.log(queue1.getSize())

// console.log(queue1.isEmpty())

// console.log(queue1.peek())

// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)

// queue1.display()

// queue1.dequeue()
// queue1.display()



//object

// class queue{
//     constructor(value){
//         this.item={}
//         this.front=0
//         this.rear=0
//     }

//     getSize(){
//         return this.rear - this.front
//     }

//     isEmpty(){
//         return this.rear - this.front == 0
//     }

//     enqueue(value){
//         this.item[this.rear] = value
//         this.rear++
//     }

//     dequeue(){
//         return delete this.item[this.front]
//         this.front++
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log('queue is empty')
//             return
//         }
//         return this.item[this.front]
//     }

//     display(){
//         console.log(this.item)
//     }
// }


// const queue1=new queue()

// console.log(queue1.getSize())

// console.log(queue1.isEmpty())

// console.log(queue1.peek())

// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)

// queue1.display()

// queue1.dequeue()
// queue1.display()

//linkedlist

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class llqueue{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     enqueue(value){
//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let temp=this.head

//             while(temp.next != null){
//                 temp=temp.next
//             }

//             temp.next=node
//             node.next=null
//         }

//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             this.head=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }

//     peek(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }
//         return this.head.value
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }

//         let temp=this.head
//         let list=''

//         while(temp){
//             list+=temp.value+'->'
//             temp=temp.next
//         }
//         list+='null'

//         console.log(list)
//     }
// }


// const queue1=new llqueue()

// console.log(queue1.getSize())

// console.log(queue1.isEmpty())

// console.log(queue1.peek())

// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)

// queue1.display()

// queue1.dequeue()
// queue1.display()