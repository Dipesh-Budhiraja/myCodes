var uli=document.getElementById("uli");

var time = document.getElementById("time");
var date = new Date();
var start = Date.now();

for(var i = 1; i <= 100; i++) {
	if(i%3==0 && i%5!=0) {
		uli.innerHTML+="<li>"+("fizz")+"</li>";
	}
	else if(i%3!=0 && i%5==0){
		uli.innerHTML+="<li>"+("buzz")+"</li>";
	}
	else if(i%3==0 && i%5==0){
		uli.innerHTML+="<li>"+("fizzbar")+"</li>";//+= for append
	}
	else {
		uli.innerHTML+="<li>"+ i +"</li>";
	}

}

var elapsed = Date.now() - start;
time.innerHTML = elapsed;


// var date = new Date();
// var month = date.getMonth();
// console.log(date);
// console.log(month);

// to convert string to int use parseInt()
// x = "1";
// var val = parseInt(x);
// console.log(val);


