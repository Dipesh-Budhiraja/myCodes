

var express = require('express');

var app = express();

var todoList = [];

app.use('/', express.static('public_static2'));

app.get('/clear', function (req, res) {
    todoList = [];
    res.send('');   
});

app.get('/getData', function(req, res){
    // res.send("request handled");
    todoList.push(req.query.todo);
    res.send(todoList);
    // res.send(req.query.todo);
});

app.listen(4000 || process.env.port, function(response, err){
    if(err) throw err;
    console.log("server 4000 is running");
})
