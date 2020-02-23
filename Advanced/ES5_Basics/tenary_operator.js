var firstName = 'john';
var age = 22;

// tenary operator
age >= 18 ? console.log(`acces autorized`) : console.log(`access denied`);

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// switch statement
var job = 'developer';
var mentor = 'franck';

switch(job){
    case 'developer':
        console.log(mentor + ` teaches how to code javascript`);
        break;
    case 'designer':
        console.log(mentor + ` design beautiful websites`);
        break;
    case 'manager':
        console.log(mentor + ` manage projects`);
        break;
    default:
        console.log(mentor + ` does something`);
}

switch(true){
    case age < 18:
        console.log(`acces denied`);
        break;
    case age = 18:
        console.log('acces authirized');
        break;
    default:
        alert(prompt('enter your age'))
;        console.log('access authorized');

}