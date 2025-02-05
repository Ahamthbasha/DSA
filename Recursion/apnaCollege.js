//1.n=4 to 1

// function printNo(n){
//     if(n == 1){
//         console.log(n)
//         return
//     }
//     console.log(n)
//     printNo(n-1)
// }


// printNo(10)

//2.n factorial

//big oh notation will be time complexity and space complexity O(n)
// function factorial(n){
//     if(n==0){
//         return 1 
//     }

//     return n*factorial(n-1)
// }

// console.log(factorial(5))

//3.sum of N nums// 

//timeComplexity and spaceComplexity is O(n)
// function sumOfNnums(n){
//     if(n==1){
//         return 1
//     }
//     return n+sumOfNnums(n-1)
// }

// console.log(sumOfNnums(5))

//4.Find the nth fibonocci tems

//time complexity:In each stage the call is getting exponential so.O(2^n)

//space complexity:calls based on the n.so O(n)

// function fibNthTerm(n){
//     if(n == 0 || n == 1){
//         return n
//     }
//     return fibNthTerm(n-1)+fibNthTerm(n-2)
// }

// console.log(fibNthTerm(6))

//5.check given array is sorted in ascending order or not
//time complexity and space complexity is O(n)
// function sorted(arr,n){
//     if(n <= 1){
//         return true
//     }

//     return arr[n-1] >= arr[n-2] && sorted(arr,n-1)
    
// }
// let arr=[1,2,3,4,5]
// let length=arr.length
// console.log(sorted(arr,length))

//6.check the given array is sorted in descending order or not
//time complexity and space complexity is O(n)
// function descendingOrder(arr,n){
//     if(n <= 2){
//         return true
//     }

//     return arr[n-1]<=arr[n-2] && descendingOrder(arr,n-1)
// }

// console.log(descendingOrder([5,4,3,2,1],5))

//7.binary search in recursion

//time Complexity is O(log n) and space complexity is O(log n)

// function binarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftArr,rightArr){
//     if(leftArr > rightArr){
//         return -1
//     }

//     let mid=Math.floor((leftArr+rightArr)/2)

//     if(arr[mid] == target){
//         return mid
//     }
//     else if(target < arr[mid]){
//         return search(arr,target,leftArr,mid-1)
//     }else{
//         return search(arr,target,mid+1,rightArr)
//     }
// }

// console.log(binarySearch([-5,2,4,6,10],10))

//8.print all subsets
//Timecomplexity O(2^n) and space complexity is O(n)
// function printSubset(arr,ans,i){
//     if( i == arr.length){
//         console.log(`[${ans.join(",")}]`)
//         return
//     }

//     ans.push(arr[i])//include
//     printSubset(arr,ans,i+1)
//     ans.pop()//exclude
//     printSubset(arr,ans,i+1)
// }

// printSubset([1,2,3],[],0)

//9.print all subsets which is the array is duplicate

//timeComplexity is O(n 2^n) and spaceComplexity is O(n)

function printSubset(arr,ans,i){
    if(i == arr.length){
        console.log(`[${ans.join(",")}]`)
        return
    }

    ans.push(arr[i])
    printSubset(arr,ans,i+1)
    ans.pop()
    let index=i+1
    while(index < arr.length && arr[index]==arr[index-1]){
        index++
    }
    printSubset(arr,ans,index)
}

printSubset([1,2,3],[],0)