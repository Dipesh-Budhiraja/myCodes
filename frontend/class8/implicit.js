
var bar = "Global Bar";

var x = {
	"foo": foo,
	"bar": "hello"
};

function foo() {
	// body...
	console.log(this.bar); 
	console.log(this.foo);
	console.log(this);
}

foo();//abhi default binding hui hao

x.foo();//implicit biding   . k left side par jo bhi h vo this hai
//this yahan par x ho jaega