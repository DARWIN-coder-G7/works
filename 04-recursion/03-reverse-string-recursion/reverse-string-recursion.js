function reverseString(str) {
    return approach003(str);
}

function approach001(str, length) {
    //baseCase
    if (length <= 0) {
        return '';
    }
    //Recursive Case
    length--;
    return str[length] + approach001(str, length);
}

function approach002(str=''){
    if(str==='') return''
    else return reverseString(str.substring(1))+str.charAt(0)
}

const approach003 = str => str===''?'':reverseString(str.slice(1))+str[0];


module.exports = reverseString;
