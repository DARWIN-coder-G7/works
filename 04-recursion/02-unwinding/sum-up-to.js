function sumUpTo(num) {
  return approach002(num);
}

function approach001(num){
    let total =0;
    if(num<=0)return 0;
    total+=num;
    return total+sumUpTo(num-1);
}

function approach002(n){
    if(n===1){return 1;}
    return n+sumUpTo(n-1);
}

module.exports = sumUpTo;
