const findTheOldest = function(obj) {
    const currentYear = new Date().getFullYear();
    return obj.reduce((person, val) => {
        let prevAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
        let currentAge = (val.yearOfDeath || currentYear) - val.yearOfBirth;
        if (prevAge < currentAge){ 
            return val
        } 
        else{
            return person
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
