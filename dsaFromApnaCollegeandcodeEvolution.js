//singly list from code evolution
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
      }
      this.size++;
    }
  
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
  
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.size--;
      return removedNode.value;
    }
  
    removeValue(value) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--;
          return value;
        }
        return null;
      }
    }
  
    search(value) {
      if (this.isEmpty()) {
        return -1;
      }
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }
  
    reverse() {
      let prev = null;
      let curr = this.head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  }
  
  const l = new LinkedList();
  
  console.log(l.isEmpty());
  l.append(50);
  l.prepend(20);
  l.append(80);
  l.insert(60, 2);
  console.log(l.getSize());
  l.print();
  l.reverse();
  l.print();
  console.log(l.search(60));
  l.removeFrom(4);
  console.log(l.getSize());
  l.print();
  l.removeValue(80);
  l.print();
  console.log(l.getSize());
  l.print();

  //singly linked list with tail implementation
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
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
        this.tail = node;
      }
      this.size++;
    }
  
    removeFromFront() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  
    removeFromEnd() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let prev = this.head;
        while (prev.next !== this.tail) {
          prev = prev.next;
        }
        prev.next = null;
        this.tail = prev;
      }
      this.size--;
      return value;
    }
  
    reverse() {
      let current = this.head;
      let prev = null;
      let next = null;
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.tail = this.head;
      this.head = prev;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  }
  

  /** Uncomment when testing only this file */
  
  //const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.print();
  console.log(list.getSize());
  list.removeFromFront();
  list.print();
  list.removeFromEnd();
  list.print();

  
  //doubly linked list from codeEvolution
  class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
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
        node.prev = this.tail;
        this.tail = node;
      }
      this.size++;
    }
  
    removeFromFront() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  
    removeFromEnd() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  
    printReverse() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.tail;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.prev;
        }
        console.log(list);
      }
    }
  }
  
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.print();
  list.printReverse();
  list.removeFromEnd();
  list.print();
  list.removeFromFront();
  list.print();

