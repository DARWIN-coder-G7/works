function validAnagrams(str1,str2) {
    return approach002(str1,str2);
}

function approach001(str1,str2){
    const str1Sum = str1.toLowerCase().split('').reduce((total,current) => total+current.charCodeAt(0),0);
    const str2Sum = str2.toLowerCase().split('').reduce((total,current) => total+current.charCodeAt(0),0);
    return str1Sum === str2Sum;
}

function approach002(str1,str2){
const freqcount1 = str1.split('').reduce((acc,char)=>{
    acc[char] = (acc[char] || 0)+1;
    return acc;
},{});

const freqcount2 = str2.split('').reduce((acc,char)=>{
    acc[char] = (acc[char] || 0)+1;
    return acc;
},{});

 const str1FreqEvery = Object.keys(freqcount1).every(char => freqcount1[char] === freqcount2[char]);
 const str2FreqEvery = Object.keys(freqcount2).every(char => freqcount1[char] === freqcount2[char]);

 return str1FreqEvery&&str2FreqEvery;

}

module.exports = validAnagrams;
