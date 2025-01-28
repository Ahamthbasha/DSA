//without tail
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
//             let temp=this.head
//             while(temp.next!=null){
//                 temp=temp.next
//             }
//             temp.next=node
//             node.next=null
//         }
//         this.size++
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
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.print()
// list.append(20)
// list.print()

///////////////////////////////////INSERT///////////////////////////////////////////////////

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class Linkedlist{
//     constuctor(){
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
//             let temp=this.head
//             while(temp.next!=null){
//                 temp=temp.next
//             }
//             temp.next=node
//             node.next=null
//         }
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
//             for(let i=0;i<index-2;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//             this.size++
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         }else{
//             let temp=this.head
//             let listValues=""
//             while(temp!=null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+=null
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.print()
// list.append(20)
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
//         }else{
//             let temp=this.head
//             while(temp.next!==null){
//                 temp=temp.next
//             }
//             temp.next=node
//             node.next=null
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
//         }else{
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
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.size===1){
//             this.head=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//     }
//     removeFromEnd(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.size===1){
//             this.head=null
//         }else{
//             let prev=this.head
//             while(prev.next!==null && prev.next.next != null){
//                 prev=prev.next
//             }
//             prev.next=null
//         }
//         this.size--
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
//             listValues+=null
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.print()
// list.append(20)
// list.print()
// list.insert(30,1)
// list.print()
// list.removeFromStart()
// list.print()
// list.removeFromEnd()
// list.print()

//from start to removefrom end

// class Node{
//     constructor(value){
//         this.value=value;
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
//         }else{
//             let temp=this.head
//             while(temp.next!==null){
//                 temp=temp.next
//             }
//             temp.next=node
//             node.next=null
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(index < 0 || index >this.size){
//             return "invalid index"
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
//     removeFromStart(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         const value=this.head.value
//         if(this.size===1){
//             this.head=null
//         }else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }
//     removeFromEnd(){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         const value=this.head.value
//         if(this.size===1){
//             this.head=null
//         }else{
//             let prev=this.head
//             while(prev.next !== null && prev.next.next!==null){
//                 prev=prev.next
//             }
//             prev.next=null
//         }
//         this.size--
//         return value
//     }
//     removeIndex(index){
//         if(index < 0 || index >= this.size){
//             return "invalid index"
//         }
//         let removeIndex=this.head
//         if(index==0){
//             this.head=this.head.next
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
//             return "list is empty"
//         }
//         else{
//             let temp=this.head
//             let listValues=""
//             while(temp!==null){
//                 listValues+=temp.value+"->"
//                 temp=temp.next
//             }
//             listValues+=null
//             console.log(listValues)
//         }
//     }
// }
// const list=new Linkedlist()
// list.prepend(10)
// list.append(20)
// list.append(30)
// list.print()
// list.insert(40,2)
// list.print()
// list.removeFromStart()
// list.print()
// list.removeFromEnd()
// list.print()
// console.log(list.removeIndex(1))
// list.print()

//start to removeValue

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
//             while(prev.next !== null){
//                 prev=prev.next
//             }
//             prev.next=node
//             node.next=null
//         }
//         this.size++
//     }
//     insert(value,index){
//         const node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
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
//     removeFromStart(){
//         let value=this.head.value
//         if(this.size==1){
//             this.head=null
//         }
//         else{
//             this.head=this.head.next
//         }
//         this.size--
//         return value
//     }
//     removeFromEnd(){
//         if(this.size==1){
//             this.head=null
//         }else{
//             let prev=this.head
//             while(prev.next!==null && prev.next.next !==null){
//                 prev=prev.next
//             }
//             prev.next=null
//         }
//         this.size--
//     }
//     removeIndex(index){
//         if(index < 0 || index >= this.size){
//             return "Invalid index"
//         }
//         let removeIndex
//         if(index==0){
//             removeIndex=this.head
//             this.head=this.head.next
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
//     removeValue(value){
//         if(this.isEmpty()){
//             return "list is empty"
//         }
//         if(this.head.value==value){
//             this.head=this.head.next
//             this.size--
//             return value
//         }
//         else{
            
//             let prev=this.head
//             while(prev.next && prev.next.value !== value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 let removeIndex=prev.next
//                 prev.next=removeIndex.next
//                 this.size--
//                 return removeIndex.value
//             }
//             return -1
//         }
//     }
//     print(){
//         if(this.isEmpty()){
//             return "invalid index"
//         }else{
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
// list.insert(40,2)
// list.print()
// list.removeFromStart()
// list.print()
// list.removeFromEnd()
// list.print()
// console.log(list.removeIndex(0))
// list.print()
// list.append(50)
// list.append(60)
// list.append(70)
// list.print()
// console.log(list.removeValue(50))
// list.print()

//start to search

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
            while(prev.next!==null){
                prev=prev.next
            }
            prev.next=node
            node.next=null
        }
        this.size++
    }
    insert(value,index){
        const node=new Node(value)
        if(index < 0|| index >this.size){
            return "invalid index"
        }
        if(index === 0){
            this.prepend(value)
        }
        else if(index === this.size){
            this.append(value)
        }
        else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node

        }
        this.size++
    }
    removeFromStart(){
        let start=this.head.value
        if(this.size==1){
            this.head=null
        }else{
            this.head=this.head.next
        }
        this.size--
        return start
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return "list is empty"
        }
        if(this.size==1){
            this.head=null
        }else{
            let prev=this.head
            while(prev.next != null && prev.next.next!=null){
                prev=prev.next
            }
            prev.next=null
        }
        this.size--
    }
    removeIndex(index){
        if(index < 0 || index >= this.size){
            return "invalid index"
        }
        let removeIndex
        if(index === 0){
            this.head=this.head.next
            this.size--
        }else{
            
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeIndex=prev.next
            prev.next=removeIndex.next
        }
        this.size--
    }
    removeValue(value){
        if(this.isEmpty()){
            return "list is empty"
        }
        let removeIndex
        if(this.head.value == value){
            this.head=this.head.next
            this.size--
        }
        else{
            let prev=this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                removeIndex=prev.next
                prev.next=removeIndex.next
                this.size--
                return removeIndex
            }
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
            listValues+="null"
            console.log(listValues)
        }
    }
}
const list=new Linkedlist()
list.prepend(10)
list.append(20)
list.append(30)
list.append(50)
list.insert(40,3)
list.print()
list.append(60)
list.append(70)
list.append(80)
list.removeFromStart()
list.print()
list.removeFromEnd()
list.print()
console.log(list.removeIndex(1))
list.print()
console.log(list.removeValue(50))
list.print()