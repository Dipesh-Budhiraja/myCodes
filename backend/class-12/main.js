

// console.log("Hello World");

// console.log(process.argv);
// console.log(process.argv[4]);

// console.log(process.argv.slice(2).sort());

var a = process.argv.slice(2);

a.sort(function(a, b){
    return a - b;
});

// console.log(a);
// for (var i in a){
//     a[i] = parseInt(a[i]);
// }//wrong approach
/*
var b = a.map(function(x){
    return parseInt(x);
});*/

var b = a.map((x) => parseInt(x));//arrow functions

console.log(b);

console.log(process.argv.slice(2).sort((a,b) => a-b).map((x) => parseInt(x)));
