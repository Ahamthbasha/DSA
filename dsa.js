//big oh notation

//find the time complexity of the below code
// function summation(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(summation(5))

//find the time complexity of the below code

// function summation(n){
//     return (n*(n+1))/2
// }

//find the time complexity of the below code

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){

//     }
// }

//find the time complexity of the below code

// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         for(let k=1;k<=j;k++){
            
//         }
//     }
// }


//Fibonacci sequence
//problem:Give a no 'n',find the first 'n elements of the fibonacci sequence'

// function fibonacci(n){
//     let fib=[0,1]
//     for(let i=2;i<n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// console.log(fibonacci(2))
// console.log(fibonacci(5))
// console.log(fibonacci(7))

//factorial of the given no

// function factorial(n){
//     let fact=1
//     if(n==0){
//         return 1
//     }else{
//     for(let i=1;i<=n;i++){
//         fact*=i
//     }
// }
// return fact
// }

// console.log(factorial(0))
// console.log(factorial(5))
// console.log(factorial(10))

//check prime or not

// function prime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }

// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

//optimized primality test here the below code big o notation will be O(sqrt(n))

// function prime(n){
//     if(n<2){
//         return false
//     }else{
//         for(let i=2;i<=Math.sqrt(n);i++){
//             if(n%i==0){
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

//power of two this big o notation will be O(logn)

// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }

// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(10))
// console.log(isPowerOfTwo(4))

//power of two in bitwise.Big o for this is constant O(1)

// function isPowerOfTwo(n){
//     if(n<1){
//         return false
//     }
//     return (n & (n-1))==0
// }
// console.log(isPowerOfTwo(5))
// console.log(isPowerOfTwo(10))
// console.log(isPowerOfTwo(4)) 

//fibonacci sequence using recusrion here if we go to stage by stage it increase two times.So the big o notation is O(n^2)

// function fibRecursion(n){
//     if(n<2){
//         return n
//     }
//     return fibRecursion(n-1)+fibRecursion(n-2)
// }

// console.log(fibRecursion(1))
// console.log(fibRecursion(5))
// console.log(fibRecursion(10))

//factorial of a no using recursion.Big o is O(n)

// function fact(n){
//     if(n==0){
//         return 1
//     }
//     return n*fact(n-1)
// }
// console.log(fact(5))

//linear search big o :O(n)

// function linear(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
//     return -1
// }

// console.log(linear([-5,2,10,4,6],10))


//binary search big O is:O(log n)

// function binary(arr,target){
//     let start=0
//     let end=arr.length-1
//     while(start <= end){
//         let mid=Math.floor((start+end)/2)
//         if(target == arr[mid]){
//             return mid
//         }
//         else if(target < arr[mid]){
//             end=mid-1
//         }else{
//             start=mid+1
//         }
//     }
//     return -1
// }

// console.log(binary([-5,2,4,6,10],10))
// console.log(binary([-5,2,4,6,10],6))
// console.log(binary([-5,2,4,6,10],20))

//recursive binary search big o:O(logn)

// function rbs(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }
//     let mid=Math.floor((leftIndex+rightIndex)/2)
//     if(target==arr[mid]){
//         return mid
//     }
//     if(target<arr[mid]){
//         return search(arr,target,leftIndex,mid-1)
//     }else{
//         return search(arr,target,mid+1,rightIndex)
//     }
// }
// console.log(rbs([-5,2,4,6,10],10))
// console.log(rbs([-5,2,4,6,10],6))
// console.log(rbs([-5,2,4,6,10],20))

//1.linked list class

//node class defined

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

//we need to defined linked list class

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
// }

// const list=new Linkedlist()
// console.log(list.isEmpty())
// console.log(list.getSize())

//2.linked list prepend

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node=new Node(value)//create instance
//         //handle the scenario if list is empty
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
// }

// const list=new Linkedlist()
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)

//3.linked list print

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size==0
//     }
//     getSize(){
//         return this.size
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
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }
//         else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                 listValues+=curr.value+" "
//                 curr=curr.next
//             }
//             console.log("list values",listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.print()

//4.linked list append

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//         }
//         else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("the list is empty")
//         }
//         else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                 listValues+=curr.value+" "
//                 curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.append(40)
// list.print()


//5.linked list insert

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//         }
//         else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         if(index < 0 || index > this.size){
//             return 'invalid'
//         }
//         if(index===0){
//             this.prepend(value)
//         }
//         else{
//             const node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }
//     print(value){
//         const node=new Node(value)
//             if(this.isEmpty()){
//                 console.log("the list is empty")
//             }
//             else{
//                 let curr=this.head
//                 let listValues=""
//                 while(curr){
//                     listValues+=curr.value+" "
//                     curr=curr.next
//                 }
//                 console.log(listValues)
//             }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.append(40)
// list.insert(50,3)
// list.print()


//6.linked list remove elements based on index from the node

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//         }
//         else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//     this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index < 0 || index >= this.size){
//             return "nothing"
//         }
//         let removeIndex
//         if(index===0){
//         removeIndex=this.head
//         this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeIndex=prev.next
//             prev.next=removeIndex.next
//         }
//         this.size--
//         return removeIndex.value
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("this is empty")
//         }else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                 listValues+=curr.value+" "
//                 curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.print
// list.insert(50,3)
// list.print()
// console.log(list.remove(70))
// console.log(list.remove(3))
// list.print()

//7.linkedlist remove based on index

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//         }
//         else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(index < 0 || index > this.size){
//             return "invalid"
//         }
//         if(index===0){
//             this.prepend(value)
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index < 0 || index >= this.size){
//             return "invalid"
//         }
//         let removeIndex
//         if(index===0){
//             removeIndex=this.head
//             this.head=this.head.next
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeIndex=prev.next
//             prev.next=removeIndex.next
//             this.size--
//             return removeIndex
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }
//         else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                 listValues+=curr.value+" "
//                 curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.insert(40,2)
// list.print()
// list.remove(10)
// list.remove(2)
// list.print()


