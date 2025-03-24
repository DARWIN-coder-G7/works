function findMissingLetter(charArr) {
return approach003(charArr);
}

function approach003(strArr){
    const missingCharCode = strArr.filter((char,index)=>{
        if(index ===0){
            return false;
        }
        const prevCharCode = strArr[index-1].charCodeAt(0);
        const currentCharCode= strArr[index].charCodeAt(0);
        return currentCharCode-prevCharCode >1;
    })[0];
    return missingCharCode ? String.fromCharCode(missingCharCode.charCodeAt(0)-1): '';
}

function approach002(charArr) {
    let start = charArr[0].charCodeAt(0);
    const missingCharCode = charArr.map((char) => char.charCodeAt(0)).find((current) => {
        if (current - start > 1) {
            return true;
        }
        
        start = current;
        return false;
    })

    return missingCharCode ? String.fromCharCode(missingCharCode-1) : '';
}

function approach001(charArr) {
    let current = charArr[0].charCodeAt(0) - 1;
    charArr.forEach((char) => {
        if (char.charCodeAt(0) !== current + 1) {

        } else {
            current = char.charCodeAt(0);
        }

    })
    const missedCode = (current !== charArr[charArr.length - 1]) ? current : charArr.charCodeAt(charArr.length - 1);
    return String.fromCharCode(missedCode + 1);
}

module.exports = findMissingLetter;
