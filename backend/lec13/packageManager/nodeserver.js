


var http = require('http');
// console.log(http);
var port = 5000;//below 1000 internal processes so use above thousand

function requesthandler(req, res) {
    res.end("Hello World");
}

var server = http.createServer(requesthandler);

server.listen(port, function(err){
    if(err) {
        throw err;
    }
    console.log("Server is running");
});
