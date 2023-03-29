const repeatString = function(word, max) {
    let temp="";
    for(let x=0;x<max;x++) {
        temp+=word;
        
    }
    return temp;
}

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
