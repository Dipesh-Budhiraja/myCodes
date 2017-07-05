
var num = [1, 2, 3,4];

var ans =[];
Array.prototype.map1 = function() {
	// body... 

	this.forEach(function(x) {
		// statements
		ans.push(x*x*x);
	});
	console.log(ans);
}

num.map1();
//this that i have done is quite wrong as we also need to pass a func

//this is right
//sir

/*
	Array.prototype.map1 = function(def){
	var self = this;
	var newArray = [];

	self.forEach(function(x)){
	newArray.push(def(x));
	}
	console.log(newArray);

}
	result=[1,3,5,7].map1(function(x){return x*x*x;})
*/




