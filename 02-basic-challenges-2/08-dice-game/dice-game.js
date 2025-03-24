function diceGameSimulation(iterationCount) {
    return approach002(iterationCount);
}

function approach001(count) {
    const resultArray = [];
    for (let i = 0; i < count; i++) {
        let status = {
            dice1: Math.floor(Math.random() * 6) + 1,
            dice2: Math.floor(Math.random() * 6) + 1,
            get sum(){
             return this.dice1+this.dice2;
            },
            get result(){
                return ((this.sum == 2) || (this.sum == 3) || (this.sum == 12)) ? 'lose':
                ((this.sum == 7) || (this.sum == 11)) ? 'win' : 'roll again';
            }
        };
        // console.log(status);
        // status.sum = status.dice1 + status.dice2;
        // if ((status.sum == 2) || (status.sum == 3) || (status.sum == 12)) {
        //     status.result = 'lose';
        // } else if ((status.sum == 7) || (status.sum == 11)) {
        //     status.result = 'win';
        // } else {
        //     status.result = 'roll again';
        // }
        resultArray.push(status)
    }
    return resultArray;
}

function approach002(count){
    const resultArray = [];
    for (let i = 0; i < count; i++) {
        let status = (()=>{
            return {
                dice1:Math.floor(Math.random() * 6) + 1,
                dice2:Math.floor(Math.random() * 6) + 1,
                get sum(){
                    return this.dice1+this.dice2;
                   },
                get result(){
                    return ((this.sum == 2) || (this.sum == 3) || (this.sum == 12)) ? 'lose':
                    ((this.sum == 7) || (this.sum == 11)) ? 'win' : 'roll again';
                }
            }
        })();
        resultArray.push(status)
    }
    return resultArray;
}

module.exports = diceGameSimulation;
