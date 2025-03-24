function fizzBuzzArray(num) {
    // let newArr = approach001(num);
    let newArr = approach2(num);
    return newArr;
}

function approach001(num) {
    let newArr = [];
    for (let i = 1; i <= num; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            if ((i % 3 === 0) && (i % 5 === 0)) {
                newArr.push('FizzBuzz');
            } else if (i % 3 === 0) {
                newArr.push('Fizz');
            } else {
                newArr.push('Buzz');
            }
        } else {
            newArr.push(i);
        }

    }
    return newArr;
}

function approach2(num){
    const arr = [];

    // Loop through the numbers from 1 to the number passed in
    for (let i = 1; i <= num; i++) {
      // If the number is divisible by 3 and 5, add 'FizzBuzz' to the array
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push('FizzBuzz');
        // If the number is divisible by 3, add 'Fizz' to the array
      } else if (i % 3 === 0) {
        arr.push('Fizz');
        // If the number is divisible by 5, add 'Buzz' to the array
      } else if (i % 5 === 0) {
        arr.push('Buzz');
      } else {
        // Otherwise, add the number to the array
        arr.push(i);
      }
    }
    return arr;
}
module.exports = fizzBuzzArray;
