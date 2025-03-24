// function countOccurrences(str,occ) {
//     let count=0;
//     str.toLowerCase().split('').forEach((element) => {
//         if(element == occ) count++
//     });
//     return count;
// }

// function countOccurrences(str,occ) {
//     return str.toLowerCase().split(occ).length -1;
// }

const countOccurrences = (str,occ)=> str.toLowerCase().split(occ).length -1;


module.exports = countOccurrences;
