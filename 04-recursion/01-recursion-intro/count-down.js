function countDown(num) {
    //Base Case
    if(num <=0){
        console.log('All done!');
        return;
    }
    //RecursiveCase
    console.log(num);
    num--;
    countDown(num);
}

module.exports = countDown;
