const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((num)=> num*3);
console.log('DoubledNumbers',doubledNumbers);
/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const filteredNumbers= numbers.filter((num)=> num>3);
console.log('filteredNumbers',filteredNumbers);
/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const total= numbers.reduce((current,next)=> current+next,0);
console.log('total',total);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */



 /**
 * find: Returns the first array element that satisfies a specified condition.
 */
 const filteredNumber= numbers.find((num)=> num>3);
 console.log('filteredNumber',filteredNumber);
/**
 * some: Checks if at least one array element satisfies a condition.
 */
const anyOneNumberGreaterThanThree= numbers.some((num)=> num>3);
console.log('anyOneNumberGreaterThanThree',anyOneNumberGreaterThanThree);

/**
 * every: Checks if all array elements satisfy a condition.
 */

const allNumberGreaterThanThree= numbers.every((num)=> num>3);
console.log('allNumberGreaterThanThree',allNumberGreaterThanThree);
