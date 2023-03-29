const sumAll = function(min, max) {

    if(typeof min!='number' || typeof max!='number') return "ERROR";

    if(min>max) {
        let temp = min;
        min = max;
        max = temp;
        console.log(temp, min, max)
    }

    if(min<0) return "ERROR";

    let sum=0;
    for(let x=min;x<max+1;x++) {
        sum += x;
    }

    return sum;
};

console.log(sumAll("asd", 4))

// Do not edit below this line
module.exports = sumAll;
