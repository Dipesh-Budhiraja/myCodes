hello();//it is an Rhs reference

function hello () {
	console.log('Global scope');
}//LHS reference

//nam();//it will not work beacuse nam fn is not hoisted in the first pass 
//bcoz only variable is created but not defined in 1st pass
//1st pass is based on compiler and 2nd is based on interpreter
var nam = function() {
	console.log('i am also global reference');
};

nam();

var obj = {
	x: hello,
	y: "execute"
}

console.log(obj.x);

console.log(obj.x());


function parent() {
	var x = 12;// if this x wasnt here then above one would be taken(window object)
	// function child1(){
	// 	console.log(x);
	// } or

	window.child1 = function(){
		console.log(x);//child1 is now available to the window but window does not know what is x
	}
	function child2() {
		x = 13;
	}
	child2();//it will change x=13	
	child1();
}

parent();//  without this line child1 will not get its defn. so parent must be executed first

child1();
 var x = 25;
function parent2() {
	var x = 12;
	function child1 (child) {
		child();
	}

	function child2 () {
		// body... 
		x= 13;
		y=22;//it willl make y in global scope
		console.log(x);
		console.log(this.x);//it will 

	}
	child1(child2);//this is known as call back- passing a fn inside another fn
}

parent2();//closure

