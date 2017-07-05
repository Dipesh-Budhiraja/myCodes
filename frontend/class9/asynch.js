
function  b(url){
	console.log('b runs');
	setInterval(ajax(url, function(data){
		console.log(data);//asynch as ye yahan run nhi hua ussne wait kia
	}), 1000);
	console.log('After b');
}

function ajax(url, callback){
	var k = getResponse();
	if(k !== undefined){
		callback(k);
	}
}

setInterval(b("hello"), 1000);

function getResponse(){
	/*setTimeout(function() {
		// console.log('hello world');
		return "hello world";
	}, 2000 );*/

	return "hello world";
}


/*
function a(){
	console.log('Before Timer');
	setInterval(b, 3000);//ye 3 sec wait krega event queue mei jaane k liye
	console.log('After Timer');
}

function b(){
	console.log('I am B');

	// new XMLHttpRequest()
}

a();

*/
/*

function a(){
	var x = 5;
	console.log('Hello');
}

function b(y){
	console.log(y);
	console.log(x);//error bcoz x is in a ka scope
}

b(a);//window scope bcoz default binding*/


/*
function getData(d, cb){
	var x = d + 1;
	// cb(d);(1) 

}


//(1)
// getData(5, function(x){
// 	console.log(x*x);
// 	return x*x;
// });

*/