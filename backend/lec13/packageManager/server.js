
var express = require('express');
// console.log(typeof(express));
var app = express();

var todoList = [];

//more preference
app.use('/', express.static('public_static') );//it searches for index.html

// app.get('/', function (req, res) {// '/' means self
//     res.send("Hello World");
// });
/*
app.get('/greet', function (req, res) {// '/' means self
    // res.send("greet");
    // console.log(req.query.todo);

    res.send('greet ' + req.query.todo);
    // res.send('Hello world');
});*/

app.get('/push', function(req, res){
    todoList.push(req.query.todo);
    // res.send('');
    res.send(JSON.parse(todoList));
});

app.get('/showcase', function(req, res){
    // res.send(todoList);
    res.send(JSON.parse(todoList));
});


//first this runs and port number is allocated
app.listen(4100 || process.env.port, function(response, err){//when uploading to heroku if 4100 is not then it redirects to something else
    if(err){
        throw err;
    }
    console.log("server is running on port 4100");
});