//singly linked list from apna college
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
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
//            this.head=node
//            this.tail=node
//            this.size++
//         }
//         else{
//             node.next=this.head
//             this.head=node
//             this.size++
//         }
//     }
//     append(value){
//         const node=new Node(value)      
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//             this.size++
//         }else{
//             this.tail.next=node
//             this.tail=node
//             this.size++
//         }
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else if(index === 0){
//             this.prepend(value)
//         }
//         else{
//             let prev=this.head
//             let i=0
//             while(i < index-1){
//                 prev=prev.next
//                 i++
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let temp=this.head
//             let listValues=""
//             while(temp !== null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+=null
//             console.log(listValues)
//         }
//     }
//     removeFromStart(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             this.head=this.head.next
//             this.size--
//         }
//     }
//     removeFromEnd(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let prev=this.head
//             for(let i=0;i<this.size-2;i++){
//                 prev=prev.next
//             }
//             prev.next=null
//             this.tail=prev
//             this.size--
//         }
//     }
//     search(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let temp=this.head
//             let i=0
//             while(i<this.size){
//                 if(value==temp.value){
//                     return i
//                 }
//                 temp=temp.next
//                 i++
//             }
//             return -1
//         }
//     }
//     //recursive search is O(n)
//     helper(node,key){
//         if(node==null){
//             return -1
//         }
//         if(node.value==key){
//             return 0
//         }
//         let index=this.helper(node.next,key)
//         //backtracking purpose the index we use
//         if(index==-1){
//             return -1
//         }
//         return index+1
//     }
//     recursiveSearch(key){
//         return this.helper(this.head,key)
//     }
//     //runtime is O(n)
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr != null){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.tail=this.head
//         this.head=prev
//     }
//     //remove from nth node
//     delete(n){
//         let size=0
//         let temp=this.head
//         while(temp != null){
//             temp=temp.next
//             size++
//         }
//         if(n==size){
//             this.head=this.head.next
//         }
//         let i=1
//         let iToFind=size-n
//         let prev=this.head
//         while(i < iToFind){
//             prev=prev.next
//             i++
//         }
//         prev.next=prev.next.next
//     }
//     //check the ll is palindrome
//     //1.find middle
//     middle(){
//         let slow=this.head
//         let fast=this.head
//         while(fast != null && fast.next !=null){
//             slow=slow.next //+1 step ahead
//             fast=fast.next.next //+2 step ahead
//         }
//         return slow
//     }
//     //2nd half reverse
//     checkpalindrome(){
//         if(this.head==null || this.head.next==null){
//             return true
//         }
//         //find the middle
//         let middle=this.middle()
//         //reverse the 2nd half
//         let prev=null
//         let curr=middle
//         let next
//         while(curr != null){
//         next=curr.next
//         curr.next=prev
//         prev=curr
//         curr=next
//         }
//         let right=prev
//         let left=this.head
//         //compare left and right
//         while(right != null){
//             if(left.value!=right.value){
//                 return false
//             }
//             left=left.next
//             right=right.next
//         }
//         return true
//     }
//     //check the list is cycled or looped 
//     isCycle(){
//         let slow=this.head
//         let fast=this.head
//         while(fast !== null && fast.next!==null){
//             slow=slow.next
//             fast=fast.next.next
//             if(slow==fast){
//                 return true
//             }
//         }
//         return false
//     }
//     //remove a loop or cycle in a linked list
//     removeCycle(){
//         //detect cycle is exist
//         let slow=this.head
//         let fast=this.head
//         let cycle=false
//         while(fast != null || fast.next!=null){
//             slow=slow.next
//             fast=fast.next.next
//             if(slow==fast){
//                 cycle=true
//                 break
//             }
//         }
//         if(cycle=false){
//             return "cycle is not exist"
//         }
//         //find meeting point
//         slow=this.head
//         let prev=null
//         while(slow!=fast){
//             prev=fast
//             slow=slow.next
//             fast=fast.next
//         }
//         //make reference to the null
//         prev.next=null
//     }

// }
// const list=new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(40)
// list.print()
// list.insert(30,2)
// list.print()
// list.removeFromStart()
// list.print()
// list.removeFromEnd()
// list.print()
// console.log(list.search(30))
// console.log(list.search(50))
// console.log(list.recursiveSearch(30))
// console.log(list.recursiveSearch(50))
// list.append(40)
// list.append(50)
// list.append(60)
// list.reverse()
// list.print()
// list.delete(3)
// list.print()
// list.prepend(1)
// list.append(2)
// list.append(2)
// list.append(1)
// list.print()
// console.log(list.checkpalindrome()) 
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);

// // Create a cycle for testing
// list.head.next.next.next.next = list.head.next;  // Creating a cycle

// console.log(list.isCycle())

// list.removeCycle()
// list.print()
// console.log(list.isCycle())

////////////////////////////////////////////////////////////////////////

//DOUBLY LINKED LIST
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }

// class DoublyLinkedlist{
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
//     addFirst(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//             this.size++
//         }
//         else{
//             node.next=this.head
//             this.head.prev=node
//             this.head=node
//             this.size++
//         }
//     }
//     addLast(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             node.prev=this.tail
//             this.tail=node
//         }
//         this.size++
//     }
//     removeFirst(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.size===1){
//             let value=this.head.value
//             this.head=null
//             this.tail=null
//             this.size--
//             return value
//         }else{
//             let value=this.head.value
//             this.head=this.head.next
//             this.head.prev=null
//             this.size--
//             return value
//         }
//     }
//     removeFromLast(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         const value=this.tail.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }
//         else{
//             this.tail=this.tail.prev
//             this.tail.next=null
//         }
//         this.size--
//         return value
//     }
//     reverse(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let curr=this.head
//             let prev=null
//             let next
//             while(curr != null){
//                 next=curr.next
//                 curr.next=prev
//                 curr.prev=next
//                 prev=curr
//                 curr=next
//             }
//             let temp=this.head
//             this.head=this.tail
//             this.tail=temp
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let prev=this.head
//             let listValues=""
//             while(prev !== null){
//                 listValues+=prev.value+"<-->"
//                 prev=prev.next
//             }
//             listValues+=null
//             console.log(listValues)
//         }
//     }
// }
// const list=new DoublyLinkedlist()
// list.addFirst(10)
// list.addLast(20)
// list.addLast(30)
// list.addLast(40)
// list.addLast(50)
// list.print()
// console.log(list.removeFirst())
// list.print()
// console.log(list.removeFromLast())
// list.print()
// list.reverse()
// list.print()
