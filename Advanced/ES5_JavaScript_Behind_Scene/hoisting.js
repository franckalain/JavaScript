// hoisting works for function declaration

calculateAge(1984);

function calculateAge(year){
    console.log(2020 - year);
}


// hoisting dosen't works for function expression
//retirement(1980);
var retirement = function(year){
    console.log(65 -(2020 - year));
}
retirement(1980);

// variables
// variable object of a global execution context
var age = 23;

function foo(){
    var age = 65;
    console.log(age);
}

foo();
console.log(age);