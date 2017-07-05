

function person() {//resembles to constructor
	this.main = "Ram";
	this.school = "MC-S";
}
//person-function, Person-class
var x = new person();
console.log(x);
console.log(x.main);

//internal working
// function new() {
// 	var x = Object.create();//search mdn for object.create
// 	x = this;
// 	return x;
// }

