// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     getSize(){
//         return this.size
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     prepend(value){
//         const node=new Node(value)

//         if(this.isEmpty()){
//             this.head=node
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

//     insert(value,index){
//         if(index < 0 || index > this.size){
//             console.log("invalid index")
//             return
//         }

//         if(index==0){
//             this.prepend(value)
//         }
//         else if(index == this.size){
//             this.append(value)
//         }
//         else{
//             const node=new Node(value)
//             let temp=this.head

//             for(let i=0;i<index-1;i++){
//                 temp=temp.next
//             }
//             node.next=temp.next
//             temp.next=node

//             this.size++
//         }
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }

//         if(this.size===1){
//             this.head=null
//             this.size--
//         }else{
//             this.head=this.head.next
//             this.size--
//         }
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }

//         if(this.size==1){
//             this.head=null
//             this.size--
//         }else{
//             let temp=this.head

//             while(temp.next.next !=null){
//                 temp=temp.next
//             }

//             temp.next=null
//             this.size--
//         }
//     }

//     removeIndex(index){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }

//         if(index < 0 || index > this.size){
//             console.log("index is invalid")
//         }
//         else if(index == 0){
//             this.head=this.head.next
//             this.size--
//         }
//         else{
//             let temp=this.head
            
//             for(let i=0;i<index-1;i++){
//                 temp=temp.next
//             }

//             temp.next=temp.next.next

//             this.size--
//         }
//     }

//     removeValue(value){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }

//         if(this.head.value == value){
//             this.head=this.head.next
//             this.size--
//             return
//         }

//         let temp=this.head

//         while(temp.next && temp.next.value != value){
//             temp=temp.next
//         }

//         if(temp.next){
//             const value=temp.next.value
//             temp.next=temp.next.next
//             this.size--
//             return value
//         }
//         console.log("no match found")
        
//     }

//     search(value){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }

//         if(this.head.value == value){
//             return 0
//         }else{
//             let temp=this.head
//             let i=0
//             while(temp != null){
//                 if(temp.value == value){
//                     return i
//                 }
//                 temp=temp.next
//                 i++
//             }
//         }

//         console.log("not found")
//     }

//     reverse(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }

//         let prev=null
//         let cur=this.head
//         let next

//         while(cur){
//             next=cur.next
//             cur.next=prev
//             prev=cur
//             cur=next
//         }

//         this.head=prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }else{
//             let temp=this.head
//             let list=''

//             while(temp != null){
//                 list += temp.value+'->'
//                 temp=temp.next
//             }
//             list+='null'
//             console.log(list)
//         }
//     }
// }

// const list=new linkedlist()

// console.log(list.isEmpty())
// console.log(list.getSize())

// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.append(60)
// list.append(70)
// list.print()

// list.insert(80,5)
// list.print()

// list.removeFromStart()
// list.print()

// list.removeFromEnd()
// list.print()

// list.removeIndex(1)
// list.print()

// list.removeValue(50)
// list.print()

// console.log(list.search(100))
// list.print()

// list.reverse()
// list.print()


//tail implementation

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
//         return this.size === 0
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
//             this.tail=node
//             node.next=null
//         }
//         this.size++
//     }

//     removeFromStart(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }

//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }

//     removeFromEnd(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//             return
//         }
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             let temp=this.head

//             while(temp.next.next != null){
//                 temp=temp.next
//             }

//             temp.next=null
//             this.tail=temp
//         }
//         this.size--
//     }

//     reverse(){
//         let prev=null
//         let cur=this.head
//         let next

//         while(cur){
//             next=cur.next
//             cur.next=prev
//             prev=cur
//             cur=next
//         }

//         this.head=this.tail
//         this.tail=prev
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }else{
//             let temp=this.head
//             let list=''

//             while(temp != null){
//                 list+=temp.value+'->'
//                 temp=temp.next
//             }
//             list+='null'
//             console.log(list)
//         }
//     }
// }
// const list=new linkedlist()

// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.append(60)
// list.append(70)

// list.print()

// list.removeFromStart()
// list.print()

// list.removeFromEnd()
// list.print()

// list.reverse()
// list.print()

//doubly linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node; // ✅ Fix: link current head's prev to new node
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail; // ✅ Fix: link new node's prev to current tail
            this.tail = node;
        }
        this.size++;
    }

    removeFromStart() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null; // ✅ Fix: new head's prev should be null
        }
        this.size--;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev; // ✅ Fix: use prev pointer instead of loop
            this.tail.next = null;
        }
        this.size--;
    }

    reverse(){
        let prev=null
        let cur=this.head
        let next

        while(cur){
            next=cur.next
            cur.next=prev
            cur.prev=next
            prev=cur
            cur=next
        }

        let temp=this.head
        this.head=this.tail
        this.tail=temp
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }

        let temp = this.head;
        let list = '';
        while (temp !== null) {
            list += temp.value + '<->';
            temp = temp.next;
        }
        list += 'null';
        console.log(list);
    }
}


const list = new DoublyLinkedList();

list.prepend(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.print(); // 10<->20<->30<->40<->50<->null

list.removeFromStart();
list.print(); // 20<->30<->40<->50<->null

list.removeFromEnd();
list.print(); // 20<->30<->40<->null
