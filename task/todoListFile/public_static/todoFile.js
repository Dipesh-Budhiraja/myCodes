var btn = $("#button");
var task = $("#taskAdded");
var myScreen = $("#displayTask");
var myForm = document.forms.myForm;
var priority;
var myreset = $("#reset");
var noOfElements = -1;
var reorder = $("#reorder");
var deleted = document.getElementById('dustbin');
var check = document.getElementById('check');
var show = document.getElementById('show');
var deleteStatement = document.getElementById('deleteStatement');

$(function(){
    //after refreshList
    $.get({url: 'todos/showTask', success: function(todoList){
        var cont = '';
        for (var i = 0; i < todoList.length; i++) {
            var priority = todoList[i].priority;
            cont += '<div' + ' style="background-color: ' + getColor(priority)+ '"' + '>' +
            ' <input ' +
                    (todoList[i].done? "checked": "" )  +
                 ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                   todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
              + '</div>';

         }
         myScreen.html(cont);
    }});

    btn.click(function(){
        var value = task.val();
        priority = myForm.priority.value;
        if(priority == 0){window.alert("Please Select Priority"); return;}
        else if(value == "") {
            window.alert("Please add some Task");
            return;
        }

        var obj = JSON.stringify({"task": value, "done": false, "priority": priority});
        task.val('');

        $.get({url: 'todos/add?todo=' + obj, success: function(todoList){
            var cont = '';
            for (var i = 0; i < todoList.length; i++) {
                // console.log(i);
                // console.log(todoList[i].task);
                var priority = todoList[i].priority;
                console.log(priority);
                cont += '<div' + ' style="background-color: ' + getColor(priority)+ '"' + '>' +
                ' <input ' +
                        (todoList[i].done? "checked": "" )  +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                       todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
                  + '</div>';

             }
             myScreen.html(cont);
        }});
    });

    myreset.click(function(){
        if(confirm('Are you sure you want to delete this List?')) {
            $.get({url: 'todos/reset', success:function(){
                myScreen.html('');
            }});
        }else{}
    });

    $("#dustbin").click(function(){
        deleted.style.display = "none";
        check.style.display = "inline";
        deleteStatement.style.display = "none";
        show.style.display = "inline";

        $.get({url: 'todos/showDeleted', success: function(todoList){
            var cont = '';
            for (var i = 0; i < todoList.length; i++) {
                var priority = todoList[i].priority;
                cont += '<div' + ' style="background-color:'+ getColor(priority) + '"' + '>' + '<span>'+ todoList[i].task + '</span>'+ '</div>'
             }
             myScreen.html(cont);
        }});
    });

    check.onclick = function() {
        $.get({url: 'todos/showTask', success: function(todoList){
            var cont = '';
            for (var i = 0; i < todoList.length; i++) {
                var priority = todoList[i].priority;
                cont += '<div' + ' style="background-color: ' + getColor(priority)+ '"' + '>' +
                ' <input ' +
                        (todoList[i].done? "checked": "" )  +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                       todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
                  + '</div>';

             }
             myScreen.html(cont);
        }});

        deleted.style.display = "inline";
        check.style.display = "none";
        deleteStatement.style.display = "inline";
        show.style.display = "none";
    };

    reorder.click(function(){
        $.get({url: 'todos/reorder', success: function(todoList){
            var cont = '';
            for (var i = 0; i < todoList.length; i++) {
                var priority = todoList[i].priority;
                cont += '<div' + ' style="background-color:' + getColor(priority) + '"' + '>' +
                ' <input ' +
                        (todoList[i].done? "checked": "" )  +
                     ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                       todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
                  + '</div>';

             }
             myScreen.html(cont);
        }});
    });

});

function setDone(el){
    $.get('todos/updateDone?id='+ el.id, function(response){

    });
}

function deletefn(id){
    $.get('todos/deleteElement?id='+ id, function(todoList){
        var cont = '';
        for (var i = 0; i < todoList.length; i++) {
            // console.log(i);
            // console.log(todoList[i].task);
            var priority = todoList[i].priority;
            cont += '<div' + ' style="background-color: ' + getColor(i)+ '"' + '>' +
            ' <input ' +
                    (todoList[i].done? "checked": "" )  +
                 ' onchange="setDone(this)" '+  ' id=' + i  + ' type="checkbox" class="checkbox"/>'  + '<input type="text"'+ ' value= "' +
                   todoList[i].task + '">' + '<i class="fa fa-times fa-2x" aria-hidden="true" onclick="deletefn('+i+')"></i>' + '</br>'
              + '</div>';

         }
         myScreen.html(cont);
    });
}

function  getColor(p) {
    var myColor;
    if(p == 1){
        myColor = "#E91E63";
    }
    else if(p == 2) {
        myColor = "#03A9F4";
    }
    else{
        myColor = "#27ae60";
    }
    return myColor;
}
