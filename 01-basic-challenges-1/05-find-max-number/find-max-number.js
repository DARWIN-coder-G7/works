// function findMaxNumber(arr) {
//     let maxElement=0;
//     for(let i=0; i<=arr.length;i++){
// if(arr[i]>maxElement){
//     maxElement  = arr[i];
// }
//     }

//     return maxElement;

// }

function findMaxNumber (arr) {
    return Math.max(...arr);
}

module.exports = findMaxNumber;
