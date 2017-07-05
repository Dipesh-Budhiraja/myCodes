/*var a = process.argv.slice(2);

var km = a[0];
var min = a[1];

if(km < 0 || min < 0){
    console.log("Kahan jaana chahte ho");
    return;
}

var charge;

function forKm(km){
    if(km <= 2){
        charge = 25;
    }
    else{
        charge = 25 + (km-2)*25;
    }
}

forKm(km);

function forMin(min) {
    if(min > 15){
        charge += min-15;
    }
}

forMin(min);

console.log(charge);

*/
    console.log(process.argv[2]<0||process.argv[3]<15?"wtf": 25 + Math.max(0, process.argv[2]-2)*25 + Math.max(0, process.argv[3]-15));
