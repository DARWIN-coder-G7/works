function validateEmail(str) { 
    return approach002(str);
    // return regexApproach(str) 
}

function approach001(str) {
    let containsAdhereat = false;
    let containsDot = false;
    for (const char of str) {
        if (
            (char == '@')
            && (str[0] !== '@')
            && (str[0] !== '.')
            && (str[str.length - 1] !== '@')
            && (str[str.length - 1] !== '.')
        ) {
            containsAdhereat = true;
        }
        if (char == '.') {
            containsDot = true;
        }
    }
    return containsAdhereat && containsDot;
}

function regexApproach(str){
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(str);
}

function approach002(str){
    if(str.indexOf('@') === -1){
        return false;
    }
    const [local,domain]= str.split('@');
    if((local.length ===0) || (domain.length <3)){
        return false;
    }
    const domainExtension = domain.split('.');
    if((domainExtension.length < 2) || (domainExtension[1].length < 2)){
        return false;
    }
    return true;
}
module.exports = validateEmail;
