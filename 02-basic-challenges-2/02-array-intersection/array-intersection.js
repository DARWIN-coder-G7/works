function arrayIntersection(arr1,arr2) {
    return approach003(arr1,arr2);
}

function approach001(arr1,arr2){
    let concatenatedArray=[];
    for(let i=0; i<arr1.length;i++){
        for(let j=0; j<arr2.length;j++){
        if(arr1[i] === arr2[j]){
            concatenatedArray.push(arr1[i]);
        }
        }
    }
    return concatenatedArray;
}

function approach002(arr1,arr2){
    let intersection=[];
    for(let i=0; i<arr1.length;i++){
        if(arr2.includes(arr1[i]) && !intersection.includes(arr1[i])){
            intersection.push(arr1[i]);
        }
    }
    return intersection;
}

function approach003(arr1,arr2){
    const intersection=[];
    const set1 = new Set(arr1);
    for(let num of arr2){
        if(set1.has(num)){
            intersection.push(num)
        }
    }
    return intersection;
}

module.exports = arrayIntersection;