//recall linked list

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(index < 0 || index > this.size){
//             return
//         }
//         if(index===0){
//             this.prepend(value)
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index < 0||index >= this.size){
//             return null
//         }
//         let removeIndex
//         if(index==0){
//             removeIndex=this.head
//             this.head=this.head.next
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i< index-1;i++){
//                 prev=prev.next
//             }
//             removeIndex=prev.next
//             prev.next=removeIndex.next
//         }
//         this.size--
//         return removeIndex
//     }
//     print(){
//         let curr=this.head
//         let listValues=""
//         while(curr){
//             listValues+=curr.value+" "
//             curr=curr.next
//         }
//         console.log(listValues)
//     }
// }
// const list = new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.insert(50,3)
// list.print()
// list.remove(3)
// list.print()

//8.linked list remove list by values

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     contstructor(){
//         this.head=null
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
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(index < 0 || index > this.size){
//             return "invalid"
//         }
//         if(index === 0){
//             this.prepend(value)
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index < 0 || index >= this.size){
//             return "invalid"
//         }
//         let removeIndex
//         if(index === 0){
//             removeIndex=this.head
//             this.head=this.head.next
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeIndex=prev.next
//             prev.next=removeIndex.next

//         }
//         this.size++
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.head.value === value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }
//         else{
//             let removeNode
//             let prev=this.head
//             while(prev.next && prev.next.value !==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return value
//             }
//             return null
//         }
//     }
//     print(){
//         let curr=this.head
//         let listValues=""
//         while(curr){
//             listValues+=curr.value+" "
//             curr=curr.next
//         }
//         console.log(listValues)
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.insert(50,3)
// list.print()
// list.remove(3)
// list.print()
// console.log(list.removeValue(60))
// list.removeValue(30)
// list.print()

//9.linked list search elements
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(index < 0 || index > this.size){
//             return "invalid"
//         }
//         if(index === 0){
//             this.prepend(value)
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index < 0 || index >= this.size){
//             return "invalid"
//         }
//         let removeIndex
//         if(index == 0){
//             removeIndex=this.head
//             this.head=this.head.next
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i < index-1;i++){
//                 prev=prev.next
//             }
//             removeIndex=prev.next
//             prev.next=removeIndex.next
//         }
//         this.size--
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.head.value == value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }
//         else{
//             let removeIndex
//             let prev=this.head
//             while(prev.next && prev.next.value !== value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 removeIndex=prev.next
//                 prev.next=removeIndex.next
//                 this.size--
//             }
//             return null
//         }
//     }
//     search(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let i=0
//             let curr=this.head
//             while(curr){
//                 if(curr.value==value){
//                     return i
//                 }
//                 curr=curr.next
//                 i++
//             }
//             return "not found"
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             return "It is empty"
//         }else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                 listValues+=curr.value+" "
//                 curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.print()
// list.insert(70,3)
// list.print()
// list.remove(3)
// list.print()
// list.removeValue(40)
// list.print()
// console.log(list.search(20))

//10.linked list reverse

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//         }
//         else{
//             let prev=this.head
//             while(prev.next){
//                 prev=prev.next
//             }
//             prev.next=node
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(index < 0 || index > this.size){
//             return "invalid index"
//         }
//         if(index === 0){
//             this.prepend(value)
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
//     remove(index){
//         if(index < 0 || index >= this.size){
//             return "invalid index"
//         }
//         if(index === 0){
//             this.head=this.head.next
//             this.size--
//         }
//         else{
//             let removeIndex
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeIndex=prev.next
//             prev.next=removeIndex.next
//             this.size--
//         }
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.head.value==value){
//             this.head=this.head.next
//             this.size--
//         }else{
//             let prev=this.head
//             let removeIndex
//             while(prev.next && prev.next.value !== value){
//                 prev=prev.next
//             }
//             if(prev.next){
//             removeIndex=prev.next
//             prev.next=removeIndex.next
//             this.size--
//             }
//         }
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         while(curr){
//             let next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     search(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let i=0
//             let curr=this.head
//             while(curr){
//                 if(curr.value == value){
//                     return i
//                 }
//                 curr=curr.next
//                 i++
//             }
//             return "no value"
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is Empty"
//         }else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                  listValues+=curr.value+" "
//                  curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.print()
// list.insert(70,3)
// list.print()
// list.remove(3)
// list.print()
// list.removeValue(40)
// list.print()
// console.log(list.search(20))
// list.reverse()
// list.print()

//11.linked list with tail implementation

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
//         }
//         else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }
//     removeFromFront(){
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
//             return "invalid index"
//         }
//         if(this.size == 0){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next !== this.tail){
//                 prev=prev.next
//             }
//             prev.next=null
//             this.tail=prev
//         }
//         this.size--
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let curr=this.head
//             let listValues=""
//             while(curr){
//                 listValues+=curr.value+" "
//                 curr=curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()
// list.removeFromFront()
// list.print()
// list.removeFromEnd()
// list.print()

//linked list by apna college

// class Node{
//     constructor(data){
//         this.data=data
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
//     //prepend time complexity is O(1) constant.
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
//     //append run time is O(1) constant 
//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }else{
//             this.tail.next=node
//             this.tail=node
//         }
//         this.size++
//     }
//     //print runtime will be O(n) linear
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }
//         let temp=this.head
//         let listValues=""
//         while(temp!=null){
//             listValues+=temp.data+"->"
//             temp=temp.next
//         }
//         listValues+="null"
//         console.log(listValues)
//     }
//     //insert run time will be O(n) linear
//     insert(value,index){
//         const node=new Node(value)
//         if(index===0){
//             this.prepend(value)
//         }
//         else{
//         let temp=this.head
//         let i=0
//         while(i < index-1){
//             temp=temp.next
//             i++
//         }
//         node.next=temp.next
//         temp.next=node
//         this.size++
//     }
//     }
//        removeFromFirst(){
//          if(this.isEmpty()){
//         return "it is invalid"
//         }
//        else{
//         this.head=this.head.next
//         this.size--
//         }
//     }
// removeFromLast(){
//     if(this.isEmpty()){
//         return "it is empty"
//     }
//     if(this.size===1){
//         this.head=null
//         this.tail=null
//         this.size--
//     }else{
//         let prev=this.head
//         for(let i=0;i<this.size-2;i++){
//             prev=prev.next
//         }
//         prev.next=null
//         this.tail=prev
//         this.size--
//     }
// }
// }
        
// const list=new Linkedlist()
// list.prepend(2)
// list.prepend(1)
// list.append(3)
// list.append(4)
// list.print()
// list.insert(5,2)
// list.print()

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
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else if(index===0){
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
//         }
//         else{
//             let temp=this.head
//             let listValues=""
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+=null
//             console.log(listValues)
//         }
//     }
//     removeFromStart(){
//         if(this.isEmpty()){
//             return "the list is empty"
//         }
//         else if(this.size === 1){
//             this.head=null
//             this.tail=null
//             this.size--
//         }
//         else{
//             this.head=this.head.next
//             this.size--
//         }
//     }
//     removeFromEnd(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else if(this.size===1){
//             this.head=null
//             this.tail=null
//             this.size--
//         }
//         else{
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
//         }
//         else{
//         let temp=this.head
//         let i=0
//         while(temp != null){
//             if(value==temp.value){
//                 return i
//             }
//             temp=temp.next
//             i++
//         }
//         return -1
//         }
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

//recalling linked list

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

//Doubly linked list

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

//singly linked list

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
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
//         }
//         else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
//             let prev=this.head
//             while(prev.next!=null){
//                 prev=prev.next
//             }
//             prev.next=node
//             node.next=null
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(index < 0 || index >this.size){
//             return "invalid index"
//         }
//         if(index==0){
//             this.prepend(value)
//         }
//         else if(index===this.size){
//             this.append(value)
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }
//     removeFromStart(){
//         let removeNode=this.head.value
//         if(this.size==1){
//             this.head=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return removeNode
//     }
//     removeFromLast(){
//         let removeNode
//         if(this.size==1){
//             this.head=null
//         }
//         else{
//             let prev=this.head
//             while(prev.next.next !=null){
//                 prev=prev.next
//             }
//             removeNode=prev.next.value
//             prev.next=null
//         }
//         this.size--
//         return removeNode
//     }
//     removeIndex(index){
//         let removedNode
//         if(index < 0 || index >= this.size){
//             return "invalid index"
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removedNode=prev.next
//             prev.next=removedNode.next
//             this.size--
//         }
//     }
//     removeValue(value){
//         let removeNode
//         if(this.head.value==value){
//             this.head=null
//         }else{
//             let prev=this.head
//             while(prev.next && prev.next.value != value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 removeNode=prev.next
//                 prev.next=removeNode.next
//             }
//         }
//         this.size--
//     }
//     search(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.head.value==value){
//             return 0
//         }
//         else{
//             let prev=this.head
//             let i=0
//             while(prev !=null){
//                 if(prev.value==value){
//                     return i
//                 }
//                 prev=prev.next
//                 i++
//             }
//             return -1
//         }
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let temp=this.head
//             let listValues=""
//             while(temp!=null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.print()
// list.insert(40,1)
// list.print()
// console.log(list.removeFromStart())
// list.print()
// console.log(list.removeFromLast())
// list.print()
// list.removeIndex(1)
// list.print()
// list.removeValue(40)
// list.print()
// console.log(list.search(20))
// list.print()
// list.reverse()
// list.print()

//singly linked list with tail implementation

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
//         return this.size==0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }
//         else{
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
//         }
//         else{
//             let prev=this.head
//             while(prev.next!=null){
//                 prev=prev.next
//             }
//             prev.next=node
//             node.next=null
//             this.tail=node
//         }
//         this.size++
//     }
//     removeFromStart(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }
//     removeFromLast(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next.next!==null){
//                 prev=prev.next
//             }
//             prev.next=null
//             this.tail=prev

//         }
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.tail=this.head
//         this.head=prev
//     }
//         print(){
//         if(this.isEmpty()){
//             return "list is Empty"
//         }
//         else{
//             let temp=this.head
//             let listValues=""
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }
// const li=new Linkedlist()
// li.prepend(10)
// li.append(20)
// li.append(30)
// li.append(40)
// li.print()
// li.removeFromStart()
// li.print()
// li.removeFromLast()
// li.print()
// li.reverse()
// li.print()

//doubly linked list

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size==0
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
//         }
//         else{
//             this.tail.next=node
//             node.next=null
//             this.tail=node
//         }
//         this.size++
//     }
//     removeFirst(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }
//     removeLast(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next.next!=null){
//                 prev=prev.next
//             }
//             prev.next=null
//             this.tail=prev
//         }
//         this.size--
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             curr.prev=next
//             prev=curr
//             curr=next
//         }
//         let temp=this.head
//         this.head=this.tail
//         this.tail=temp
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let temp=this.head
//             let listValues=""
//             while(temp!=null){
//                 listValues+=temp.value+"<->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }
// const li=new DoublyLinkedList()
// li.prepend(10)
// li.append(20)
// li.append(30)
// li.append(40)
// li.print()
// li.removeFirst()
// li.print()
// li.removeLast()
// li.print()
// li.reverse()
// li.print()

//Array to linkedlist

// class ArrToLi{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// function ArrayToList(arr){
//     if(arr.length == 0){
//         return 0
//     }
//     let head =new ArrToLi(arr[0])
//     let current=head
//     for(let i=1;i<arr.length;i++){
//         current.next=new ArrToLi(arr[i])
//         current=current.next
//     }
//     return head
// }

// console.log(ArrayToList([1,2,3,4,5]))


// let str="Hi Hello How Are You"

// str=str.split(" ")
// let arr=[]

// for(let i=0;i<str.length;i++){
//     let word = str[i]
//     let result = ""
//     for(let j=word.length-1;j>=0;j--){
//         result = result + word[j]
//         arr.push(word[j])
//     }
// }
// console.log(arr)
// let newStr=""
// let str1=""
// for(let i=0;i<str.length;i++){
//     if(str[i]==" " || str.length-1==i){
//         for(let j=str1.length-1;j>=0;j--){
//             newStr+=str1[j]
//         }
//         newStr+=" "
//         str1=""
//     }else{
//         str1+=str[i]
//     }
// }
// console.log(newStr)


//binary search

// function binarySearch(arr,target){
//     let start=0
//     let end=arr.length-1
//     while(start <= end){
//         let mid=Math.floor((start+end)/2)
//         if(target==arr[mid]){
//             return mid
//         }
//         else if(target < arr[mid]){
//             end=mid-1
//         }else{
//             start=mid+1
//         }
//     }
// }

// console.log(binarySearch([1,2,3,4,5],5))

//function recursiveBinarySearch

// function rbs(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//         let mid=Math.floor((leftIndex+rightIndex)/2)
//         if(target == arr[mid]){
//             return mid
//         }
//         else if(target < arr[mid]){
//             return search(arr,target,leftIndex,mid-1)
//         }else{
//             return search(arr,target,mid+1,rightIndex)
//         }
// }

// console.log(rbs([1,2,3,4,5],3))


//doubly Linked List

// class Node{
//     constructor(value) {
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size==0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.tail=node
//         }
//         else{
//         node.next=this.head
//         this.head=node
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
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let temp=this.head
//             let listValues=""
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             curr.prev=next
//             prev=curr
//             curr=next
//         }
//         let temp=this.head
//         this.head=this.tail
//         this.tail=temp
//     }
// }
// const li=new DoublyLinkedList()
// li.prepend(10)
// li.append(20)
// li.print()
// li.reverse()
// li.print()



// let str="Hi Hello How Are You"
// let newStr=""
// let str1=""
// for(let i=0;i<str.length;i++){
//     if(str[i]==" " || i==str.length-1){
//         //final
//         if (i === str.length - 1 && str[i] !== " ") {
//             str1 += str[i];
//         }
//         for(let j=str1.length-1;j>=0;j--){
//             newStr+=str1[j]
//         }
//         newStr+=" "
//         str1=""
//     }else{
//         str1+=str[i]
//     }
// }

// console.log(newStr)

// function binarySearch(arr,target){
//     let start=0
//     let end=arr.length-1
//     while(start <= end){
//         let mid=Math.floor((start+end)/2)
//         if(target == arr[mid]){
//             return mid
//         }
//         else if(target < end){
//             end=mid-1
//         }
//         else{
//             start=mid+1
//         }
//     }
// }
// console.log(binarySearch([1,2,3,4,5],5))

// function rbs(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }
//     let mid=Math.floor((leftIndex+rightIndex)/2)
//     if(target==arr[mid]){
//         return mid
//     }
//     else if(target < arr[mid]){
//         return search(arr,target,leftIndex,mid-1)
//     }
//     else{
//         return search(arr,target,mid+1,rightIndex)
//     }
// }
// console.log(rbs([1,2,3,4,5],5))

// function reverseString(str){
//     if(str.length < 2){
//         return str
//     }
//     let first=str[0]
//     let remaining=str.slice(1)
//     return reverseString(remaining)+first
// }
// console.log(reverseString("basha"))

// function fib(n){
//     if(n < 2){
//         return n
//     }
//     return fib(n-1)+fib(n-2)
// }
// console.log(fib(5))

// function fact(n){
//     if(n == 0){
//         return 1
//     }
//     return fact(n-1)*n
// }
// console.log(fact(5))

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size==0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }
//         else{
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
//             let prev=this.head
//             while(prev.next!=null){
//                 prev=prev.next
//             }
//             prev.next=node
//             node.next=null
//         }
//         this.size++
//     }
//     removeFromStart(){
//         if(this.size==1){
//             this.head=null
//         }
//         else{
//             this.head=this.head.next
//         }
//         this.size--
//     }
//     removeFromEnd(){
//         if(this.size==1){
//             this.head=null
//         }else{
//             let prev=this.head
//             while(prev.next.next !=null){
//                 prev=prev.next
//             }
//             prev.next=null
//         }
//         this.size--
//     }
//     insert(index,value){
//         if(index < 0 || index > this.size){
//             return "invalid index";
//         }
//         if(index==0){
//             this.prepend(value)
//         }
//         else if(index == this.size){
//             this.append(value)
//         }
//         else{
//             const node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }
//     removeIndex(index){
//         if(index <0 || index >= this.size){
//             return "invalid index"
//         }
//         let removeNode
//         if(index==0){
//             this.head=this.head.next
//             this.size--
//         }
//         else{
//             let prev=this.head
            
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             removeNode=prev.next
//             prev.next=removeNode.next
//             this.size--
//         }
//     }
//     removeValue(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.head.value==value){
//             this.head=this.head.next
//             this.size--
//         }
//         else{
//             let prev=this.head
//             let i=0
//             let removeNode
//             while(prev.next.value !=value){
//                 prev=prev.next
//                 i++
//             }
//             if(prev.next){
//                 removeNode=prev.next
//                 prev.next=removeNode.next
//                 this.size--
//                 return i
//             }
//             return -1
//         }
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let temp=this.head
//             let listValues=""
//             while(temp!=null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }
// const li=new Linkedlist()
// li.prepend(1)
// li.append(2)
// li.append(3)
// li.append(4)
// li.print()
// li.removeFromStart()
// li.removeFromEnd()
// li.print()
// li.insert(4,5)
// li.print()
// li.insert(0,0)
// li.print()
// li.removeIndex(0)
// li.print()
// li.removeIndex(2)
// li.print()
// li.removeValue(1)
// li.print()
// li.reverse()
// li.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor() {
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size==0
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
//         }
//         this.size++
//     }
//     removeFromStart(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }
//     removeFromEnd(){
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next.next!=null){
//                 prev=prev.next
//             }
//             prev.next=null
//         }
//         this.size--
//     }
//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let prev=this.head
//         let i=0
//         while(prev !== null){
//             if(prev.value==value){
//                 return i
//             }
//             prev=prev.next
//             i++
//         }
//         return -1
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//         this.tail=this.head
//         this.head=this.tail
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let prev=this.head
//             let listValues=""
//             while(prev != null){
//                 listValues+=prev.value+"->"
//                 prev=prev.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }
// const list=new LinkedList()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.print()
// list.removeFromStart()
// list.print()
// list.removeFromEnd()
// list.print()
// list.reverse()
// list.print()
// console.log(list.search(20))

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
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
//         }
//         else{
//             this.tail.next=node
//             node.next=null
//             this.tail=node
//         }
//         this.size++
//     }
//     removeStart(){
//         if(this.size===1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }
//     removeEnd(){
//         if(this.size===1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next.next!=null){
//                 prev=prev.next
//             }
//             prev.next=null
//         }
//         this.size--
//     }
//     reverse(){
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             curr.prev=next
//             prev=curr
//             curr=next
//         }
//         let temp=this.head
//         this.head=this.tail
//         this.tail=temp
        
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let listValues=""
//             let temp=this.head
//             while(temp != null){
//                 listValues+=temp.value+"<->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }
// const li=new linkedlist()
// li.prepend(10)
// li.append(20)
// li.append(30)
// li.print()
// li.reverse()
// li.print()
// li.removeStart()
// li.print()
// li.removeEnd()
// li.print()

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
//     isEmpty(){
//         return this.size==0
//     }
//     getSize(){
//         return this.size
//     }
//     append(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let prev=this.head
//             while(prev.next != null){
//                 prev=prev.next
//             }
//             prev.next=node
//             node.next=null
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let listValues=""
//             let prev=this.head
//             while(prev !=null){
//                 listValues+=prev.value+"->"
//                 prev=prev.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }

// function arr2ll(arr){
//     const list =new linkedlist()

//     for(let i=0;i<arr.length;i++){
//         list.append(arr[i])
//     }
//     return list.print()
// }

// console.log(arr2ll([1,2,3,4,5]))

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] > arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
// }while(swapped)
//     return arr
// }

// console.log(bubbleSort([1,5,-1,-8,10]))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while(j >= 0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }

// console.log(insertionSort([1,5,-1,-8,10]))

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
    
//     return arr
// }
// console.log(bubbleSort([ 8, 20, -2, 4 ,-6]))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while(j >= 0 && arr[j]>curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertionSort([ 8, 20, -2, 4 ,-6]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([ 8, 20, -2, 4 ,-6]))


// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] > arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
// }while(swapped)
//     return arr
// }

// console.log(bubbleSort([ 8, 20, -2, 4 ,-6]))

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while(j >=0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertionSort([ 8, 20, -2, 4 ,-6]))

// function quicksort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quicksort(leftArr),pivot,...quicksort(rightArr)]
// }
// console.log(quicksort([ 8, 20, -2, 4 ,-6]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }
// console.log(mergeSort([ 8, 20, -2, 4 ,-6]))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minElement=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j]){
//                 minElement=j
//             }
//         }
//         let temp=arr[minElement]
//         arr[minElement]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }

// console.log(selectionSort([ 8, 20, -2, 4 ,-6]))


// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] > arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
// }while(swapped)
//     return arr
// }

// console.log(bubbleSort([ 8, 20, -2, 4 ,-6]))

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while(j >= 0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertionSort([ 8, 20, -2, 4 ,-6]))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minElement=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minElement] > arr[j]){
//                 minElement=j
//             }
//         }
//         let temp=arr[minElement]
//         arr[minElement]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }
// console.log(selectionSort([ 8, 20, -2, 4 ,-6]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }
// console.log(quickSort([ 8, 20, -2, 4 ,-6]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }
// console.log(mergeSort([ 8, 20, -2, 4 ,-6]))

// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//         return arr
// }

// console.log(bubbleSort([ 8, 20, -2, 4 ,-6]))

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while(j >= 0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertionSort([ 8, 20, -2, 4 ,-6]))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minPos=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minPos] > arr[j]){
//                 minPos=j
//             }
//         }
//         let temp=arr[minPos]
//             arr[minPos]=arr[i]
//             arr[i]=temp
//     }
//     return arr
// }
// console.log(selectionSort([ 8, 20, -2, 4 ,-6]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < mid){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArr),mid,...quickSort(rightArr)]
// }

// console.log(quickSort([ 8, 20, -2, 4 ,-6]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }

// console.log(mergeSort([ 8, 20, -2, 4 ,-6]))

// class stack{
//     constructor(){
//         this.item=[]
//     }

//     add(value){
//         this.item.push(value)
//     }

//     remove(){
//         return this.item.pop()
//     }

//     getSize(){
//         return this.item.length
//     }

//     isEmpty(){
//         return this.item.length === 0
//     }
//     peek(){
//         return this.item[this.item.length-1]
//     }
//     print(){
//         console.log(this.item)
//     }
// }

// const stack1=new stack()
// stack1.add(10)
// stack1.add(20)
// stack1.add(30)
// stack1.add(40)
// stack1.print()
// console.log(stack1.remove())
// stack1.print()
// console.log(stack1.getSize())
// console.log(stack1.isEmpty())
// console.log(stack1.peek())

// class stack{
//     constructor(){
//         this.item={}
//         this.top=0
//     }
//     push(value){
//         this.item[this.top]=value
//         this.top++
//     }
//     pop(){
//         const value=this.item[this.top-1]
//         delete this.item[this.top-1]
//         this.top--
//         return value
//     }
//     peek(){
//         return this.item[this.top-1]
//     }
//     isEmpty(){
//         return this.top===0
//     }
//     getSize(){
//         return this.top
//     }
//     print(){
//         console.log(this.item)
//     }
// }
// const stack1=new stack()
// stack1.push(10)
// stack1.push(20)
// stack1.push(30)
// stack1.push(40)
// stack1.print()
// console.log(stack1.pop())
// stack1.print()
// console.log(stack1.peek())
// console.log(stack1.getSize())
// console.log(stack1.isEmpty())

//linkedlist implementation

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
//         const value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }
//         else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }
//     removFromEnd(){
//         let value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next.next !=null){
//                 prev=prev.next
//             }
//             value=prev.next
//             prev.next=null
//         }
//         this.size--
//         return value
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let listValues=""
//             let temp=this.head
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }

