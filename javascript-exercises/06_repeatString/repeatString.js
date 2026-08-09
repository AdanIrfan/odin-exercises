const repeatString = function (word, num) {
    let string = "";
    for(let i = num; i > 0; i--){
        string += word;
    }
    return string;
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
