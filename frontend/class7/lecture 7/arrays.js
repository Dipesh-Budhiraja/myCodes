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
    outputValue.innerHTML="";
    for(var i in todolist){
      outputValue.innerHTML+="<li onclick='strikeThrough(this)'" +
          "id="+i+">"+todolist[i].task+'<br>'+"</li>"

      if (todolist[i].done==true){
        var element=document.getElementById(i);
        element.style.textDecoration="line-through";
      }
    }
    inputValue.value="";
  };
};

function strikeThrough(obj){
  console.log(obj.id);
  var element=document.getElementById(obj.id);
  todolist[parseInt(obj.id)].done=true;
  element.style.textDecoration="line-through";
  // localStorage.setItem("todo",JSON.stringify(todolist));
  localStorage.setItem("todo",JSON.stringify(todolist));

}
