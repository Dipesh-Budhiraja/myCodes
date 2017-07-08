var filesystem = require('fs');


// filesystem.writeFile('text.txt', "Hello World bye", function(err){
filesystem.writeFile('text.json', JSON.stringify({'1': 1}), function(err){
    if(err) throw err;
    console.log("Successfully written");
});


console.log("file is not written");

filesystem.readFile('text.txt', function(err, data) {
    if(err) throw err;
    console.log(data.toString());
});
