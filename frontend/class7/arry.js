'use strict'
var todoList = [];

window.onload = function () {
	var inputValue = document.getElementById('getValue');
	var addTodo = document.getElementById('done');
	var outputValue = document.getElementById('output');

	//add refresh list function here
	
	addTodo.onclick = function () {
		var value = inputValue.value;

		todoList.push({
			"task": value,
			"done": false
		});

		// console.log(todoList);
		outputValue.innerHTML = '';
		for(var i = 0; i < todoList.length; i++){
			 outputValue.innerHTML += '<li onclick="strikeThrough(this)"' + "id=" + i + '>' + todoList[i].task + '</li>' ;// + '</br>';
			 //var element = todoList[i].task;
			 //outputValue.innerHTML += '<li'+ "value=" + element + 'onclick="strikeThrough(value)"' + "id=" + i + '>' + todoList[i].task + '</li>' ;
			//outputValue.innerHTML += JSON.stringify(todoList[i]);// + '</br>';
			//Json.stringify is used to print object with elements with properites
			//json.parse is done on a var that has stored stringify value to print it in the form of object
			//json- js object notation 
		}
	}
};

function strikeThrough(el) {
	// console.log(el);
	console.log(el.id);
	todoList[el.id].done = true;
	// var element = document.getElementById(el.id);
	el.style.textDecoration = 'line-through';
	 el.style.color = 'gray';
	
}

//session storage destroyed after closing the browser
//local storage remains

//localstorage.setElement()
//use JSON.stringinfy when to store in local storage
//use JSON.parse when to read in local storage

//session storage

//project local storage db management