function findFirstNonRepeatingCharacter(str) {
    return approach003(str);
}

function approach003(str) {
    const charCount = new Map();

    for (const char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1)
    }

    for (const char of str) {
        if (charCount.get(char) == 1) {
            return char;
        }
    }
    return null;
}

function approach002(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] == 1) {
            return char;
        }
    }

    return null;
}

function approach001(str) {
    let isNonrepeatingchar = '';
    for (let i = 0; i < str.length; i++) {

        if (findIsNonRepeating(str[i], str)) {
            isNonrepeatingchar = str[i];
            break;
        } else {
            isNonrepeatingchar = null;
        }
    }
    return isNonrepeatingchar;
}

function findIsNonRepeating(currentChar, str) {
    let count = 0;
    let isNotRepeating = false
    for (let i = 0; i < str.length; i++) {
        if (currentChar == str[i]) {
            count++;
        }
        if ((i == str.length - 1) && count == 1) {

            isNotRepeating = true;
            break;
        }
    }
    return isNotRepeating;
}

module.exports = findFirstNonRepeatingCharacter;
