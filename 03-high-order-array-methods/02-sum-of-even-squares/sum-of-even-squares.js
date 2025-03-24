function sumOfEvenSquares(arr) {
return approach001(arr);
}
function approach001(arr){
    return arr.filter(num => (num%2===0)).map(num => num*num).reduce((acc,curr)=> acc+curr,0);
}

module.exports = sumOfEvenSquares;
