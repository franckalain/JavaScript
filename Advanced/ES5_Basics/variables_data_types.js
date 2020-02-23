/************
 * variable and data types
 */

var firtName = 'Franck';
var lastName = 'Alain';
var age = 36;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'teacher';
console.log(job);

/*** 
 * 
 * variables naming rules
var _3years = 3;
var jonMark = "John and Mark";
var if = 23;

 * */ 


/*******************
 * variable mutation and coercion
 */
var firstName = 'Alain';
var age = 35;
console.log(firtName + '' + age);


// type coercion
var firstName, job, age, isMarried;
firstName = 'Franck';
job = 'Developer';
age = 36;
isMarried = false;

console.log(firstName + ' ' + 'is a ' + age + ' old.' 
                    + ' is he married ? ' + isMarried);

// variable mutation
age = 'thirty six';
job = 'JavaScript Master';
alert(firstName + ' ' + ' is a ' 
+ age + ' old' + ' is he married? ' + isMarried);

var lastName = prompt('what is tour lastname');
alert('your fullname is ' + firstName + ' '+ lastName);