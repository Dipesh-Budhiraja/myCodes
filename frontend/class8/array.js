'use strict'

var todoList = [];

window.onload = function () {
	var inputValue = document.getElementById('getValue');
	var addTodo = document.getElementById('done');
	var outputValue = document.getElementById('output');

	//add refresh list function here
	todoList = JSON.parse(localStorage.getItem('todo'))||[];//sir
	console.log(todoList);
	if(!todoList){
		localStorage.setItem('todo', JSON.stringify(todoList));
	}

	function myrefresh(){
		for(var i = 0; i < todoList.length; i++){
			if(todoList[i].done == false){
				outputValue.innerHTML += '<li onclick="strikeThrough(this)"'+ "id="+ i + '>' + todoList[i].task + '</li>';
			}
			else{
				// outputValue.innerHTML += '<li style="textDecoration:\'line-through\';"' +'>' + todoList[i].task + "hi"+ '</li>';
				// outputValue.innerHTML += '<li>' + todoList[i].task + '</li>';
				outputValue.innerHTML += '<li onload="strikeThrough2(this)"'+ "id="+ i + '>' + todoList[i].task + '</li>';
				strikeThrough2(todoList[i]);
				// console.log(JSON.stringify(todoList[i]));
				// strikeThrough2(JSON.stringify(todoList[i]));
			}
		}
	}

	myrefresh();
	// var todoList = [];
	
	addTodo.onclick = function () {
		var value = inputValue.value;

		todoList.push({
			"task": value,
			"done": false
		});

		// console.log(todoList);
		outputValue.innerHTML = '';
		myrefresh();
		localStorage.setItem('todo', JSON.stringify(todoList));
		/*for(var i = 0; i < todoList.length; i++){

			 outputValue.innerHTML += '<li onclick="strikeThrough(this)"' + "id=" + i + '>' + todoList[i].task + '</li>' ;// + '</br>';
			 localStorage.setItem('todo', JSON.stringify(todoList));

			 //var element = todoList[i].task;
			 //outputValue.innerHTML += '<li'+ "value=" + element + 'onclick="strikeThrough(value)"' + "id=" + i + '>' + todoList[i].task + '</li>' ;
			//outputValue.innerHTML += JSON.stringify(todoList[i]);// + '</br>';
			//Json.stringify is used to print object with elements with properites
			//json.parse is done on a var that has stored stringify value to print it in the form of object
			//json- js object notation 
		}*/
	}
}

function strikeThrough2(el2){
	// body... 
	el2.style.textDecoration = 'line-through';
	el2.style.color = 'gray';
}

function strikeThrough(el) {
	// console.log(el);
	console.log(el.id);
	todoList[el.id].done = true;
	// var element = document.getElementById(el.id);
	el.style.textDecoration = 'line-through';
	el.style.color = 'gray';
	localStorage.setItem('todo', JSON.stringify(todoList));
}

//session storage destroyed after closing the browser
//local storage remains

//localstorage.setElement()
//use JSON.stringinfy when to store in local storage
//use JSON.parse when to read in local storage

//session storage

//project local storage db management