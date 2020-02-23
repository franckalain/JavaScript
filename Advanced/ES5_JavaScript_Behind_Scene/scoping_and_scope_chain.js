// Execution stack
var a = 'hello!';
first();

function first(){
    var b = ' hi! ';
    second();

    function second(){
        var c = ' Hey!';
        console.log(a + b + c);
    }
}

// Scope chain

var a = 'hello!';
first();

function first(){
    var b = ' hi! ';
    second();

    function second(){
        var c = ' Hey!';
        third();
    }
}

function third(){
    var d = ' John';
   // console.log(c);
   console.log(a + d);
}