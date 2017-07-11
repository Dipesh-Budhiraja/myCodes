
$(function(){
    var list = [];
    $("#btn").click(function(){
        $.get({url: 'todos/get', success: function(data){
            console.log(data);
            list = data;
            for(var i in list){
                $("#output").append(list[i].task + '<br>');
            }
        }});
    });

    $("#update").click(function(){
        $.post('todos/post', {id: 2}, function(data){
                console.log(data);
        });
    });

});
