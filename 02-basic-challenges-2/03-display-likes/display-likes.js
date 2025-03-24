function displayLikes(arr1) {
   return approach001(arr1);
}

function approach001(arr1) {
    const len = arr1.length;
    if (len == 0) {
        return 'no one likes this'
    }
    else if (len == 1) {
        return `${arr1[0]} likes this`
    }
    else if (len == 2) {
        return `${arr1[0]} and ${arr1[1]} like this`
    }
    else if (len == 3) {
        return `${arr1[0]}, ${arr1[1]} and ${arr1[2]} like this`
    }
    else if (len > 3) {
        return `${arr1[0]}, ${arr1[1]} and ${len-2} others like this`
    }
}
module.exports = displayLikes;
