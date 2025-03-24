function generateHashtag(str) {
return approach003(str);
}

function approach001(str){
    if (str.length === 0) {
        return false;
    }
   
    const words = str.split(' ').map((word) => {
        const tempArr = word.split('');
        if(tempArr.length>0){
        const restLetters = tempArr.slice(1).join('');
        return tempArr?.shift()?.toUpperCase() + restLetters;
        }
    }).join('');

    if (words.length > 140) {
        return false;
    }

    return `#${words}`;
}

function approach002(str){

if(str.trim ===''){
    return false;
}

const words =str.trim().split(/\s+/);

const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
)

const hashtag = '#'+capitalizedWords.join('');

return hashtag.length>140? false : hashtag;

}

function approach003(str){
    
    const hashtag =str.split(' ').reduce((tag,word)=>{
        return tag+word.charAt(0).toUpperCase()+word.subString(1);
    },'#');

    return hashtag.length ===1||hashtag.length>140 ? false : hashtag;
}

module.exports = generateHashtag;
