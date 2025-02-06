//bubble sort 

//run time complexity:O(n square) quadratic.space complexity is :O(1).In place sorting algorithm

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
// console.log(bubbleSort([8,20,-2,4,-6]))

//insertion sort in place sorting algorithm

//time complexity O(n*n) quadratic.space complexity is O(1)

// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
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

// console.log(insertionSort([8,20,-2,4,-6]))

//time complexity of quick sort in average Case will be O(n logn) because we use loop and using recursion which divide the input. worst case will be O(n*n)
//Space complexity: O(log n) on average, O(n) in the worst case.
//in place sorting algorithm which does not uses any additional memory

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
// console.log(quickSort([8,20,-2,4,-6]))

//Merge Sort

//Not in place order because it uses an additional memory
//time complexity O(n logn) and spaceComplexity O(n)
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
//     const sortedArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0] <rightArr[0]){
//             sortedArr.push(leftArr.shift())
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return sortedArr.concat(leftArr,rightArr)
// }
// console.log(mergeSort([8,20,-2,4,-6]))


//selection sort
//in place order
//Time complexity will be O(n2)
//space complexity will be O(1)

function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minElement=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minElement] > arr[j]){
                minElement=j
            }
        }
        let temp=arr[minElement]
        arr[minElement]=arr[i]
        arr[i]=temp
    }
    return arr
}
console.log(selectionSort([8,20,-2,4,-6]))