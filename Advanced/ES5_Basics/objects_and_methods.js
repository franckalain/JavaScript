/***
 * Objects and Methods
 */

var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['jane', 'Mark', 'Bob', 'Emily'],
    job : 'Teacher',
    isMarried : false,
    calcAge : function (){
        this.age = 2020 - this.birthYear;
    }
}
john.calcAge();
console.log(john);
