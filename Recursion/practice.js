//fib

function fibRecursion(n){
    if(n<2){
        return n
    }
    return fibRecursion(n-1)+fibRecursion(n-2)
}

console.log(fibRecursion(5))

//fact

function factorial(n){
    if(n==0){
        return 1
    }
    return n*factorial(n-1)
}

console.log(factorial(5))


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
    else if(target < arr[mid]){
        return search(arr,target,leftIndex,mid-1)
    }
    else{
        return search(arr,target,mid+1,rightIndex)
    }
}
console.log(rbs([-5,2,4,6,10],10))
console.log(rbs([-5,2,4,6,10],6))
console.log(rbs([-5,2,4,6,10],20))

//sum of digits

function sumOfDigit(n){
    if(n < 2){
        return n
    }

    return (n%10)+sumOfDigit(Math.floor(n/10))
}
console.log(sumOfDigit(1111))