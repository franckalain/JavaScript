// The this keyword

//console.log(this);

/**
 * calculateAge(1984);

function calculateAge(year){
    console.log(2020 - year);
    console.log(this);
}

*/

var john = {
    name : 'John',
    yearOfBirth : 1980,
    calculateAge : function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        /** 
         * function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
        
    }
}

john.calculateAge();


var mike = {
    name : 'Mike',
    yearOfBirth : 1984
};

// Emprunter fonction
mike.calculateAge = john.calculateAge;
mike.calculateAge();