
$(function(){
    // $("#btn").click(function(){
    //     $.get({url: 'todos/get', success: function(data){
    //         console.log(data);
    //         // $("#output").append(JSON.stringify(data));
    //     }});
    // });

    $("#btn").click(function(){
        $.post('todos/post', {id:1, done: 13}, function(data){
            console.log(data);
        });
    })
});
