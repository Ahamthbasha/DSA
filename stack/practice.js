// class stack{
//     constructor(){
//         this.item={}
//         this.top=0
//     }
//     push(element){
//         this.item[this.top]=element
//         this.top++
//     }
//     pop(){
//         this.top--
//         const item=this.item[this.top]
//         delete this.item[this.top]
//         return item
//     }
//     peek(){
//         return this.item[this.top-1]
//     }
//     isEmpty(){
//         return this.top == 0
//     }
//     getSize(){
//         return this.top
//     }
//     display(){
//         console.log(this.item)
//     }
// }

// const stack1=new stack()
// stack1.push(1)
// stack1.push(2)
// stack1.push(3)
// stack1.push(4)
// stack1.display()
// console.log(stack1.pop())
// console.log(stack1.peek())
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())

//in array

// class stack{
//     constructor(){
//         this.item=[]
//     }
//     push(element){
//         this.item.push(element)
//     }
//     pop(){
//       return  this.item.pop()
//     }
//     isEmpty(){
//         return this.item.length == 0
//     }
//     getSize(){
//         return this.item.length
//     }
//     peek(){
//         return this.item[0]
//     }
//     print(){
//         console.log(this.item.toString())
//     }
// }
// const stack1=new stack()
// stack1.push(10)
// stack1.push(20)
// stack1.push(30)
// stack1.push(40)
// stack1.print()
// console.log(stack1.pop())
// console.log(stack1.getSize())
// console.log(stack1.isEmpty())

//implement stack in linkedlist

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
//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
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
//         const removeValue=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return removeValue
//     }
//     removeFromEnd(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next.next != null){
//                 prev=prev.next
//             }
//             prev.next=null
//         }
//         this.size--
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
// const ll=new linkedlist()
// ll.prepend(10)
// ll.append(20)
// ll.append(30)
// ll.append(40)
// ll.print()
// ll.removeFromStart()
// ll.print()
// ll.removeFromEnd()
// ll.print()

// class linkedlistStack{
//     constructor(){
//         this.list=new linkedlist()
//     }

//     push(value){
//         this.list.prepend(value)
//     }

//     pop(){
//        return this.list.removeFromStart()
//     }

//     peek(){
//         return this.list.this.head.value
//     }

//     isEmpty(){
//        return this.list.isEmpty()
//     }

//     getSize(){
//         return this.list.getSize()
//     }

//     print(){
//         this.list.print()
//     }
// }

// const stack1=new linkedlistStack()
// stack1.push(10)
// stack1.push(20)
// stack1.push(30)
// stack1.push(40)
// stack1.print()
// console.log(stack1.pop())
// stack1.print()
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())
// stack1.print()