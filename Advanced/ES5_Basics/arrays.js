// initialize new array
var names = ['Franck', 'Alain', 'Martial'];
console.log(names[1]);
console.log(names.length);

// mutate array
names[1] = 'Jean';
names[2] = 'jane';
console.log(names[1]);
console.log(names);

names[names.length] = 'Mary';
console.log(names);

// different data types

var john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');
console.log(john);

john.unshift('Mr');
console.log(john);

john.pop();
console.log(john);
john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf('smith'));

var isTeacher = john.indexOf('teacher') === 3 ? `${john[1]} is a teacher` : 'john is not a teacher';
console.log(isTeacher);


var bill = [];
bill.push(1, 2, 3);
console.log(bill);

bills = [];
var tips = function tipsBill(){
    a = 50 * 0.2;
    return a;
    bills.push(a);

}
console.log(tips());