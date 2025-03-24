function highestScoringWord(sentence) {
    return approach004(sentence);
}

function approach001(sentence) {
    const words = sentence.split(' ');
    let highestValue = 0;
    let highestIndex = 0;
    const scores = words.map(word => {
        return word.split('').reduce((acc, letter) => {
            let charValue = letter.charCodeAt(0) - 96;
            return acc + (charValue >= 1 && charValue <= 26 ? charValue : 0)
        }, 0
        )
    });

    for (let i = 0; i < words.length; i++) {
        if (scores[i] > highestValue) {
            highestIndex = i;
            highestValue = scores[i];
        }
    }
    return words[highestIndex];
}

function approach002(sentence) {
    let words = sentence.toLowerCase().split(/\s+/);
    let highestValue = 0;
    let highestWord = "";

    words.forEach(word => {
        let wordValue = [...word].reduce((sum, char) => {
            let charValue = char.charCodeAt(0) - 96;
            return sum + (charValue >= 1 && charValue <= 26 ? charValue : 0);
        }, 0);

        if (wordValue > highestValue) {
            highestValue = wordValue;
            highestWord = word;
        }
    });

    return highestWord;
}

function approach003(sentence) {
    const words = sentence.split(' ');
    const scores = words.map(word =>
        Array.from(word).reduce(
            (score, letter) => score + (letter.charCodeAt(0) - 96), 0
        )
    )
    const highestScore = Math.max(...scores);
    const highestIndex = scores.indexOf(highestScore);
    return words[highestIndex];
}

function approach004(sentence) {
    const words = sentence.split(' ');
    const scores = words.map(word => {
        let score = 0;
        for (const char of word) {
            score += (char.charCodeAt(0) - 96)
        }
        return score;
    });
    let highestScore = 0;
    let highestIndex = 0;
    for (let i = 0; i < words.length; i++) {
        if (highestScore < scores[i]) {
            highestIndex = i;
            highestScore = scores[i];
        }
    }
    return words[highestIndex];
}

module.exports = highestScoringWord;