// // const ll=new linkedlist()
// // ll.prepend(10)
// // ll.prepend(20)
// // ll.prepend(30)
// // ll.prepend(40)
// // ll.append(50)
// // ll.append(60)
// // ll.print()
// // console.log(ll.isEmpty())
// // console.log(ll.getSize())
// // console.log(ll.removeFromStart())
// // ll.print()
// // console.log(ll.removFromEnd())
// // ll.print()

// class stack{
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
//         return this.list.head.value
//     }
//     getSize(){
//         return this.list.getSize()
//     }
//     isEmpty(){
//         return this.list.isEmpty()
//     }
//     print(){
//         this.list.print()
//     }
// }
// const stack1=new stack()
// stack1.push(10)
// stack1.push(20)
// stack1.push(30)
// stack1.push(40)
// stack1.print()
// console.log(stack1.pop())
// stack1.print()
// console.log(stack1.peek())
// console.log(stack1.isEmpty())
// console.log(stack1.getSize())


// class queue{
//     constructor(){
//         this.queue=[]
//     }
//     isEmpty(){
//         return this.queue.length==0
//     }
//     getSize(){
//         return this.queue.length
//     }
//     enqueue(value){
//         this.queue.push(value)
//     }
//     dequeue(){
//         return this.queue.shift()
//     }
//     peek(){
//         return this.queue[0]
//     }
//     print(){
//         console.log(this.queue)
//     }
// }

