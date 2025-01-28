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
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let temp=this.head
            while(temp.next!==null){
                temp=temp.next
            }
            temp.next=node
            node.next=null
        }
        this.size++
    }
    insert(value,index){
        const node=new Node(value)
        if(index < 0 || index > this.size){
            return "invalid index"
        }
        if(index === 0){
            this.prepend(value)
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }
    removeFromStart(){
        if(this.isEmpty()){
            return "list is empty"
        }
        if(this.size===1){
            this.head=null
        }else{
            this.head=this.head.next
        }
        this.size--
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return "list is empty"
        }
        if(this.size===1){
            this.head=null
        }else{
            let prev=this.head
            while(prev.next!==null && prev.next.next != null){
                prev=prev.next
            }
            prev.next=null
        }
        this.size--
    }
    print(){
        if(this.isEmpty()){
            return "list is empty"
        }
        else{
            let temp=this.head
            let listValues=""
            while(temp!=null){
                listValues+=temp.value+"->"
                temp=temp.next
            }
            listValues+=null
            console.log(listValues)
        }
    }
}
const list=new Linkedlist()
list.prepend(10)
list.print()
list.append(20)
list.print()
list.insert(30,1)
list.print()
list.removeFromStart()
list.print()
list.removeFromEnd()
list.print()