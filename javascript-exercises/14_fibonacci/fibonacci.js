const fibonacci = function(term) {
    let fib = [0 , 1];
    for( let i = 2; i < 100 ; i++ ){
        fib.push(fib[i - 1] + fib[i - 2]); 
    }
    if (term < 0){
        return "OOPS";
    }
    return fib[Number(term)];
};

// Do not edit below this line
module.exports = fibonacci;
