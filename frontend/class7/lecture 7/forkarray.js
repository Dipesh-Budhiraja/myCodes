// use strict
var todolist=[];
window.onload = function () {
  var inputValue=document.getElementById("getValue");//input
  var addTodo= document.getElementById("done");
  var outputValue=document.getElementById("output");


  addTodo.onclick=function(){
    var value=inputValue.value;
    todolist.push({
      "task":value,
      "done":false
    });
    // outputValue.innerHTML="";
    // for(i in todolist){
      outputValue.innerHTML+="<li onclick='strikeThrough(this)'"
       +"id="+value+">"+value+'<br>'+"</li>"
    // }
    inputValue.value="";
  };
}

function strikeThrough(obj){
  console.log(obj.id);
  var element=document.getElementById(obj.id);
  element.style.textDecoration="line-through";
  for (var t in todolist) {
    if (todolist[t].task==obj.id){
      todolist[t].done=true;
    }
  }
  console.log(todolist);
}