// const queue1=new queue()
// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)
// queue1.enqueue(50)
// queue1.print()
// console.log(queue1.dequeue())
// queue1.print()
// console.log(queue1.peek())
// console.log(queue1.getSize())
// console.log(queue1.isEmpty())


// class queue{
//     constructor(){
//         this.queue={}
//         this.rear=0
//         this.front=0
//     }
//     isEmpty(){
//         return this.rear - this.front === 0
//     }
//     getSize(){
//         return this.rear-this.front
//     }
//     enqueue(value){
//         this.queue[this.rear]=value
//         this.rear++
//     }
//     dequeue(){
//         const value=this.queue[this.front]
//         delete this.queue[this.front]
//         this.front++
//         return value
//     }
//     peek(){
//         return this.queue[this.front]
//     }
//     print(){
//         console.log(this.queue)
//     }
// }
// const queue1=new queue()
// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)
// queue1.print()
// console.log(queue1.dequeue())
// queue1.print()
// console.log(queue1.peek())
// console.log(queue1.getSize())
// console.log(queue1.isEmpty())

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
//         let value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
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
//             listValues+='null'
//             console.log(listValues)
//         }
//     }
// }

// class queuell{
//     constructor(){
//         this.queue=new linkedlist()
//     }
//     isEmpty(){
//      return this.queue.isEmpty()
//     }
//     getSize(){
//         return this.queue.getSize()
//     }
//     enqueue(value){
//         this.queue.append(value)
//     }
//     dequeue(){
//         return this.queue.removeFromStart()
//     }
//     peek(){
//         return this.queue.head.value
//     }
//     print(){
//         this.queue.print()
//     }
// }
// const queue1=new queuell()
// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)
// queue1.print()
// console.log(queue1.dequeue())
// queue1.print()
// console.log(queue1.peek())
// console.log(queue1.isEmpty())
// console.log(queue1.getSize())

// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }

//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index=this.hash(key)
//         const value=this.table[index]
//         this.table[index]=undefined
//         return value
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new Hashtable(50)
// table.set("name","basha")
// table.set("movie","king")
// table.display()
// console.log(table.get("name"))
// console.log(table.remove("movie"))
// table.display()
// table.set("name","ahamathbasha")//hashtable collisions
// table.display()


//handling the hashtable collisions

// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameKey=bucket.find(item => item[0] === key)
//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let sameKey=bucket.find(item => item[0]==key)
//             return sameKey[1]
//         }
//         return "the key is invalid or not in the table"
//     }

//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let sameKey=bucket.find(item => item[0] == key)
//             if(sameKey){
//                 return bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//         return "invalid key"
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashtable(10)
// table.set("name","ahamathbasha")
// table.set("mane","picture abhi baaki hai")
// table.set("jawan","ready")
// table.display()
// console.log(table.get("mane"))
// table.display()
// table.remove("jawan")
// table.display()


//five types of sorting algorithm

// function bubbleSort(arr){
//     let swapped
//     do{
//     swapped=false
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] > arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//     }
//     }while(swapped)
//     return arr
// }

