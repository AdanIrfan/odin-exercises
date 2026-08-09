const palindromes = function (str) {
    let clean_string = str.replace(/[^a-zA-Z0-9]/g, '');
    let reverse_string = clean_string.split('').reverse().join('');
    if (clean_string.toUpperCase() === reverse_string.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
