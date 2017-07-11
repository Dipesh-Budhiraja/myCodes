var mysql = require('mysql');

var dbconfig = {
    host: 'localhost',
    user: '\'dipesh\'',
    password: 'password',
    database: 'newdb'
};

function getTodos(cb){
    var connection = mysql.createConnection(dbconfig);
    console.log("sqlDB is running");
    connection.connect();
    connection.query('SELECT * FROM todos', function(err, rows, fields){
        if(err){throw err;}
        // console.log(rows);
        cb(rows);
    });
}

function updateRequest(id, cb){
    var connection = mysql.createConnection(dbconfig);
    console.log("update request is running");
    connection.connect();
    connection.query('UPDATE todos SET done=12 where id=' + id, function(err, rows, fields){
        if(err){throw err;}
        console.log("updated id" + id);

        connection.query('SELECT * FROM todos', function(err, rows, fields){
            if(err){throw err;}
            cb(rows);
        })
    })
}

module.exports = {
    get: getTodos,
    updateRequest: updateRequest
}
