function findMissingNumber(arr) {
  return approach002(arr);
}
//This code will work only if we have one missing Number 
function approach001(arr){
    const len = arr.length+1;
    if (!arr) {
        return undefined;
    }
    const sumofn = (len * (len + 1)) / 2;
    const actualSum = arr.reduce((sum, next) => sum + next, 0);
    return sumofn - actualSum;
}

function approach002(arr){
  let n = Math.max(...arr);
  return miss(arr,n);
}

function miss(arr, n) {
  let missed = [];
  for (let i = 1; i <= n; i++) {
      let f = false;
      for (let j = 0; j < arr.length; j++) {
          if (arr[j] === i) {
              f = true;
              break;
          }
      }
      if (!f) {
          missed.push(i);
      }
  }
  return parseInt(missed.toString()); // for achieving test cases only we are using ParseInt
}


module.exports = findMissingNumber;
