
var express = require('express');
var file = require('./file.js');
var todoList = [];
var deletedList = [];

var app = express();

app.use('/', express.static('public_static'));

app.get('/todos/add', function(req,res){
    var obj = req.query.todo;
    todoList.push(JSON.parse(obj));
    file.writefn(todoList);
    res.send(todoList);
});

app.get('/todos/updateDone', function(req, res){
    todoList[req.query.id].done = ! todoList[req.query.id].done;
    file.writefn(todoList);
    res.send("");
});

app.get('/todos/reset', function(req, res){
    todoList = [];
    deletedList = [];
    file.writefn(todoList);
    file.writeIntoDel(deletedList);
    res.send('reset done');
});

app.get('/todos/deleteElement', function(req, res){
    var id = req.query.id;
    deletedList.push(todoList[id]);
    todoList.splice(id, 1);
    file.writefn(todoList);
    file.writeIntoDel(deletedList);
    res.send(todoList);
});

app.get('/todos/showTask', function(req, res){
    file.readfn(function(data){
        res.send(JSON.parse(data.toString()));
    });
});



app.get('/todos/showDeleted', function(req, res){
    file.readDeleted(function(data){
        console.log(JSON.parse(data.toString()));
        res.send(JSON.parse(data.toString()));
    });
});

app.get('/todos/reorder', function(req, res){
    file.readfn(function(data){
        var objectified = JSON.parse(data.toString());
        objectified.sort(function(a, b){
            return a.priority - b.priority;
        });
        todoList = objectified;
        res.send(todoList);
    });
});

app.get('/read', function(req, res){
    file.readfn();
    res.send();
});

app.listen(5000 || process.env.port, function(response, err){
    if(err){throw err;}
    console.log("server is running on port 5000");
});
