function formatPhoneNumber(numArr) {
    return approach003(numArr);
}

function approach001(nums) {
    let str = '(';
    for (let i = 0; i < nums.length; i++) {
        if (i == 3) {
            str += ') ';
        }
        if (i == 6) {
            str += '-';
        }
        str += nums[i];
    }
    return str;
}

function approach002(nums){
const formatted = nums.join('');
return `(${formatted.subString(0,3)}) ${formatted.subString(3,6)}-${formatted.subString(6)}`
}

function approach003(nums){
    const areaCode = nums.slice(0,3).join('');
    const prefix = nums.slice(3,6).join('');
    const telephone = nums.slice(6).join('');
    return `(${areaCode}) ${prefix}-${telephone}`
}

module.exports = formatPhoneNumber;
