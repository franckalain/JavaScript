var markMass,  markHeigher;
markMass = 78;
markHeigher = 1.69;

var johnMass, johnHeigher; 
johnMass = 92;
johnHeigher = 1.95;

var markBmi = markMass / (markHeigher * markHeigher);
var johnBmi = johnMass / (johnHeigher * johnHeigher);
console.log(markBmi, johnBmi);

var isHeigherBmi = markBmi > johnBmi;
console.log(`is mark's bmi greather than john's ? ${isHeigherBmi}` );