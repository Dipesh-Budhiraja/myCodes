// nam()
function hello(){
  console.log("global scope");
}

hello(); //it is an rhs reference

var nam=function() {
  console.log("me in global scope to");
};//fn that are not hoisted
// they can not be called beore they are  declared
nam();

var obj={
    x:hello,
    y:"execute"
};
var x=16;
console.log(obj);
function parent(){
    var x=12;
    // window.child=function() {
    //passing a fn inside a fn is called callback
    function child(child1) {
        console.log(this.x);
        child1();
        console.log(x);
    }
    // child1();
    child(child1);
    function child1() {
        x++;
    }
}
parent();
// child();
