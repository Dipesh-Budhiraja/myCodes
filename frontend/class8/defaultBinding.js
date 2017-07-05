
//console.log(x); will create var x in 1st pass and set it to undefine, in 2nd pass it checks for the value of x so the o/p is undefined
// var foo = "bar";
'use strict' //if ye use hua h and variable defined nhi hua and use kia to refernce error aega
console.log(this);
//internal working this.foo = undefined;//output is undefined when no 'use strict'
var foo = 5;//it will not be accessible from this.foo from line9;
function global() {
	// 'use strict'
	console.log(this.foo);
	console.log('I am global');
}

global();//default calling 

/*
'use strict'
function parent() {
	//use strict can be used here but it will be only valid for this functional scope
	console.log(this);
	function child1() {
		console.log(this);
	}//default binding
	function child2() {
		// body... 
		console.log(this);
	}

	child1();
	child2();
}
parent(); */