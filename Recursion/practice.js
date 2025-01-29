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