// console.log(bubbleSort([ 8, 20, -2, 4 ,-6]))

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while(j >= 0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertionSort([ 8, 20, -2, 4 ,-6]))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minPos=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minPos] > arr[j]){
//                 minPos=j
//             }
//         }
//         let temp=arr[minPos]
//         arr[minPos]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }
// console.log(selectionSort([ 8, 20, -2, 4 ,-6]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// console.log(quickSort([ 8, 20, -2, 4 ,-6]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }

// console.log(mergeSort([ 8, 20, -2, 4 ,-6]))

// class stack{
//     constructor(){
//         this.item=[]
//     }
//     push(value){
//         this.item.push(value)
//     }
//     pop(){
//         return this.item.pop()
//     }
//     isEmpty(){
//         return this.item.length === 0
//     }
//     getSize(){
//         return this.item.length
//     }
//     peek(){
//         return this.item[this.item.length-1]
//     }
//     print(){
//         console.log(this.item)
//     }
// }
// const s1=new stack()
// s1.push(10)
// s1.push(20)
// s1.push(30)
// s1.push(40)
// s1.print()
// console.log(s1.pop())
// s1.print()
// console.log(s1.getSize())
// console.log(s1.isEmpty())
// console.log(s1.peek())

// class stack{
//     constructor(){
//         this.item={}
//         this.top=0
//     }
//     isEmpty(){
//         return this.top === 0
//     }
//     getSize(){
//         return this.top
//     }
//     push(value){
//         this.item[this.top]=value
//         this.top++
//     }
//     pop(){
//         const value=this.item[this.top-1]
//         delete this.item[this.top-1]
//         this.top--
//         return value
//     }
//     peek(){
//         return this.item[this.top-1]
//     }
//     print(){
//         console.log(this.item)
//     }
// }
// const s1=new stack()
// s1.push(10)
// s1.push(20)
// s1.push(30)
// s1.push(40)
// s1.print()
// console.log(s1.pop())
// s1.print()
// console.log(s1.isEmpty())
// console.log(s1.getSize())
// console.log(s1.peek())
// s1.print()

//stack linkedlist

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
//         }
//         else{
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
//         const value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }
//     removeFromEnd(){
//         if(this.size == 1){
//             this.head=null
//             this.tail=null
//         }
//         else{
//             let prev=this.head
//             while(prev.next.next != null){
//                 prev=prev.next
//             }
//             let value=prev.next
//             prev.next=null
//             this.size--
//             return value
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let listValues=""
//             let temp=this.head
//             while(temp != null){
//                 listValues+=temp.value+'->'
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }


// class stackll{
//     constructor(){
//         this.item=new linkedlist()
//     }
//     push(value){
//         this.item.prepend(value)
//     }
//     pop(){
//         return this.item.removeFromStart()
//     }
//     peek(){
//         return this.item.head.value
//     }
//     getSize(){
//         return this.item.getSize()
//     }
//     isEmpty(){
//         return this.item.isEmpty()
//     }
//     print(){
//         this.item.print()
//     }
// }
// const stack=new stackll()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.print()
// console.log(stack.pop())
// stack.print()
// console.log(stack.getSize())
// console.log(stack.isEmpty())
// stack.print()
// console.log(stack.peek())

// class queue{
//     constructor(){
//         this.item=[]
//     }
//     enqueue(value){
//         this.item.push(value)
//     }
//     dequeue(){
//         return this.item.shift()
//     }
//     getSize(){
//         return this.item.length
//     }
//     isEmpty(){
//         return this.item.length === 0
//     }
//     peek(){
//         return this.item[0]
//     }
//     print(){
//         console.log(this.item.toString())
//     }
// }

// const queue1=new queue()
// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// queue1.enqueue(40)
// queue1.print()
// console.log(queue1.dequeue())
// queue1.print()
// console.log(queue1.peek())
// console.log(queue1.isEmpty())
// console.log(queue1.getSize())

// class queue{
//     constructor(){
//         this.item={}
//         this.rear=0
//         this.front=0
//     }

//     enqueue(value){

//         this.item[this.rear]=value
//         this.rear++
//     }

//     dequeue(){
//         const value=this.item[this.front]
//         delete this.item[this.front]
//         this.front++
//         return value
//     }

//     getSize(){
//         return this.rear-this.front 
//     }

//     isEmpty(){
//         return this.rear - this.front === 0
//     }

//     peek(){
//         return this.item[this.front]
//     }

//     print(){
//         console.log(this.item)
//     }

// }
// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// q.print()
// console.log(q.peek())
// console.log(q.getSize())
// console.log(q.isEmpty())

//linked list

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.had=null
//         this.tail=null
//         this.size=0
//     }

//     getSize(){
//         return this.size
//     }

//     isEmpty(){
//         return this.size===0
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
//         const value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }

//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let temp=this.head
//             let listValues=""
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+='null'
//             console.log(listValues)
//         }
//     }
// }

// class queuell{
//     constructor(){
//         this.queue=new linkedlist()
//     }

//     enqueue(value){
//         return this.queue.append(value)
//     }

//     dequeue(){
//         return this.queue.removeFromStart()
//     }

//     peek(){
//         return this.queue.head.value
//     }

//     isEmpty(){
//         return this.queue.isEmpty()
//     }

//     getSize(){
//         return this.queue.getSize()
//     }

//     print(){
//         this.queue.print()
//     }
// }

// const ll = new queuell()
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


// class hashtable{
//     constructor(size){
//      this.table=new Array(size)
//      this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }

//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index=this.hash(key)
//         let value=this.table[index]
//         this.table[index]=undefined
//         return value
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashtable(50)
// table.set("name","basha")
// table.set("movie","om shanthi om")
// table.print()
// table.get("name")
// table.print()
// table.remove("name")
// table.print()
// table.set("mvioe","jawaan")
// table.print()

// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameKey=bucket.find(item => item[0] == key)
//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let samekey=bucket.find(item => item[0]==key)
//             return samekey[1]
//         }else{
//             return "invalid key or not found in hash table"
//         }
//     }

//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         let sameKey=bucket.find(item=> item[0]=== key)
//         if(sameKey){
//           return  bucket.splice(bucket.indexOf(sameKey),1)
//         }else{
//             return "invalid key or not found in hash table"
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashtable(50)
// table.set("name","basha")
// table.set("movie","om shanthi om")
// table.print()
// console.log(table.get("name"))
// table.print()
// console.log(table.remove("name"))
// table.print()
// table.set("mvioe","jawaan")
// table.print()


// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//     return arr
// }
// console.log(bubbleSort([ 8, 20, -2, 4 ,-6]))

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while( j >= 0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }

// console.log(insertionSort([ 8, 20, -2, 4 ,-6]))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minPos=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minPos] > arr[j]){
//                 minPos=j
//             }
//         }
//         let temp=arr[minPos]
//         arr[minPos]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }

// console.log(selectionSort([ 8, 20, -2, 4 ,-6]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// console.log(quickSort([ 8, 20, -2, 4 ,-6]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }

// console.log(mergeSort([ 8, 20, -2, 4 ,-6]))


// class stack{
//     constructor(){
//         this.stack=[]
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }

//     getSize(){
//         return this.stack.length
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){
//         return this.stack.pop()
//     }

//     peek(){
//         return this.stack[this.stack.length-1]
//     }

//     print(){
//     console.log(this.stack.toString())
//     }
// }

// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.isEmpty())
// console.log(s.getSize())
// s.print()

// class stack{
//     constructor(){
//         this.stack={}
//         this.top=0
//     }

//     push(value){
//         this.stack[this.top]=value
//         this.top++
//     }

//     pop(){
//         let value=this.stack[this.top-1]
//         delete this.stack[this.top-1]
//         this.top--
//         return value
//     }

//     peek(){
//         return this.stack[this.top-1]
//     }

//     isEmpty(){
//         return this.top == 0
//     }

//     getSize(){
//         return this.top
//     }

//     print(){
//         console.log(this.stack)
//     }
// }

// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.getSize())
// console.log(s.isEmpty())
// console.log(s.peek())
// s.print()


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
//         }
//         else{
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
//         let value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }

//     removeFromEnd(){
//         let removeNode
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             let prev=this.head
//             while(prev.next.next != null){
//                 prev=prev.next
//             }
//             removeNode=prev.next.value
//             prev.next=null
//             this.tail=prev
//         }
//         this.size--
//         return removeNode
//     }

//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         else{
//             let temp=this.head
//             let listValues=''
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+='null'
//             console.log(listValues)
//         }
//     }
// }

// class sll{
//     constructor(){
//         this.stack=new linkedlist()
//     }

//     isEmpty(){
//         return this.stack.isEmpty()
//     }

//     getSize(){
//         return this.stack.getSize()
//     }

//     push(value){
//         this.stack.prepend(value)
//     }

//     pop(){
//         return this.stack.removeFromStart()
//     }

//     peek(){
//         return this.stack.head.value
//     }

//     print(){
//         this.stack.print()
//     }
// }

// const s=new sll()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.getSize())
// console.log(s.isEmpty())
// console.log(s.peek())
// s.print()


// class queue{
//     constructor() {
//         this.queue=[]
//     }

//     isEmpty(){
//         return this.queue.length == 0
//     }

//     getSize(){
//         return this.queue.length
//     }

//     enqueue(value){
//         this.queue.push(value)
//     }

//     dequeue(){
//         return this.queue.shift()
//     }

//     peek(){
//         return this.queue[0]
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.isEmpty())
// console.log(q.getSize())
// console.log(q.peek())
// q.print()

