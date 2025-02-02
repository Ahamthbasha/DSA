// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     //hash method
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size //(By this way size will be with in the limit.if user give 50 0-49 will be correctly matching)
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
// table.set("actor","shahrukhkhan")
// table.set("movie","om shanthi om")
// table.display()
// console.log(table.get("movie"))
// console.log(table.remove("name"))
// table.set("actor","amirkhan")//it overwrite the existing value this is called hashtable collision.If the key is same or almostly same it will overwrite
// table.display()


//handling the table collisions

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
//             let sameKeyElement=bucket.find(item => item[0] == key)
//             if(sameKeyElement){
//                 sameKeyElement[1]=value
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         let index=this.hash(key)
//         let bucket=this.table[index]
//         if(bucket){
//             const sameKeyElement=bucket.find(item => item[0]==key)
//             return sameKeyElement[1]
//         }
//         return undefined
//     }

//     remove(key) {
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if (bucket) {
//             let elementIndex = bucket.findIndex(item => item[0] === key); // Use findIndex for correct index
//             if (elementIndex !== -1) {
//                 return bucket.splice(elementIndex, 1); // Remove the key-value pair
//             }
//         }
//         return undefined; // Return undefined if the key was not found
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table1=new hashtable(50)
// table1.set("name","ahamathbasha")
// table1.set("mane","picture abhi baakhi hai")
// table1.set("name","shahrukhkahan")
// table1.set("movie","wake up sid")
// table1.display()
// console.log(table1.get("name"))
// table1.display()
// console.log(table1.remove("name"))
// table1.display()