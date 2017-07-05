function hello() {
	// body... 
	console.log(this.bar);
}

var obj1 = {
	foo: hello;
	bar: "bar of object1";
}

var obj2 = {
	foo: hello;
	bar: "bar of object2";
}

hello.call(obj1, "hello");//1st parameter is this, only object is allowed as a parameter 
hello.call(obj2, "bye");