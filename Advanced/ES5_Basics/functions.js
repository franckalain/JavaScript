function calculateAge(birthYear){
    return 2020 - birthYear;
}

var myAge = calculateAge(1984);
var angeAge = calculateAge(1983);
var martialAge = calculateAge(1980);
console.log(myAge, angeAge, martialAge);


function yearUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement =  65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in '
                 + retirement + ' years');
    } else{
        console.log(firstName + ' is already retired');
    }
    
}

yearUntilRetirement(1984, 'Franck');
yearUntilRetirement(1948, 'Mike');
yearUntilRetirement(1969, 'Jane');