// class queue{
//     constructor(){
//         this.queue={}
//         this.rear=0
//         this.front=0
//     }

//     enqueue(value){
//         this.queue[this.rear]=value
//         this.rear++
//     }

//     dequeue(){
//         let value=this.queue[this.front]
//         delete this.queue[this.front]
//         this.front++
//         return value
//     }

//     isEmpty(){
//         return this.rear - this.front == 0
//     }

//     getSize(){
//         return this.rear - this.front
//     }

//     peek(){
//         return this.queue[this.front]
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.isEmpty())
// console.log(q.getSize())
// console.log(q.peek())
// q.print()

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
//         return this.size == 0
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
//         let value=this.head.value
//         if(this.size===1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }

//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let listValues=''
//             let temp=this.head
//             while(temp != null){
//                 listValues+=temp.value+'->'
//                 temp=temp.next
//             }
//             listValues+='null'
//             console.log(listValues)
//         }
//     }
// }

// class queue{
//     constructor(){
//         this.queue=new linkedlist()
//     }

//     isEmpty(){
//         return this.queue.isEmpty()
//     }

//     getSize(){
//         return this.queue.getSize()
//     }

//     enqueue(value){
//         return this.queue.append(value)
//     }

//     dequeue(){
//         return this.queue.removeFromStart()
//     }

//     peek(){
//         return this.queue.head.value
//     }
    
//     print(){
//         this.queue.print()
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.isEmpty())
// console.log(q.getSize())
// console.log(q.peek())
// q.print()

// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }

//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index=this.hash(key)
//         let value=this.table[index]
//         this.table[index]=undefined
//         return value
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashtable(50)
// table.set("name","basha")
// table.set("movie","king")
// table.print()
// console.log(table.get("movie"))
// console.log(table.remove("name"))
// table.print()
// table.set("mvioe","king khan")
// table.print()

// class hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let sameKey=bucket.find(item => item[0]==key)
//             if(sameKey){
//                 sameKey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             let samekey=bucket.find(item=>item[0]==key)
//             return samekey[1]
//         }else{
//             return "key is invalid or not in table"
//         }
//     }

//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         let samekey=bucket.find(item=>item[0]===key)
//         if(samekey){
//           return  bucket.splice(bucket.indexOf(samekey),1)
//         }else{
//             return "key is invalid or not in table"
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }
// const table=new hashtable(50)
// table.set("name","basha")
// table.set("movie","king")
// table.print()
// console.log(table.get("movie"))
// console.log(table.remove("name"))
// table.print()
// table.set("mvioe","king khan")
// table.print()

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
//         return this.item[this.item.length-1]
//     }
//     print(){
//         console.log(this.item.toString())
//     }
//     pushAtBottom(data){
//         if(this.isEmpty()){
//             this.push(data)
//             return
//         }
//         let top=this.pop()
//         this.pushAtBottom(data)
//         this.push(top)
//     }
//     reverseStack(){
//         if(this.isEmpty()){
//             return
//         }
//         let top=this.pop()
//         this.reverseStack()
//         this.pushAtBottom(top)
//     }
//     reverseString(str){
//         let index=0
//         while(index < str.length){
//             this.push(str[index])
//             index++
//         }
//         let result=""
//         while(!this.isEmpty()){
//             result+=this.pop()
//         }
//         return result
//     }
// }
// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// s.pushAtBottom(50)
// s.print()
// s.reverseStack()
// s.print()

// const s2=new stack()
// console.log(s2.reverseString("abc"))


// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//             if(arr[i] > arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
//     return arr
// }

// console.log(bubbleSort([1000,7,100,-10,-1,0]))

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while (j >= 0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }
// console.log(insertionSort([1000,7,100,-10,-1,0]))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minPos=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minPos] > arr[j]){
//                 minPos=j
//             }
//         }
//         let temp=arr[minPos]
//         arr[minPos]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }
// console.log(selectionSort([1000,7,100,-10,-1,0]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// console.log(quickSort([1000,7,100,-10,-1,0]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)

//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }

// console.log(mergeSort([1000,7,100,-10,-1,0]))

// class hashtable{
//     constructor(value){
//         this.table=new Array(value)
//         this.value=value
//     }

//     isEmpty(){
//       return this.table.length === 0
//     }

//     getSize(){
//         return this.table.length
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.value
//     }

//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }

//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index=this.hash(key)
//         let value=this.table[index]
//         this.table[index]=undefined
//         return value
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashtable(50)

// table.set("movie","om shanthi om")
// table.set("name","ahamathbasha")
// table.print()
// console.log(table.get("name"))
// table.print()
// console.log(table.isEmpty())
// console.log(table.getSize())
// console.log(table.remove("name"))
// table.print()
// table.print()

//hashtablecollisions

// class hashtable{
//     constructor(value){
//         this.table=new Array(value)
//         this.value=value
//     }

//     isEmpty(){
//         return this.table.length === 0
//     }

//     getSize(){
//         return this.table.length
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.value
//     }

//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let samekey=bucket.find(item => item[0]==key)
//             if(samekey){
//                 samekey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         let sameKey=bucket.find(item => item[0]==key)
//         if(sameKey){
//             return sameKey[1]
//         }else{
//             return "invalid key or not in the table"
//         }
//     }

//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         let samekey=bucket.find(item=>item[0]==key)
//         if(samekey){
//            return bucket.splice(bucket.indexOf(samekey),1)
//         }else{
//             return "invalid key or not in the table"
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table=new hashtable(50)

// table.set("movie","om shanthi om")
// table.set("name","ahamathbasha")
// table.print()
// console.log(table.get("name"))
// table.print()
// console.log(table.isEmpty())
// console.log(table.getSize())
// console.log(table.remove("name"))
// table.print()
// table.set("meiov","happy new year")
// table.print()


// class stack{
//     constructor(){
//         this.stack=[]
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){
//         return this.stack.pop()
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }

//     getSize(){
//         return this.stack.length
//     }

//     peek(){
//         return this.stack[this.stack.length-1]
//     }

//     print(){
//         console.log(this.stack)
//     }
// }

// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.getSize())
// console.log(s.isEmpty())
// s.print()

// class stack{
//     constructor(){
//         this.stack={}
//         this.top=0
//     }

//     isEmpty(){
//         return this.top === 0
//     }

//     getSize(){
//         return this.top
//     }

//     push(value){
//         this.stack[this.top]=value
//         this.top++
//     }

//     pop(){
//         const value=this.stack[this.top-1]
//         delete this.stack[this.top-1]
//         this.top--
//         return value
//     }

//     peek(){
//         return this.stack[this.top-1]
//     }

//     print(){
//         console.log(this.stack)
//     }
// }
// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.getSize())
// console.log(s.isEmpty())
// s.print()


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
//         return this.size == 0
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
//         const value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
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
//             let value=prev.next
//             prev.next=null
//             this.tail=prev
//             this.size--
//             return value
//         }
//     }

//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let listValues=""
//             let temp=this.head
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+="null"
//             console.log(listValues)
//         }
//     }
// }

// class stack{
//     constructor(){
//         this.stack=new linkedlist()
//     }

//     push(value){
//         this.stack.prepend(value)
//     }

//     pop(){
//         return this.stack.removeFromStart()
//     }

//     isEmpty(){
//         return this.stack.isEmpty()
//     }

//     getSize(){
//         return this.stack.getSize()
//     }

//     peek(){
//         return this.stack.head.value
//     }

//     print(){
//         this.stack.print()
//     }
// }
// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.getSize())
// console.log(s.isEmpty())
// s.print()


// class queue{
//     constructor(){
//         this.queue=[]
//     }

//     isEmpty(){
//         return this.queue.length == 0
//     }

//     getSize(){
//         return this.queue.length
//     }

//     enqueue(value){
//         this.queue.push(value)
//     }

//     dequeue(){
//         return this.queue.shift()
//     }

//     peek(){
//         return this.queue[0]
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(q.isEmpty())
// console.log(q.getSize())
// q.print()

// class queue{
//     constructor(){
//         this.queue={}
//         this.rear=0
//         this.front=0
//     }

//     isEmpty(){
//         return this.rear-this.front === 0
//     }

//     getSize(){
//         return this.rear-this.front
//     }

//     enqueue(value){
//         this.queue[this.rear]=value
//         this.rear++
//     }

//     dequeue(){
//        let value = this.queue[this.front]
//        delete this.queue[this.front]
//        this.front++
//        return value
//     }

//     peek(){
//         return this.queue[this.front]
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(q.isEmpty())
// console.log(q.getSize())
// q.print()


// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor() {
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
//         let value=this.head.value
//         if(this.size === 1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }

//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let listValues=""
//             let temp=this.head
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+='null'
//             console.log(listValues)
//         }
//     }
// }

