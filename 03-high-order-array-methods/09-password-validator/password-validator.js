function validatePassword(str) {
    return approach002(str);
}

function approach001(str){
    if (str.length < 8) return false;
    let num = 0;
    let caps = 0;
    let lowers = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].charCodeAt(0);
        if (isNaN(str[i])) {
            if ((char >= 65) && (char <= 90)) {
                caps++;
            } else if ((char >= 97) && (char <= 122)) {
                lowers++;
            }
        } else {
            num++;
        }
    }
    return (caps >= 1) && (lowers >= 1) && (num >= 1);
}

function approach002(str){
    const isLength = str.length >=8;
    const hasUpperCase = str.split('').some((char)=> char === char.toUpperCase() && char !== char.toLowerCase());
    const hasLowerCase = str.split('').some((char)=> char === char.toLowerCase() && char !== char.toUpperCase());
    const isNumber = str.split('').some((char) => !isNaN( parseInt(char,10)));
    return isLength && hasLowerCase&& hasUpperCase&&isNumber;
}

module.exports = validatePassword;
