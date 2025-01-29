
//linear search

// function linear(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linear([-5,2,10,4,6],10))

//binary search
// function binarySearch(arr,target){
//     let start=0
//     let end=arr.length-1
//     while(start<=end){
//         let mid=Math.floor((start+end)/2)
//         if(target == arr[mid]){
//             return mid
//         }
//         else if(target < arr[mid]){
//             end=mid-1
//         }
//         else{
//             start=mid+1
//         }
//     }
// }
// console.log(binarySearch([-5,2,4,6,10],10))

//recursive binary search

function rbs(arr,target){
    return search(arr,target,0,arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let mid=Math.floor((leftIndex+rightIndex)/2)
    if(target==arr[mid]){
        return mid
    }
    if(target<arr[mid]){
        return search(arr,target,leftIndex,mid-1)
    }else{
        return search(arr,target,mid+1,rightIndex)
    }
}
console.log(rbs([-5,2,4,6,10],10))
console.log(rbs([-5,2,4,6,10],6))
console.log(rbs([-5,2,4,6,10],20))