var mysql = require('mysql');

var dbconfig = {
  host     : 'localhost',
  user     : '\'dipesh\'',
  password : 'password',
  database : 'main'
};


function getTodos(getData){
    var connection = mysql.createConnection(dbconfig);
    console.log("SqlDB is running");
    connection.connect();
    connection.query('SELECT * FROM  todos', function(err, rows, fields){
        if(err){throw err;}
        // console.log(rows);
        getData(rows);
        // console.log(fields);
    });
}

function updateTodos(id, cb) {
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    connection.query('UPDATE todos SET done=12 where id='+ id, function(err, rows, fields){
        if(err){throw err;}
        console.log("Updated" + id);
        // console.log(rows);
        // cb(rows);

        connection.query('SELECT * FROM  todos', function(err, rows, fields){
            if(err){throw err;}
            // console.log(rows);
            cb(rows);
            // console.log(fields);
        });
    });
}

module.exports = {
    get: getTodos,
    postRequest: updateTodos
};
