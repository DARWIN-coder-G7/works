function fibonacci(nums) {
    // return createFibonacciSeries(nums)
    return nthFibonacci(nums);
}

function nthFibonacci(n){
  // Base case: if n is 0 or 1, return n
  if (n <= 1) {
    return n;
}

// Recursive case: sum of the two preceding Fibonacci
// numbers
console.log(n);
return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

function createFibonacciSeries(num){
    let series =[];
    for(let i=0; i<=num;i++){
        if(series.length <=2){
            series.push(i);
        }
        else{
            let newElement = series[i-1]+series[i-2];
            series.push(newElement);
        }
    }
    return series;
}

module.exports = fibonacci;
