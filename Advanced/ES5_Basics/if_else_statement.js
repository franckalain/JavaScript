/***
 * If Else Statement
 */

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefuller marry');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married');
} else{
    console.log(firstName + ' will hopefully married soon :)');
}


var markMass,  markHeigher;
markMass = 78;
markHeigher = 1.69;

var johnMass, johnHeigher; 
johnMass = 92;
johnHeigher = 1.95;

var markBmi = markMass / (markHeigher * markHeigher);
var johnBmi = johnMass / (johnHeigher * johnHeigher);

if (markBmi > johnBmi){
    console.log(`Mark's BMI is heigher than John's`);
} else {
    console.log(`John's BMI is heigher than mark's`);
}