
var todoList = JSON.parse(localStorage.getItem('todo'));

if(todoList === null){
    todoList = [];
    localStorage.setItem('todo', JSON.stringify(todoList));
}

window.onload = function () {
        var task = document.getElementById('task');
        var add = document.getElementById('add');
        var output = document.getElementById('output');

        refreshList();

        add.onclick = function() {
            var value = task.value;
            task.placeholder = "Add";
            var obj = {"task": value,
                        "done": false};
            todoList.push(obj);
            localStorage.setItem('todo', JSON.stringify(todoList));
            refreshList();
        };

        function refreshList() {
            todoList = JSON.parse(localStorage.getItem('todo'));
            var cont = '';

            for (var i = 0; i < todoList.length; i++) {
                cont = cont + '<input ' +
                        (todoList[i].done? "checked": "" ) +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox"/>' + '<input type="text"' + ' value= ' +
                       todoList[i].task + '>' + '</br>';
                }
            output.innerHTML = cont;
        }
};

function setDone(el){
    console.log(el);
    todoList[el.id].done = el.checked;
    localStorage.setItem('todo', JSON.stringify(todoList));
}
