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

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    insert(value,index){
        const node=new Node(value)
        if(this.isEmpty()){
            return "list is empty"
        }
        else if(index===0){
            this.prepend(value)
        }
        else{
            let prev=this.head
            let i=0
            while(i < index-1){
                prev=prev.next
                i++
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    print(){
        if(this.isEmpty()){
            return "list is empty"
        }
        else{
            let temp=this.head
            let listValues=""
            while(temp != null){
                listValues+=temp.value+"->"
                temp=temp.next
            }
            listValues+=null
            console.log(listValues)
        }
    }
    removeFromStart(){
        if(this.isEmpty()){
            return "the list is empty"
        }
        else if(this.size === 1){
            this.head=null
            this.tail=null
            this.size--
        }
        else{
            this.head=this.head.next
            this.size--
        }
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return "list is empty"
        }
        else if(this.size===1){
            this.head=null
            this.tail=null
            this.size--
        }
        else{
            let prev=this.head
            for(let i=0;i<this.size-2;i++){
                prev=prev.next
            }
            prev.next=null
            this.tail=prev
            this.size--
        }
    }
    search(value){
        if(this.isEmpty()){
            return "list is empty"
        }
        else{
        let temp=this.head
        let i=0
        while(temp != null){
            if(value==temp.value){
                return i
            }
            temp=temp.next
            i++
        }
        return -1
        }
    }
}
const list=new Linkedlist()
list.prepend(10)
list.append(20)
list.append(40)
list.print()
list.insert(30,2)
list.print()
list.removeFromStart()
list.print()
list.removeFromEnd()
list.print()
console.log(list.search(30))
console.log(list.search(50))