// function removeDuplicates(arr) {
//     let newArr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }

function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
// function removeDuplicates(arr) {
//     let newArr = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false;

//         for (let j = 0; j < newArr.length; j++) {
//             if (newArr[j] === arr[i]) {
//                 isDuplicate = true;
//                 break; 
//             }
//         }

//         if (!isDuplicate) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr;
// }



module.exports = removeDuplicates;
