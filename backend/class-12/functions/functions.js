
function main(){
    console.log("Hello World");
}//ye automatically export nhi hoga

hello = function() {
    //type of window scope
    console.log("Hello");
}//ye automatically ho jaega export but use strict to stop this

var obj = {
    name: "Dipesh",
    age: 19
};



module.exports = {
    "a": main,
    "person": obj
};