// class queue{
//     constructor(){
//         this.queue=new linkedlist()
//     }

//     isEmpty(){
//         return this.queue.isEmpty()
//     }

//     getSize(){
//         return this.queue.getSize()
//     }

//     enqueue(value){
//         this.queue.append(value)
//     }

//     dequeue(){
//         return this.queue.removeFromStart()
//     }

//     peek(){
//         return this.queue.head.value
//     }

//     print(){
//         this.queue.print()
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(q.isEmpty())
// console.log(q.getSize())
// q.print()


// function bubbleSort(arr){
//     let swapped
//     do{
//         swapped=false
//         for(let i=0;i<arr.length-1;i++){
//         if(arr[i] > arr[i+1]){
//             let temp=arr[i]
//             arr[i]=arr[i+1]
//             arr[i+1]=temp
//             swapped=true
//         }
//         }
//     }while(swapped)
//         return arr
// }

// console.log(bubbleSort([1000,-10,-1,0,199,100]))

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let curr=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j] > curr){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=curr
//     }
//     return arr
// }

// console.log(insertionSort([1000,-10,-1,0,199,100]))

// function selectionSort(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minPos=i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minPos] > arr[j]){
//                 minPos=j
//             }
//         }
//         let temp=arr[minPos]
//         arr[minPos]=arr[i]
//         arr[i]=temp
//     }
//     return arr
// }
// console.log(selectionSort([1000,-10,-1,0,199,100]))

// function quickSort(arr){
//     if(arr.length < 2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i] < pivot){
//             leftArr.push(arr[i])
//         }else{
//             rightArr.push(arr[i])
//         }
//     }

//     return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }

// console.log(quickSort([1000,-10,-1,0,199,100]))

// function mergeSort(arr){
//     if(arr.length < 2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }

// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] < rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }
// console.log(mergeSort([1000,-10,-1,0,199,100]))


// class stack{
//     constructor(){
//         this.stack=[]
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){
//         return this.stack.pop()
//     }

//     peek(){
//         return this.stack[this.stack.length-1]
//     }

//     isEmpty(){
//         return this.stack.length == 0
//     }

//     getSize(){
//         return this.stack.length
//     }

//     print(){
//         console.log(this.stack)
//     }
// }

// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.isEmpty())
// console.log(s.getSize())
// s.print()


// class stack{
//     constructor(){
//         this.stack={}
//         this.top=0
//     }

//     push(value){
//         this.stack[this.top]=value
//         this.top++
//     }

//     pop(){
//         let value=this.stack[this.top-1]
//         delete this.stack[this.top-1]
//         this.top--
//         return value
//     }

//     peek(){
//         return this.stack[this.top-1]
//     }

//     isEmpty(){
//         return this.top == 0
//     }

//     getSize(){
//         return this.top
//     }

//     print(){
//         console.log(this.stack)
//     }
// }


// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.isEmpty())
// console.log(s.getSize())
// s.print()


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

//     removeFromStart(){
//         let value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }

//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let listValues=""
//             let temp=this.head
//             while(temp!=null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+='null'
//             console.log(listValues)
//         }
//     }
// }

// class stack{
//     constructor(){
//         this.stack=new linkedlist()
//     }

//     push(value){
//         this.stack.prepend(value)
//     }

//     pop(){
//         return this.stack.removeFromStart()
//     }

//     peek(){
//         return this.stack.head.value
//     }

//     isEmpty(){
//         return this.stack.isEmpty()
//     }

//     getSize(){
//         return this.stack.getSize()
//     }

//     print(){
//        this.stack.print()
//     }
// }

// const s=new stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log(s.pop())
// console.log(s.peek())
// console.log(s.isEmpty())
// console.log(s.getSize())
// s.print()


// class queue{
//     constructor(){
//         this.queue=[]
//     }

//     enqueue(value){
//         this.queue.push(value)
//     }

//     dequeue(){
//         return this.queue.shift()
//     }

//     peek(){
//         return this.queue[0]
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }

//     getSize(){
//         return this.queue.length
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(q.isEmpty())
// console.log(q.getSize())
// q.print()

// class queue{
//     constructor(){
//         this.queue={}
//         this.rear=0
//         this.front=0
//     }

//     enqueue(value){
//         this.queue[this.rear]=value
//         this.rear++
//     }

//     dequeue(){
//         let value=this.queue[this.front]
//         delete this.queue[this.front]
//         this.front++
//         return value
//     }

//     peek(){
//         return this.queue[this.front]
//     }

//     isEmpty(){
//         return this.rear-this.front === 0
//     }

//     getSize(){
//         return this.rear-this.front
//     }

//     print(){
//         console.log(this.queue)
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(q.isEmpty())
// console.log(q.getSize())
// q.print()


// class Node{
//     constructor(value) {
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
//         let value=this.head.value
//         if(this.size==1){
//             this.head=null
//             this.tail=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }

//     print(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }else{
//             let listValues=""
//             let temp=this.head
//             while(temp != null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+=null
//             console.log(listValues)
//         }
//     }
// }

// class queue{
//     constructor(){
//         this.queue=new linkedlist()
//     }

//     enqueue(value){
//         this.queue.append(value)
//     }

//     dequeue(){
//         return this.queue.removeFromStart()
//     }

//     peek(){
//         return this.queue.head.value
//     }

//     getSize(){
//         return this.queue.getSize()
//     }

//     isEmpty(){
//         return this.queue.isEmpty()
//     }

//     print(){
//         this.queue.print()
//     }
// }

// const q=new queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log(q.dequeue())
// console.log(q.peek())
// console.log(q.isEmpty())
// console.log(q.getSize())
// q.print()


// class hashtable{
//     constructor(value){
//         this.table=new Array(value)
//         this.value=value
//     }

//     isEmpty(){
//         return this.table.length === 0
//     }

//     getSize(){
//         return this.table.length
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.value
//     }

//     set(key,value){
//         let index=this.hash(key)
//         this.table[index]=value
//     }

//     get(key){
//         let index=this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         let index=this.hash(key)
//         let value=this.table[index]
//         this.table[index]=undefined
//         return value
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const t=new hashtable(50)
// t.set("name","basha")
// t.set("movie","yes boss")

// t.print()
// console.log(t.get("name"))
// console.log(t.remove("name"))
// t.print()
// console.log(t.isEmpty())
// console.log(t.getSize())


//hashtable collisions

// class hashtable{
//     constructor(value){
//         this.table=new Array(value)
//         this.value=value
//     }

//     isEmpty(){
//         return this.table.length === 0
//     }

//     getSize(){
//         return this.table.filter(item =>item !== undefined).length
//     }

//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.value
//     }

//     set(key,value){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let samekey=bucket.find(item => item[0] == key)
//             if(samekey){
//                 samekey[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.table[key]
//         let bucket=this.table[index]
//         if(bucket){
//             let sameKey=bucket.find(item=>item[0]==key)
//                 if(sameKey){
//                     return sameKey[1]
//                 }
//             }
//             return "invalid key or key is not in table"
//         }
    

//     remove(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         let samekey=bucket.find(item => item[0]==key)
//         if(samekey){
//            return bucket.splice(bucket.indexOf(samekey),1)
//         }else{
//             return "invalid key or key is not in hashtable"
//         }
//     }

//     print(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const t=new hashtable(50)
// t.set("name","basha")
// t.set("movie","yes boss")

// t.print()
// console.log(t.get("name"))
// console.log(t.remove("name"))
// t.print()
// console.log(t.isEmpty())
// console.log(t.getSize())
// t.set("mevio","king")
// t.print()

// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left === null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right === null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             return this.search(root.left,value)
//         }else{
//             return this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     BFS(){
//         if(this.isEmpty()){
//             return
//         }
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let cur=queue.shift()
//             if(cur){
//             console.log(cur.value)
//             if(cur.left){
//                 queue.push(cur.left)
//             }
//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.deleteNode(this.root,value)
//     }

//     deleteNode(root,value){
//         if(root == null){
//             return null
//         }

//         if(value < root.value){
//             root.left=this.deleteNode(root.left,value)
//         }
//         else if(value > root.value){
//             root.right=this.deleteNode(root.right,value)
//         }else{
//             //leaf node
//             if(!root.left && !root.right){
//                 return null
//             }

//             //one child

//             if(!root.left){
//                 return root.right
//             }
//             else if(!root.right){
//                 return root.left
//             }
//             //root node
//             root.value=this.min(root.right)
//             root.right=this.deleteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst=new Binarysearchtree()
// console.log("it is empty?",bst.isEmpty())
// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,20))

//bst.preOrder(bst.root)
 //bst.inOrder(bst.root)
 //bst.postOrder(bst.root)

//bst.BFS()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.BFS()
// bst.delete(3)
// bst.BFS()
// bst.delete(15)
// bst.BFS()
// bst.delete(10)
// bst.BFS()


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
//         if(this.heap.length == null){
//             return null
//         }
//         let value=this.heap[0]
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

