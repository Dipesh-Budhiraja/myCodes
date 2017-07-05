function Foo(who) {
	// body... 
	this.me = who;
}

Foo.prototype.identify = function(){
	// body... 
	return "I am "+ this.me;
};

Foo.prototype.getIdentify = function (){
	return "I am not "+this.me;
}

var a1 = new Foo("a1");
var a2 = new Foo("a2");

a2.speak = function (){
	console.log("Hello" + this.identify());
};

console.log(Foo.prototype);//foo is window object

console.log(a1.constructor.prototype);//this should not be done as it can change the linkages
console.log(a1.__proto__);
console.log(a1.identify());

console.log(a1.constructor === Foo);
console.log(a1.constructor === a2.constructor);
console.log(a1.__proto__ === a2.__proto__);
console.log(a1.constructor.prototype === a2.constructor.prototype);