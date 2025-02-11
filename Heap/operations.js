// function topKFrequentElement(nums,k){
//     let freqMap=new Map()

//     for(let num of nums){
//         freqMap.set(num,(freqMap.get(num)||0)+1)
//     }

//     let result=[]
//     for(let [num,freq] of freqMap.entries()){
//         if(freq==k){
//             result.push(num)
//         }
//     }
//     return result
// }

// const nums = [1, 1, 1, 2, 2, 3];
// const k = 1;
// console.log(topKFrequentElement(nums, k)); 

// function heapify(arr,n,i){
//     let largest=i
//     let left=2*index+1
//     let right=2*index+2

//     if(left < n || arr[left] > arr[largest]){
//         largest=left
//     }

//     if(right < n || arr[right] > arr[largest]){
//         largest=right
//     }

//     if(largest != i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//         heapify(arr,n,largest)
//     }
// }

// function heapSort(arr){
//     const n=arr.length

//     for(let i=Math.floor(n/2)-1;i>=0;i--){
//         heapify(arr,n,i)
//     }

//     for(let i=n-1;i>=0;i--){
//         [arr[0],arr[i]]=[arr[i],arr[0]]
//         heapify(arr,i,0)
//     }
// }