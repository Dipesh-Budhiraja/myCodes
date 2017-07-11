
var express = require('express');
var sql = require('./sql.js');
var bodyParser = require('body-parser');
var app = express();

app.use('/', express.static('public_static'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var todoList = [{"task": 1},{"task": 2},{"task": 3}];

app.get('/todos/get', function(req, res){
    sql.get(function(data){
        console.log(data);
        res.send(data);
    });
    // res.send(todoList);
});

app.post('/todos/post', function(req, res){
    console.log(req.body.id);
    sql.updateRequest(req.body.id, function(data){
        res.send(data);
    })
    // res.send("Done Post");
})

app.listen(5000 || process.env.port, function(response, err){
    if(err){throw err;}
    console.log("Server is running on 5000");
})
