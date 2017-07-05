function Person (name, school) {
	// body... 

	this.name = name;
	this.school = school;
}

Person.prototype.setclass = function(class){
	// this.class = class;
	console.log('The name is '+ this.name);
	// body... 
};

Person.prototype.getclass = function(){
	// body... 
	console.log(this.name);
	console.log(this.class);
};

