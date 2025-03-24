function countVowels(str) {
    let vowelCount = 0;
    const lowerCasedString = str.toLowerCase();
    for (let i = 0; i <= lowerCasedString.length; i++) {
        if ((lowerCasedString[i] == 'a')
            || (lowerCasedString[i] == 'e')
            || (lowerCasedString[i] == 'i')
            || (lowerCasedString[i] == 'o')
            || (lowerCasedString[i] == 'u')) {
            vowelCount++;
        }
    }
    return vowelCount;
}

module.exports = countVowels;
