//'use strict'

// function hello (argument) {
// 	//immediately invoked function definition
// 	console.log('I am inside IIFE');
// }

(function(){
	function hello() {
		//immediately invoked function definition
		console.log('I am inside IIFE');
	}

	window.main = hello;//this means defn
})();//used for protecting data like public, private, protected

main();

//"public1": public1;it only calls defn not execution
//"public1": public1();it executes
