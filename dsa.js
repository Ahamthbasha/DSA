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

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null
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
        }
        else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    insert(value,index){
        const node=new Node(value)
        if(index < 0 || index > this.size){
            return "invalid"
        }
        if(index===0){
            this.prepend(value)
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size++
    }
    remove(index){
        if(index < 0 || index >= this.size){
            return "invalid"
        }
        let removeIndex
        if(index===0){
            removeIndex=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeIndex=prev.next
            prev.next=removeIndex.next
            this.size--
            return removeIndex
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }
        else{
            let curr=this.head
            let listValues=""
            while(curr){
                listValues+=curr.value+" "
                curr=curr.next
            }
            console.log(listValues)
        }
    }
}
const list=new Linkedlist()
list.prepend(10)
list.append(20)
list.append(30)
list.insert(40,2)
list.print()
list.remove(10)
list.remove(2)
list.print()


