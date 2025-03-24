function reverseString(str){
    let reversed ='';
    for(let i=str.length -1 ; i >=0; i-- ){
        reversed+=str[i];
    }
    return reversed;
}

function removeNONAlphaNumeric(str){
let formattedStr='';
for(let i=0; i< str.length; i++){
    const char = str[i];
    if(isAlphaNumeric(char)){
        formattedStr+=char;
    }
}
return formattedStr;
}

function isAlphaNumeric(char){
    const code = char.charCodeAt(0);
    return (
        (code >=48 && code <= 57)|| //Numbers 0-9
        (code >= 97 && code <= 122) //LowerCase a-z
    )
}

function isPalindrome(str) {
    // const newStr = str.split('').reverse().join('');
    // const newStr = reverseString(str);
    // const newStr = str.toLowerCase().replace(/[^a-z0-9]/g,'').split('').reverse().join('');
    // return str.toLowerCase().replace(/[^a-z0-9]/g,'') == newStr;

    const formattedStr = removeNONAlphaNumeric(str.toLowerCase());
    const reversedStr = reverseString(formattedStr);

    return formattedStr === reversedStr;
}



module.exports = isPalindrome;
