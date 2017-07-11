
var filesystem = require('fs');

function writefn(todoList){
    filesystem.writeFile('text.txt', JSON.stringify(todoList), function(err){
        if(err){throw err;}
        console.log("File is Successfully written");
    });
}

function writeIntoDel(deletedList){
    filesystem.writeFile('deletedList.txt', JSON.stringify(deletedList), function(err){
        if(err){throw err;}
        console.log("File is Successfully written into deletedList");
    });
}

function readDeleted(cb){
    filesystem.readFile('deletedList.txt', function(err, data){
        if(err){throw err;}
        // console.log(data.toString());
        cb(data);
    });
}

function readfn(cb){
    filesystem.readFile('text.txt', function(err, data){
        if(err){throw err;}
        // console.log(data.toString());
        cb(data);
    });
}

module.exports = {
    writefn: writefn,
    readfn: readfn,
    writeIntoDel: writeIntoDel,
    readDeleted: readDeleted
}
