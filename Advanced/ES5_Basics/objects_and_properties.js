/***
 * Objects and Properties
 */

 // Object literal
 var john = {
     firstName : 'John',
     lastName : 'Smith',
     birthYear : 1990,
     family : ['jane', 'Mark', 'Bob', 'Emily'],
     job : 'Teacher',
     isMarried : false
 }
 console.log(john);

 console.log(john.firstName);
 console.log(john['birthYear']);
 console.log(john.family[1]);
 var x = 'birthYear';
 console.log(john[x]);

 john['job'] = 'Designer';
 john.isMarried = true;
 console.log(john.job);
 console.log(john);

 // New object syntax
 var jane = new Object();
 jane.Name = 'Jane';
 jane.lastName = 'Smith';
 jane['hobby'] = 'Football';
 console.log(jane);

 var mark = new Object();
 mark.firstName = 'Mark';
 mark.lastName = 'Smith';
 console.log(mark);