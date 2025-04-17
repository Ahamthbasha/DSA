//fibonocci

// function fibonocci(n){
//     let fib=[0,1]
//     for(let i=2;i<=n;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// console.log(fibonocci(2))

//factorial of the give no

// function factorial(n){
//     let fact=1
//     for(let i=1;i<=n;i++){
//         fact*=i
//     }
//     return fact
// }
// console.log(factorial(0))
// console.log(factorial(5))
// console.log(factorial(10))

//prime no
// if(n<2){
//     return false
// }
// function prime(n){
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

//prime no math.sqrt

// function prime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             return false
//         }
//     }
//     return true
// }
// console.log(prime(1))
// console.log(prime(5))
// console.log(prime(4))

//given no power of two

// function powerOfTwo(n){
//     if(n<2){
//         return false
//     }
//     else{
//         while(n>1){
//             if(n%2!==0){
//                 return false
//             }
//             n=n/2
//         }
//         return true
//     }
// }
// console.log(powerOfTwo(5))

//sum of array using recursion

// function sumOfArray(arr){
//     if(arr.length==0){
//         return 0
//     }
//     return sumOfArray(arr.slice(0,arr.length-1))+arr[arr.length-1]
// }

// console.log(sumOfArray([3,5,3,29]))

//flat an array using recursion

// function flatArray(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             result=result.concat(flatArray(arr[i]))
//         }else{
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// console.log(flatArray( [2, 4, 5, [4, [9, [9, [0, 4]]]], 5, [4, [44, 5]]]))

//sort the letters

// const arr = ['z', 'a', 'b', 'e', 'g'];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
// }
// console.log(arr)

//find the max element from the array

// const arr=[1,2,66,3,65,21,45,3]
// function maxElements(arr){
// let max=arr[0]
// for(let i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// return max
// }
// console.log(maxElements(arr))

//find the min element from the Array

// const arr = [4,6,-19,4,1,0,2,34,43]

// function minElements(arr){
//     let min=arr[0]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//     }
//     return min
// }
// console.log(minElements(arr))

//largest using reduce
// const arr=[1,2,66,3,65,21,45,3]

// const result=arr.reduce((acc,cur)=>{
    // if(([acc.first,acc.second,acc.third,acc.fourth]).includes(cur)){
    //     return acc;
    // }
//     if(cur > acc.first){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=acc.first
//         acc.first=cur
//     }
//     else if(cur > acc.second){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=cur
//     }
//     else if(cur > acc.third){
//         acc.fourth=acc.third
//         acc.third=cur
//     }
//     else if(cur > acc.fourth){
//         acc.fourth=cur
//     }
//     return acc
// },{
//     first:-Infinity,
//     second:-Infinity,
//     third:-Infinity,
//     fourth:-Infinity
// })

// console.log("1",result.first)
// console.log("2",result.second)
// console.log("3",result.third)
// console.log("4",result.fourth)


//smallest using reduce
// const arr = [4,6,-19,4,1,0,-19,34,43]

// const result=arr.reduce((acc,cur)=>{

//     if(([acc.first,acc.second,acc.third,acc.fourth]).includes(cur)){
//         return acc;
//     }
//     if(cur < acc.first){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=acc.first
//         acc.first=cur
//     }
//     else if(cur < acc.second){
//         acc.fourth=acc.third
//         acc.third=acc.second
//         acc.second=cur
//     }
//     else if(cur < acc.third){
//         acc.fourth=acc.third
//         acc.third=cur
//     }
//     else if(cur < acc.fourth){
//         acc.fourth=cur
//     }

//     return acc
// },{
//     first:Infinity,
//     second:Infinity,
//     third:Infinity,
//     fourth:Infinity
// })

// console.log('1',result.first)
// console.log('2',result.second)
// console.log('3',result.third)
// console.log('4',result.fourth)

//reverse an array

// const arr=[3,4,5,6,33,10,6]

// function reverseArr(arr){
//     let start=0
//     let end=arr.length-1
//     while(start<end){
//         let temp=arr[start]
//         arr[start]=arr[end]
//         arr[end]=temp
//         start++
//         end--
//     }
//     return arr
// }
// console.log(reverseArr(arr))

//sumOfDigits

// let num=5050

// function sumOfDigits(n){
//     let sum=0
//     while(n!=0){
//         let d=n%10
//         sum+=d
//         n=Math.floor(n/10)
//     }
//     return sum
// }
// console.log(sumOfDigits(num))

//another approach

// function sumOfDigits(no){
//     let str=no.toString()
//     let sum=0
//     for(let i=0;i<str.length;i++){
//         sum+=Number(str[i])
//     }
//     return sum
//     }
//     let no=5050
//     console.log(sumOfDigits(no))

//recursively reverse the array

// function recursiveReverse(arr){
//     if(arr.length==0){
//         return arr
//     }
//     let first=arr[0]
//     let restOfArray=arr.slice(1)
//     let reverseArr=recursiveReverse(restOfArray)

//     return reverseArr.concat(first)
// }

// console.log(recursiveReverse([1,2,3,4,5]))

//find first and second largest

// const arr = [1,2,4,3,22, -1, -14 , 8,9,34];
// let first=arr[0]
// let second=arr[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>first){
//         first=arr[i]
//     }
// }
// console.log(first)
// for(let i=0;i<arr.length;i++){
//     if(arr[i] >second && arr[i]!=first){
//         second=arr[i]
//     }
// }
// console.log(second)


//maximum subarray sum

// function subArray(arr){
//     let cs=arr[0]
//     let max=arr[0]

//     for(let i=1;i<arr.length;i++){
//         cs=Math.max(arr[i],cs+arr[i])
//         max=Math.max(max,cs)
//     }
//     return max
// }
// console.log(subArray([2, 3, 4, 5, 1, 22, 0, 4]))

// let arr=[[1,2,-3],[-11,2,3], [8,-10,2]]
// let min=Infinity
// let index=0
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         if(arr[i][j] < min){
//             min=arr[i][j]
//             index=i
//         }
//     }
// }

// console.log(min)
// console.log(index)
// arr.splice(index,1)
// console.log(arr)