//     print(){
//         console.log(this.heap)
//     }
// }

// const min=new minHeap()
// min.insert(10200)
// min.insert(1160)
// min.insert(70)
// min.insert(100)
// min.print()

// const removedMin = min.remove();  // Remove the root (smallest)
// console.log("Removed element:", removedMin);
// min.print(); 

// class maxHeap{
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

//     peek(){
//         return this.heap[0]
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp(this.heap.length-1)
//     }

//     heapifyUp(index){
//         while(index > 0 && this.heap[this.parentIndex(index)] < this.heap[index]){
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
//         let value=this.heap[0]
//         this.heap[0]=this.heap[this.heap.length-1]
//         this.heap.pop()
//         this.heapifyDown(0)
//         return value
//     }

//     heapifyDown(index){
//         let largest=index
//         let left=this.leftChild(index)
//         let right=this.rightChild(index)

//         if(left < this.heap.length && this.heap[left] > this.heap[largest]){
//             largest=left
//         }

//         if(right < this.heap.length && this.heap[right] > this.heap[largest]){
//             largest=right
//         }

//         if(largest !== index){
//             let temp=this.heap[index]
//             this.heap[index]=this.heap[largest]
//             this.heap[largest]=temp

//             this.heapifyDown(largest)
//         }
//     }
// }

// const max = new maxHeap()
// max.insert(100)
// max.insert(10)
// max.insert(5)
// max.insert(1)
// max.print()  // Expected output: [100, 10, 5, 1]

// console.log(max.peek())  // Expected output: 100 (largest element)

// const removedMax = max.remove()  // Remove the root (largest)
// console.log("Removed element:", removedMax)  // Expected output: Removed element: 100
// max.print()  // Expected output: [10, 1, 5]


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// class Binarysearchtree{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root == null
//     }

//     insert(value){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.root=node
//         }else{
//             this.insertNode(this.root,node)
//         }
//     }

//     insertNode(root,node){
//         if(node.value < root.value){
//             if(root.left == null){
//                 root.left=node
//             }else{
//                 this.insertNode(root.left,node)
//             }
//         }else{
//             if(root.right==null){
//                 root.right=node
//             }else{
//                 this.insertNode(root.right,node)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false
//         }
//         else if(root.value == value){
//             return true
//         }
//         else if(value < root.value){
//             this.search(root.left,value)
//         }
//         else{
//             this.search(root.right,value)
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value)
//             this.inOrder(root.right)
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//             this.postOrder(root.right)
//             console.log(root.value)
//         }
//     }

//     BFS(){
//         const queue=[]
//         queue.push(this.root)
//         while(queue.length){
//             let cur=queue.shift()
//             if(cur){
//                 console.log(cur.value)
//             }
//             if(cur.left){
//                 queue.push(cur.left)
//             }
//             if(cur.right){
//                 queue.push(cur.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(value){
//         this.root=this.delelteNode(this.root,value)
//     }

//     delelteNode(root,value){
//         if(root === null){
//             return null
//         }

//         if(value < root.value){
//             root.left=this.delelteNode(root.left,value)
//         }

//         else if(value > root.value){
//             root.right=this.delelteNode(root.right,value)
//         }
//         else{
//             //leaf
//             if(!root.left && !root.right){
//                 return null
//             }

//             //one child
//             if(!root.left){
//                 return root.right
//             }
//             if(!root.right){
//                 return root.left
//             }

//             root.value=this.min(root.right)
//             root.right=this.delelteNode(root.right,root.value)
//         }
//         return root
//     }
// }

// const bst=new Binarysearchtree()

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)

// bst.search(bst.root,60)
// bst.search(bst.root,10)

//bst.preOrder(bst.root)
//bst.postOrder(bst.root)
//bst.inOrder(bst.root)

//bst.BFS()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

// bst.delete(3)
//bst.delete(15)
// bst.delete(10)
// bst.BFS()


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

//     build(arr){
//         this.heap=arr.slice()
//         for(let i=Math.floor((arr.length-1)/2);i>=0;i--){
//             this.heapifyDown(i)
//         }
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
//         if(this.heap.length==0){
//             return null
//         }

//         let value=this.heap[0]

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
// }


// function heapSort(arr){
//     const min2=new minHeap()

//     for(let i of arr){
//         min2.insert(i)
//     }

//     let sortedArr=[]
//     while(min2.heap.length > 0){
//         sortedArr.push(min2.remove())
//     }

//     return sortedArr

// }
// const min=new minHeap()
// // min.insert(10200)
// // min.insert(1160)
// // min.insert(70)
// // min.insert(100)
// // min.print()

// // const removedMin = min.remove();  // Remove the root (smallest)
// // console.log("Removed element:", removedMin);
// // min.print(); 

// // const arr2 = [10, 20, 5, 30, 25, 15, 40];
// // min.build(arr2)
// // min.print()
// const arr2 = [10, 20, 5, 30, 25, 15, 40];
// console.log("Min Heap Sorted Array:", heapSort(arr2)); 

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

    build(arr){
        this.heap=arr.slice()
        for(let i=Math.floor((arr.length-1)/2);i>=0;i--){
            this.heapifyDown(i)
        }
    }

    print(){
        console.log(this.heap)
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
        if(this.heap.length==0){
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

        if(largest != index){
            let temp=this.heap[index]
            this.heap[index]=this.heap[largest]
            this.heap[largest]=temp

            this.heapifyDown(largest)
        }
    }

    peek(){
        return this.heap[0]
    }

}

function heapSort(arr){
    const max=new maxHeap()

    for(let i of arr){
        max.insert(i)
    }


    let sortedArr=[]
    while(max.heap.length > 0){
        sortedArr.push(max.remove())
    }

    return sortedArr.reverse()
}

const max=new maxHeap()
// max.insert(100)
// max.insert(10)
// max.insert(5)
// max.insert(1)
// max.print()  // Expected output: [100, 10, 5, 1]

// console.log(max.peek())  // Expected output: 100 (largest element)

// const removedMax = max.remove()  // Remove the root (largest)
// console.log("Removed element:", removedMax)  // Expected output: Removed element: 100
// max.print()  // Expected output: [10, 1, 5]
// const arr = [10, 20, 5, 30, 25, 15, 40];

// max.build(arr)
// max.print()
// console.log("Original Array:", arr);
// const sortedArray = heapSort(arr);
// console.log("Sorted Array:", sortedArray);


class Node{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}

class trie{
    constructor(){
        this.root=new Node()
    }

    insert(word){
        let currentNode=this.root

        for(let char of word){
            if(!currentNode.children[char]){
                currentNode.children[char]=new Node()
            }
            currentNode=currentNode.children[char]
        }
        currentNode.isEndOfWord=true
    }


    search(word){
        let currentNode=this.root
        for(let char of word){
            if(!currentNode.children[char]){
                return false
            }
            currentNode=currentNode.children[char]
        }
        return true
    }

    startswith(prefix){
        let currentNode=this.root

        for(let char of prefix){
            if(!currentNode.children[char]){
                return false
            }
            currentNode=currentNode.children[char]
        }
        return true
    }

    printWords(){
        let words=[]
        this._dfs(this.root,"",words)
        console.log(words)
    }

    _dfs(node,currentWord,words){
        if(node.isEndOfWord){
            words.push(currentWord)
        }

        for(let char in node.children){
            this._dfs(node.children[char],currentWord+char,words)
        }
    }

    autoComplete(prefix){
        let currentNode=this.root
        for(let char of prefix){
            if(!currentNode.children[char]){
                return []
            }
            currentNode=currentNode.children[char]
        }
        let suggestions=[]
        this.collectSuggestion(currentNode,prefix,suggestions)
        return suggestions
    }

    collectSuggestion(node,prefix,suggestions){
        if(node.isEndOfWord){
            suggestions.push(prefix)
        }

        for(let char in node.children){
            this.collectSuggestion(node.children[char],prefix+char,suggestions)
        }
    }
}

const t = new trie();

// Inserting words
t.insert("apple");
t.insert("app");
t.insert("banana");
t.insert("bat");
t.insert("batman");

// Searching for words
console.log(t.search("apple"));  // true
console.log(t.search("app"));    // true
console.log(t.search("banana"));// true
console.log(t.search("bat"));   // true
console.log(t.search("batman")); // true
console.log(t.search("bats"));  // false

// Checking for prefix
console.log(t.startswith("app"));  // true
console.log(t.startswith("ban"));  // true
console.log(t.startswith("bat"));  // true
console.log(t.startswith("cat"));  // false

t.printWords()

// Auto-complete suggestions
console.log(t.autoComplete("ba")); // ["banana", "bat", "batman"]
console.log(t.autoComplete("app")); // ["apple", "app"]
