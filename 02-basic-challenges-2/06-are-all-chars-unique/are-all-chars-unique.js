function areAllCharactersUnique(str) {
    return approach003(str);
}

function approach001(currentString) {
    for (let i = 0; i < currentString.length; i++) {
        if (returnCount(currentString[i], currentString)) {
            return false;
        }
    }
    return true;
}

function approach002(str){
    const charSet = new Set();
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charSet.has(char)) {
        return false;
      }
      charSet.add(char);
    }
    return true;
}

function approach003(str){
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }
  return true;
}

function returnCount(char, currentString) {
    let count = 0;
    for (let i = 0; i < currentString.length; i++) {
        if (currentString[i] == char) {
            count++;
        }
        if (count > 1) {
            break;
        }
    }
    return count > 1;
}

module.exports = areAllCharactersUnique;
