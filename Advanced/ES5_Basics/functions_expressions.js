/***functions declaration
function whatDoYouDo (){
}
*/

/**
 * function statements and expressions
 */

 var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'Teacher':
            return firstName + ' teaches how to code';
        break;
        case 'driver':
            return firstName +  ' drives a cab';
            break;
        case 'designer':
            return firstName + ' design beautiful websites';
            break;
        default:
            return firstName + ' do something else';
    }
 }

 console.log(whatDoYouDo('Teacher', 'Franck'));
 console.log(whatDoYouDo('driver', 'John'));
 console.log(whatDoYouDo('designer', 'Alain'));