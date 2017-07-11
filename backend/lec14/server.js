
var express = require('express');
var sql = require('./sql.js');
var bodyParser = require('body-parser');
var data;
var app = express();

app.use('/', express.static('public_static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todoList = [{"task":1},{"task":2},{"task":3}];

app.get('/todos/get', function(req, res){
    // var data = sql.get();
    // console.log(data);//undefined

    // sql.get(getData);

    //sir
    sql.get(function(data){
        console.log(data);
        // res.send(todoList);
        res.send(data);
    });
});


app.post('/todos/post', function(req, res){
    console.log(req.body);
    // console.log(req.body.id);
    // sql.postRequest(req.body.id, function(data){
    //     res.send(data);
    // });
    // res.send("Done POST");

});


// function getData(r){
//     var data = r;
//     console.log(data);
// }

app.listen(5000, function(){
    console.log("Server is running on port 5000");
});
