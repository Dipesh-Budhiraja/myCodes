
$(function() {
    var list = [];
    $('#btn').click(function(){
        // var value = "Task1"
        $("#output").html('');
        var value = $("#input").val();
        $.get('/getData?todo=' + value , function(data){
            console.log(data);
            // $("#output").text(data);
            list = data;
            for(var i in list){
                console.log(list[i]);
                $("#output").append(list[i] + '<br>');
            }
        })
        console.log("Response is not recieved");
    });
    $('#clear').click(function() {
        $.get('/clear', function(data) {
            $('#output').html(data);
        })
    });
});
